import { ApiResult } from "../../../models/ApiResult";
import { Tasks } from "@/models/entities/content/Tasks";
import { AxiosResponse } from "axios";
import { BaseService } from "../../BaseService";
export class TasksService extends BaseService<Tasks> {
  constructor() {
    super("/tasks");
  }

  updateTasks(code: any): Promise<AxiosResponse<ApiResult<Array<any>>>> {
    return this.client.Get<ApiResult<Array<any>>>(this.baseUrl + "/" + code);
  }
  deleteTasks(code: any): Promise<AxiosResponse<ApiResult<Array<any>>>> {
    return this.client.Delete<ApiResult<Array<any>>>(this.baseUrl + "/" + code);
  }
  createTasks(code: any): Promise<AxiosResponse<ApiResult<Array<any>>>> {
    return this.client.Post<ApiResult<Array<any>>>(this.baseUrl + "/" + code);
  }
}
