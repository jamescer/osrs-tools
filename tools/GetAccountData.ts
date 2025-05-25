import fetch from "node-fetch"; // This replaces the require() call

// Define a type for the OSRS Stats API response
interface OSRSStats {
  skills: {
    [key: string]: {
      level: number;
      experience: number;
    };
  };
  totalLevel: number;
  totalExperience: number;
}

const getOsrsAccountData = async (
  username: string,
): Promise<OSRSStats | null> => {
  const url = `https://api.osrsbox.com/players/${username}/stats`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data for player: ${username}`);
    }

    // Use type assertion to tell TypeScript that the response is of type OSRSStats
    const data = (await response.json()) as OSRSStats;

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Example usage
const username = "A squeezer";
getOsrsAccountData(username)
  .then((data) => {
    if (data) {
      console.log("Account Data:", data);
      console.log("Total Level:", data.totalLevel);
      console.log("Total Experience:", data.totalExperience);
      console.log("Skills:", data.skills);
    } else {
      console.log("No account data available.");
    }
  })
  .catch((error) => {
    console.error("Error fetching account data:", error);
  });
