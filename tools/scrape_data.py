import requests
from bs4 import BeautifulSoup
import json
import re

# URL of the page to scrape
url = "https://oldschool.runescape.wiki/w/Vannaka"

# Send a GET request to fetch the raw HTML content of the page
response = requests.get(url)

# Parse the HTML content using BeautifulSoup
soup = BeautifulSoup(response.content, 'html.parser')

# Find the table with the class 'wikitable'
tasks_table = soup.find('table', class_='wikitable sortable lighttable qc-active')
tasks_data = []  # List to hold the tasks as dictionaries



def parse_unlock_requirement(unlock_requirement_html):
    """
    Parses the unlock requirement section to extract skill levels, combat levels,
    and quest completion requirements.
    
    Args:
        unlock_requirement_html (str): The HTML content of the unlock requirement cell.
        
    Returns:
        dict: A dictionary containing skill levels, combat levels, and quests.
    """
    unlock_data = {
        "skills": [],
        "combat_level": None,
        "quests": []
    }

    # Parse skills and levels (e.g., Slayer 60, Combat level 65)
    skill_pattern = r'data-skill="([^"]+)"[^>]*data-level="(\d+)"'
    skill_matches = re.findall(skill_pattern, unlock_requirement_html)
    
    for skill, level in skill_matches:
        unlock_data["skills"].append({
            "skill": skill,
            "level": int(level)
        })

    # Parse combat level (if specified, e.g., "Combat level 65")
    combat_pattern = r'data-skill="Combat level"[^>]*data-level="(\d+)"'
    combat_match = re.search(combat_pattern, unlock_requirement_html)
    
    if combat_match:
        unlock_data["combat_level"] = int(combat_match.group(1))

    # Parse quest names (e.g., completion of Priest in Peril)
    quest_pattern = r'completion of <a href="[^"]+" title="([^"]+)">([^<]+)</a>'
    quest_matches = re.findall(quest_pattern, unlock_requirement_html)

    for quest, quest_name in quest_matches:
        unlock_data["quests"].append(quest_name.strip())

    return unlock_data



if tasks_table:
    # Extract all table rows from the body (tbody)
    rows = tasks_table.find_all('tr')
    
    # Loop through each row, skipping the header row
    for row in rows[1:]:  # Skip the header row
        columns = row.find_all('td')
        
        # Only process rows that contain the relevant data (e.g., monsters with tasks)
        if columns:
            # Extracting the data from each column:
            monster_name = columns[0].get_text(strip=True)
            amount = columns[1].get_text(strip=True)
            extended_amount = columns[2].get_text(strip=True)
            unlock_requirement = columns[3]
            alternatives = columns[4].get_text(strip=True)
            weight = columns[5].get_text(strip=True)
            
            # Function to extract min and max values from range text (e.g., '40-90')
            def parse_range(text):
                if '-' in text:
                    min_val, max_val = text.split('-')
                    return int(min_val.strip()), int(max_val.strip())
                else:
                    return text.strip(), text.strip()
            
            # Parse Amount and Extended Amount into min and max values
            amount_min, amount_max = parse_range(amount)
            extended_min, extended_max = parse_range(extended_amount)
            
            # Create a dictionary for the current task
            task = {
                "monster": monster_name,
                "amount": {
                    "min": amount_min,
                    "max": amount_max
                },
                "extended_amount": {
                    "min": extended_min,
                    "max": extended_max
                },
                "unlock_requirement": parse_unlock_requirement(str(unlock_requirement)),
                "alternatives": alternatives,
                "weight": weight
            }
            
            # Append the task to the list
            tasks_data.append(task)
    
    # Write the collected tasks data to a JSON file
    with open('vannaka_tasks.json', 'w', encoding='utf-8') as f:
        json.dump(tasks_data, f, ensure_ascii=False, indent=4)
    
    print("Data saved to vannaka_tasks.json.")
else:
    print("Could not find the tasks table.")
