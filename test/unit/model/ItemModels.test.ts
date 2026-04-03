import {
  getItemModelPath,
  itemModelPaths,
  yellowPartyhatModelPath,
} from "../../../source";

describe("item model exports", () => {
  it("exposes the yellow partyhat model as a public package path", () => {
    expect(yellowPartyhatModelPath).toBe("osrs-tools/models/YellowPartyhat.obj");
    expect(getItemModelPath("yellowPartyhat")).toBe(yellowPartyhatModelPath);
    expect(itemModelPaths.yellowPartyhat).toBe(yellowPartyhatModelPath);
  });
});
