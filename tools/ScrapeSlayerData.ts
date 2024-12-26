import axios from 'axios';
import * as cheerio from 'cheerio';

interface SlayerMaster {
  name: string;
  tasks: string[];
}

async function fetchSlayerMasters(): Promise<SlayerMaster[]> {
  const url = 'https://oldschool.runescape.wiki/w/Slayer_masters';

  try {
    // Fetch the page content
    const { data } = await axios.get(url);

    // Load the HTML into Cheerio to parse the content
    const $ = cheerio.load(data);

    const slayerMasters: SlayerMaster[] = [];

    // Iterate over each Slayer Master section
    $('table.wikitable').each((_, table) => {
      const master: SlayerMaster = {
        name: '',
        tasks: []
      };

      // Extract the Slayer Master's name from the first row (or a specific header if necessary)
      const masterName = $(table).find('th').first().text().trim();
      if (masterName) {
        master.name = masterName;
      }

      // Iterate over the rows in the table to extract tasks (the rows with 'td' elements)
      $(table).find('tr').each((_, row) => {
        // Extract the task name from the first column of the row (td)
        const task = $(row).find('td').eq(0).text().trim();

        // Only consider rows with actual tasks (ignore headers or empty rows)
        if (task && !task.includes('Task') && task.length > 0 && !task.match(/\d{1,2} \w+ \d{4}/)) {
          master.tasks.push(task);
        }
      });

      // Only add the master if tasks are found
      if (master.tasks.length > 0) {
        slayerMasters.push(master);
      }
    });

    return slayerMasters;

  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

// Fetch and display the Slayer Masters data
fetchSlayerMasters().then(slayerMasters => {
  console.log('Slayer Masters and their tasks:');
  slayerMasters.forEach(master => {
    console.log(`Master: ${master.name}`);
    console.log('Tasks:', master.tasks.join(', '));
    console.log('---');
  });
});
