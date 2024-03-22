import { IEntityBase } from "@/models/IEntity";

export class Board implements IEntityBase {
  id: number;
  name: string;
  color: string;
  priority: number;
  constructor() {
    this.id = 0;
    this.name = "";
    this.color = "";
    this.priority = 0;
  }
}
