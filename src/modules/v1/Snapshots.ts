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

    create = async (
        data: any
    ): Promise<FailureOrSuccess<Error, SnapshotCreatedResponse>> =>
        this.request.post<SnapshotCreatedResponse>({
            route: `/snapshots`,
            data,
        });

    forReferenceId = async (
        referenceId: string,
        query: any
    ): Promise<FailureOrSuccess<Error, SnapshotsForReferenceResponse>> =>
        this.request.get<SnapshotsForReferenceResponse>({
            route: `/snapshots/${referenceId}`,
            query,
        });
}

export { Snapshots };
