import { Module } from "../../domain/module";
import { Request } from "../../utils/Request";

class Changes extends Module {
    constructor(request: Request) {
        super(request);
    }

    search = () => {
        // TODO:
    };

    forReferenceId = () => {
        // TODO:
    };
}

export { Changes };
