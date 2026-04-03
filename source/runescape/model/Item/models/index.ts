export const itemModelPaths = {
  yellowPartyhat: "osrs-tools/models/YellowPartyhat.obj",
} as const;

export type ItemModelName = keyof typeof itemModelPaths;

export function getItemModelPath(modelName: ItemModelName): string {
  return itemModelPaths[modelName];
}

export const yellowPartyhatModelPath = getItemModelPath("yellowPartyhat");
