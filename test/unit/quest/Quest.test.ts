import { Quest } from '../../../src/model/quest/Quest';

describe('Quest Interface', () => {
    it('should create a valid Quest object', () => {
        const quest: Quest = {
            id: 1,
            name: 'Cook\'s Assistant',
            difficulty: 'Novice',
            skillRequirements: {
                cooking: { level: 10, isBoostable: true }
            },
            status: 'Not Started',
            miniquest: false,
            shortName: 'cooks_assistant',
            url: 'http://example.com/cooks_assistant',
            series: 'None',
            members: false,
            questPoints: 1,
            length: 'Short',
            age: 'Fifth Age',
            startLocation: 'Lumbridge Castle',
            difficultyLevel: 'Easy',
            officialDifficulty: 'Novice',
            officialLength: 'Short',
            officialAge: 'Fifth Age',
            itemRequirements: ['Bucket of milk', 'Pot of flour', 'Egg'],
            recommendedItems: ['None'],
            recommendedSkills: { cooking: 10 },
            recommendedPrayers: ['None'],
            questRequirements: [],
            rewards: {
                experience: { cooking: 300 },
                items: ['Quest point'],
                areas: ['Lumbridge']
            }
        };

        expect(quest.id).toBe(1);
        expect(quest.name).toBe('Cook\'s Assistant');
        expect(quest.difficulty).toBe('Novice');
        expect(quest.skillRequirements.cooking.level).toBe(10);
        expect(quest.skillRequirements.cooking.isBoostable).toBe(true);
        expect(quest.status).toBe('Not Started');
        expect(quest.miniquest).toBe(false);
        expect(quest.shortName).toBe('cooks_assistant');
        expect(quest.url).toBe('http://example.com/cooks_assistant');
        expect(quest.series).toBe('None');
        expect(quest.members).toBe(false);
        expect(quest.questPoints).toBe(1);
        expect(quest.length).toBe('Short');
        expect(quest.age).toBe('Fifth Age');
        expect(quest.startLocation).toBe('Lumbridge Castle');
        expect(quest.difficultyLevel).toBe('Easy');
        expect(quest.officialDifficulty).toBe('Novice');
        expect(quest.officialLength).toBe('Short');
        expect(quest.officialAge).toBe('Fifth Age');
        expect(quest.itemRequirements).toContain('Bucket of milk');
        expect(quest.recommendedItems).toContain('None');
        expect(quest.recommendedSkills.cooking).toBe(10);
        expect(quest.recommendedPrayers).toContain('None');
        expect(quest.questRequirements).toHaveLength(0);
        expect(quest.rewards.experience?.cooking).toBe(300);
        expect(quest.rewards.items).toContain('Quest point');
        expect(quest.rewards.areas).toContain('Lumbridge');
    });
    
            
});