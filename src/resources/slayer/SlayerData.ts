import { Assignment } from "../../model/slayer/Assignment";
import { SlayerMaster } from "../../model/slayer/SlayerMaster";
import {
  Duradel,
  KonarQuoMaten,
  Krystilia,
  Mazchna,
  Nieve,
  Spria,
  Turael,
  Vannaka,
} from "./Masters";

type SlayerData = Record<string, SlayerMaster>;

// Gerenate the SlayerData object
const SlayerData: SlayerData = {
  Duradel,
  KonarQuoMaten,
  Krystilia,
  Mazchna,
  Nieve,
  Spria,
  Turael,
  Vannaka,
};

// Function to get a SlayerMaster by name
export function getSlayerMasterByName(name: string): SlayerMaster | undefined {
  return SlayerData[name];
}

export class SlayerTool {
  private slayerMasters: SlayerData;

  constructor(slayerMasters: SlayerData) {
    this.slayerMasters = slayerMasters;
  }

  getSlayerMaster(name: string): SlayerMaster | undefined {
    return this.slayerMasters[name];
  }

  getAllSlayerMasters(): SlayerMaster[] {
    return Object.values(this.slayerMasters);
  }
}

// Export the SlayerData object for use in other parts of the application
export default SlayerData;
export {
  Duradel,
  KonarQuoMaten,
  Krystilia,
  Mazchna,
  Nieve,
  Spria,
  Turael,
  Vannaka,
};
