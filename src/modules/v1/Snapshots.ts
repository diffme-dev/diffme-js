import { FailureOrSuccess } from "../../core";
import { Module } from "../../domain/module";
import { Request } from "../../shared/Request";

export type SnapshotCreatedResponse = {
    snapshot: any;
};

export type SnapshotsForReferenceResponse = {
    changes: any[];
};

class Snapshots extends Module {
    constructor(request: Request) {
        super(request);
    }

    create = async (): Promise<
        FailureOrSuccess<Error, SnapshotCreatedResponse>
    > =>
        this.request.get({
            route: `/changes/search`,
        });

    forReferenceId = async (): Promise<
        FailureOrSuccess<Error, SnapshotsForReferenceResponse>
    > =>
        this.request.get({
            route: `/changes/search`,
        });
}

export { Snapshots };
