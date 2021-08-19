import { ApiModuleV1 } from "./modules/v1";

type ClientParams = {
    version: "v1";
    apiKey: string;
    domain: string;
};

const _client = ({
    version = "v1",
    domain,
    apiKey,
}: ClientParams): ApiModuleV1 => {
    switch (version) {
        case "v1": {
            return new ApiModuleV1({ domain, apiKey, version });
        }
        default: {
            throw new Error(
                "please specify field 'version' in constructor args"
            );
        }
    }
};

export default _client;
