import axios from 'axios';
import fs from 'fs';
import * as cheerio from 'cheerio';

// Define the structure of the quest data
interface Quest {
    id: number;
    name: string;
    difficulty: string;
    length: string;
    questPoints: number;
    series: string;
    releaseDate: string;
}

interface SkillRequirement { skill: string; level: number; boostable: boolean }


// Extend the Quest interface for detailed quests
interface DetailedQuest extends Quest {
    description: string;
    leadDevelopers: string;
    membersOnly: boolean;
    quickGuideLink?: string;
    speedrunGuideLink?: string;
    completionRequirements: string[];
    skillRequirements: SkillRequirement[];
}

// Function to fetch quest details from the wiki
async function fetchQuestDetails(quest: Quest): Promise<DetailedQuest | null> {
    const questNameFormatted = quest.name.replace(/ /g, '_');
    const url = `https://oldschool.runescape.wiki/w/${questNameFormatted}`;

    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        // Extract quest details from the HTML structure
        const description = $('p').first().text().trim(); // Extracting the first paragraph as the description

        // Extracting quick guide and speedrun guide links if available
        const quickGuideLink = $('.messagebox-title a').first().attr('href');
        const speedrunGuideLink = $('.messagebox-title a').last().attr('href');

        // Extracting the lead developer(s)
        const leadDevelopers = $('th:contains("Lead developer(s)")').next().text().trim();

        // Check if it's members only
        const membersOnlyText = $('th:contains("Members")').next().text().trim();
        const membersOnly = membersOnlyText.toLowerCase() === 'yes';

        // Extract completion requirements
        const completionRequirements: string[] = [];
        $('ul > li').each((i, elem) => {
            const text = $(elem).text().trim();
            const link = $(elem).find('a').first();
            if (link.length) {
                const questName = link.text();
                completionRequirements.push(questName);
            }
        });

        // Extract skill requirements
        const skillRequirements: { skill: string; level: number; boostable: boolean }[] = [];
        $('li.scp').each((i, elem) => {
            const skillLink = $(elem).find('a').first();
            const skill = skillLink.text();

            // Cast the data-level attribute to string, then parse it to a number
            const levelText = $(elem).data('level') as string; // Use type assertion here
            const level = parseInt(levelText, 10);

            const isBoostable = $(elem).find('sup').text().includes('not boostable');

            skillRequirements.push({ skill, level, boostable: !isBoostable });
        });

        // Return an object with quest details and additional information
        return {
            ...quest,
            description,
            leadDevelopers,
            membersOnly,
            quickGuideLink: quickGuideLink ? `https://oldschool.runescape.wiki${quickGuideLink}` : undefined,
            speedrunGuideLink: speedrunGuideLink ? `https://oldschool.runescape.wiki${speedrunGuideLink}` : undefined,
            completionRequirements,
            skillRequirements,
        };
    } catch (error) {
        console.error(`Error fetching details for quest ${quest.name}:`, error);
        return null;
    }
}


// Main function to read quests from JSON and fetch details
async function scrapeQuestDetails() {
    const rawData = fs.readFileSync('tools/QuestData.json', 'utf-8');
    const quests: Quest[] = JSON.parse(rawData);

    const detailedQuests: DetailedQuest[] = []; // Explicitly type the array

    for (const quest of quests) {
        const details = await fetchQuestDetails(quest);
        if (details) {
            detailedQuests.push(details);
        }
    }

    // Write the detailed quest data to a JSON file
    fs.writeFileSync('tools/DetailedQuests.json', JSON.stringify(detailedQuests, null, 2));
    console.log('Detailed quest data has been written to detailed_quests.json');
}

// Run the script
scrapeQuestDetails().catch(console.error);