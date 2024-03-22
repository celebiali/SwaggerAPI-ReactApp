import { IEntityBase } from "@/models/IEntity";

export class Board implements IEntityBase {
  id: number;
  name: string;
  openAction: boolean;
  completeAction: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  tasks: any[];

  constructor() {
    this.id = 0;
    this.name = "";
    this.openAction = false;
    this.completeAction = false;
    this.order = 0;
    this.createdAt = "";
    this.updatedAt = "";
    this.deletedAt = null;
    this.tasks = [];
  }
}
