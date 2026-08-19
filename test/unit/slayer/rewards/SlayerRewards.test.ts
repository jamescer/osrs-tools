import {
  calculateBuysCost,
  calculateUnlocksCost,
  getBuyByItem,
  getBuysByCostRange,
  getBuysByRequirement,
  getExtendByName,
  getExtendsForTask,
  getUnlockByName,
  getUnlocksByCostRange,
  SlayerBuy,
  SlayerExtend,
  SlayerUnlock,
} from '../../../../src/runescape/model/slayer/rewards';

describe('Slayer rewards', () => {
  it('exposes buy details and query helpers', () => {
    const buy = new SlayerBuy({
      cost: 12,
      item: 'Test token',
      notes: 'Used by a test',
      requirements: ['7 Testing'],
      wikiUrl: 'https://example.com/test-token',
    });

    expect(buy.getItem()).toBe('Test token');
    expect(buy.getCost()).toBe(12);
    expect(buy.getNotes()).toBe('Used by a test');
    expect(buy.getRequirements()).toEqual(['7 Testing']);
    expect(buy.getWikiUrl()).toBe('https://example.com/test-token');

    expect(getBuyByItem('slayer ring')?.getCost()).toBe(75);
    expect(getBuysByCostRange(10, 35).map(item => item.getItem())).toEqual([
      'Broad bolts (x250)',
      'Broad arrows (x250)',
      'Looting bag',
    ]);
    expect(getBuysByRequirement('ranged').map(item => item.getItem())).toEqual([
      'Broad bolts (x250)',
      'Broad arrows (x250)',
    ]);
    expect(calculateBuysCost(['Slayer ring', 'Looting bag', 'Missing buy'])).toBe(85);
  });

  it('exposes extend details and task helpers', () => {
    const extend = new SlayerExtend({
      appliesTo: ['Test beast'],
      cost: 34,
      name: 'More tests',
      notes: 'Increases test coverage',
    });

    expect(extend.getName()).toBe('More tests');
    expect(extend.getCost()).toBe(34);
    expect(extend.getNotes()).toBe('Increases test coverage');
    expect(extend.getAppliesToTasks()).toEqual(['Test beast']);

    expect(getExtendByName('need more darkness')?.getAppliesToTasks()).toEqual(['Dark beasts']);
    expect(getExtendsForTask('metal dragons').map(item => item.getName())).toEqual([
      'Pedal to the metals',
      'I really mith you',
      "Ada'mind some more",
      'RUUUUUNE',
    ]);
  });

  it('exposes unlock details and cost helpers', () => {
    const objectUnlock = new SlayerUnlock({
      cost: 99,
      description: 'Object-style unlock',
      name: 'Object unlock',
      wikiUrl: 'https://example.com/object-unlock',
    });
    const positionalUnlock = new SlayerUnlock('Positional unlock', 11, 'Legacy constructor');

    expect(objectUnlock.getName()).toBe('Object unlock');
    expect(objectUnlock.getCost()).toBe(99);
    expect(objectUnlock.getDescription()).toBe('Object-style unlock');
    expect(objectUnlock.wikiUrl).toBe('https://example.com/object-unlock');
    expect(positionalUnlock.getName()).toBe('Positional unlock');
    expect(positionalUnlock.getCost()).toBe(11);
    expect(positionalUnlock.getDescription()).toBe('Legacy constructor');

    expect(getUnlockByName('gargoyle smasher')?.getCost()).toBe(120);
    expect(getUnlocksByCostRange(0, 10).map(item => item.getName())).toEqual([
      'Slug Salter',
      'Reptile Freezer',
      'I Wildy More Slayer',
    ]);
    expect(calculateUnlocksCost(['Gargoyle Smasher', 'Slug Salter', 'Missing unlock'])).toBe(130);
  });
});
