import { Request } from "../shared/Request";

export class Module {
    public request: Request;

    constructor(request: Request) {
        this.request = request;
    }
}
