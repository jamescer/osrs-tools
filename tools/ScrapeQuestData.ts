import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';  // Import the file system module


interface Quest {
    id: number;
    name: string;
    difficulty: string;
    length: string;
    questPoints: number;
    series: string;
    releaseDate: string;
}


const SKILL_NAMES = [
    'Attack', 'Hitpoints', 'Mining',
    'Strength', 'Agility', 'Smithing',
    'Defence', 'Herblore', 'Fishing',
    'Ranged', 'Thieving', 'Cooking',
    'Prayer', 'Crafting', 'Firemaking',
    'Magic', 'Fletching', 'Woodcutting',
    'Runecraft', 'Slayer', 'Farming',
    'Construction', 'Hunter'
]

const BASE_QUEST_URL = 'https://oldschool.runescape.wiki/w/';
const QUESTS_URL = 'https://oldschool.runescape.wiki/w/Quests/List';

async function scrapeQuests(url: string): Promise<Quest[]> {
    try {
        // Fetch the HTML content from the URL
        const { data } = await axios.get(url);

        // Load the HTML into cheerio
        const $ = cheerio.load(data);
        const quests: Quest[] = [];

        // Select the table rows
        const rows = $('table.wikitable tbody tr');

        // Iterate through each row in the table
        rows.each((_, row) => {
            const columns = $(row).find('td');
            if (columns.length === 0 || columns.length != 7) return; // Skip non quest tables
            const id = parseInt($(columns[0]).text().trim());
            const name = $(columns[1]).text().trim();
            const difficulty = $(columns[2]).text().trim();
            const length = $(columns[3]).text().trim();
            const questPoints = parseInt($(columns[4]).text().trim());
            const series = $(columns[5]).text().trim() || "N/A";
            const releaseDate = $(columns[6]).text().trim();

            quests.push({
                id,
                name,
                difficulty,
                length,
                questPoints,
                series,
                releaseDate,
            });
        });

        return quests;
    } catch (error) {
        console.error('Error fetching quest data:', error);
        return [];
    }
}

// Function to write quests data to a JSON file
function writeToFile(filename: string, data: Quest[]): void {
    fs.writeFile(filename, JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log(`Data successfully written to ${filename}`);
        }
    });
}


function main() {
    // Example usage
    scrapeQuests(QUESTS_URL)
        .then(quests => {
            writeToFile('tools/QuestData.json', quests); // Write the quest data to a file
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


main();