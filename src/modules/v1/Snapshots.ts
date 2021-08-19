import { Module } from "../../domain/module";
import { Request } from "../../utils/Request";

class Snapshots extends Module {
    constructor(request: Request) {
        super(request);
    }

    create = () => {
        // TODO:
    };

    forReferenceId = () => {
        // TODO:
    };
}

export { Snapshots };
