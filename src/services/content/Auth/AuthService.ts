import { ApiResult } from "../../../models/ApiResult";
import { User } from "@/models/entities/content/User";
import { AxiosResponse } from "axios";
import { BaseService } from "../../BaseService";
export class AuthService extends BaseService<User> {
  constructor() {
    super("/auth");
  }


  Login(loginQuery:Object): Promise<AxiosResponse<ApiResult<Array<any>>>> {
    return this.client.Post<ApiResult<Array<any>>>(this.baseUrl +'/login',loginQuery);
  }
  Profile(): Promise<AxiosResponse<ApiResult<Array<any>>>> {
    return this.client.Get<ApiResult<Array<any>>>(this.baseUrl +'/profile');
  }
}
