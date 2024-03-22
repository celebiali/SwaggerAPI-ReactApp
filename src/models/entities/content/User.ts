import { IEntityBase } from "@/models/IEntity";

export class User implements IEntityBase {
  constructor() {
    this.email = "";
    this.id = 0;
    this.password = "";
    this.token = ""
  }
  email: string;
  id: number;
  password: string;
  token: string
}


export interface userLoginQuery {
  email: string;
  password:string;
}