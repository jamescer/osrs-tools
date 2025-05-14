import { SlayerMaster } from '../../model/slayer/SlayerMaster';
import { Assignment } from '../../model/slayer/Assignment';

import { Turael, Mazchna, Duradel, Krystilia, Vannaka, Nieve, KonarQuoMaten, Spria } from './Masters';

type SlayerData = Record<string, SlayerMaster>;


// Gerenate the SlayerData object
const SlayerData: SlayerData = {
  Turael,
  Mazchna,
  Duradel,
  Krystilia,
  Vannaka,
  Nieve,
  KonarQuoMaten,
  Spria,
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
export { Turael, Mazchna, Duradel, Krystilia, Vannaka, Nieve, KonarQuoMaten, Spria };
