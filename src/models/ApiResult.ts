
export class ApiResult<T> {
    constructor() {
        this.error = new ApiError();
        this.isSuccess = false;
        this.count = 0;
        this.data = null;
    }
    error: ApiError;
    isSuccess: boolean;
    count: number;
    data: T | null;
}
export class ApiError {
    constructor() {
        this.message = "";
        this.key = "";
        this.isUiException = false;
        this.customExceptionType = null;

    }

    message: string;
    key: string;
    isUiException: boolean;
    customExceptionType: null;
}