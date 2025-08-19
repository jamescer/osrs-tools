import { getStatsByGamemode, getSkillPage } from 'osrs-json-hiscores';


/*
To run this file in Command Prompt, use:

npx ts-node tools/getAccount.ts <username> [gamemode]

Or, if you have ts-node installed globally:

ts-node tools/getAccount.ts <username> [gamemode]

Replace <username> and [gamemode] with the desired values.
*/

// Usage: ts-node tools/getAccount.ts <username> [gamemode]
// const [, username, gamemode] = process.argv;
const gamemode = 'main'; // Default gamemode
const username = 'A Squeezer' 
if (!username) {
  console.error('Usage: ts-node tools/getAccount.ts <username> [gamemode]');
  process.exit(1);
}

(async () => {
  try {
    const stats = await getStatsByGamemode(username, gamemode || 'main');
    console.log(JSON.stringify(stats, null, 2));
  } catch (err) {
    console.error('Error fetching account:', err);
    process.exit(1);
  }
})();

