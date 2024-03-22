import { ApiResult } from "../../../models/ApiResult";
import { Board } from "@/models/entities/content/Board";
import { AxiosResponse } from "axios";
import { BaseService } from "../../BaseService";
export class BoardService extends BaseService<Board> {
  constructor() {
    super("/boards");
  }

  getBoard(): Promise<AxiosResponse<ApiResult<Array<any>>>> {
    return this.client.Get<ApiResult<Array<any>>>(this.baseUrl);
  }
}
