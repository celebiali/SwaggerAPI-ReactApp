
import { HttpClient } from "./HttpClient";



export class BaseService<TEntity>   {
    baseUrl = "/api"
    public client: HttpClient;
    constructor(baseUrl = "") {
        this.baseUrl += baseUrl;
        this.client = new HttpClient();
    }
}