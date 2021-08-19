import { ApiModuleParams } from "../../domain";
import { Request } from "../../utils/Request";
import { Changes } from "./Changes";
import { Snapshots } from "./Snapshots";

class ApiModuleV1 {
    private request: Request;
    public changes: Changes;
    public snapshots: Snapshots;

    constructor({ domain, apiKey }: ApiModuleParams) {
        this.request = new Request({
            domain,
            apiKey,
        });
        this.changes = new Changes(this.request);
        this.snapshots = new Snapshots(this.request);
    }
}

export { ApiModuleV1 };
