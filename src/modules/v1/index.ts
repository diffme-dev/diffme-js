import { ApiModuleParams } from "../../domain";
import { Request } from "../../shared/Request";
import { Changes } from "./Changes";
import { Snapshots } from "./Snapshots";

class ApiModuleV1 {
    private request: Request;
    public changes: Changes;
    public snapshots: Snapshots;

    constructor({ domain, apiKey, version }: ApiModuleParams) {
        this.request = new Request({
            domain,
            apiKey,
            version,
        });
        this.changes = new Changes(this.request);
        this.snapshots = new Snapshots(this.request);
    }
}

export { ApiModuleV1 };
