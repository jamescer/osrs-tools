export class Item {
    id: number;
    name: string;
    description?: string;
    value?: number;

    constructor(id: number, name: string, description?: string, value?: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.value = value;
    }
}