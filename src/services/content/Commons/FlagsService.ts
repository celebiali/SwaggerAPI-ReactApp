import { ApiResult } from "../../../models/ApiResult";
import { Board } from "@/models/entities/content/Board";
import { AxiosResponse } from "axios";
import { BaseService } from "../../BaseService";
export class FlagsService extends BaseService<Flags> {
  constructor() {
    super("/commons");
  }

  getFlags(): Promise<AxiosResponse<ApiResult<Array<any>>>> {
    return this.client.Get<ApiResult<Array<any>>>(this.baseUrl + "/flags");
  }
}
