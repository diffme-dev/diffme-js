import { FailureOrSuccess } from "../../core";
import { Module } from "../../domain/module";
import { Request } from "../../shared/Request";

export type ChangeSearchResponse = {
    changes: any[];
};

export type ChangeForReferenceId = {
    changes: any[];
};

class Changes extends Module {
    constructor(request: Request) {
        super(request);
    }

    list = async (
        query: any
    ): Promise<FailureOrSuccess<Error, ChangeSearchResponse>> =>
        this.request.get({
            route: `/changes`,
            query,
        });

    search = async (): Promise<FailureOrSuccess<Error, ChangeSearchResponse>> =>
        this.request.get({
            route: `/changes/search`,
        });

    forReferenceId = (
        referenceId: string
    ): Promise<FailureOrSuccess<Error, ChangeForReferenceId>> =>
        this.request.get({
            route: `/changes/references/${referenceId}`,
        });
}

export { Changes };
