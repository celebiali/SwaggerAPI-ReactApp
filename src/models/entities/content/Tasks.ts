import { IEntityBase } from "@/models/IEntity";

export class Tasks implements IEntityBase {
  code: number;
  constructor() {
    this.name = "";
    this.description = "";
    this.boardId = 0;
    this.flagId = 0;
    this.startDate = "";
    this.endDate = "";
  }
  name: string;
  description: string;
  boardId: number;
  flagId: number;
  startDate: string;
  endDate: string;
}

export interface CraeteTasksQuery {
  name: string;
  description: string;
  boardId: number;
  flagId: number;
  startDate: string;
  endDate: string;
}
