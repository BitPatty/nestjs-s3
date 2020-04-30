"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require("aws-sdk/global");
const S3 = require("aws-sdk/clients/s3");
function createS3Client(options) {
    var _a;
    AWS.config.update({
        accessKeyId: options.accessKeyId,
        secretAccessKey: options.secretAccessKey,
        sessionToken: options.sessionToken,
        region: options.region,
    });
    let version = options.apiVersion === undefined ? '2006-03-01' : options.apiVersion;
    let params = {
        endpoint: options.endpoint,
        apiVersion: version,
        signatureVersion: (_a = options.signatureVersion) !== null && _a !== void 0 ? _a : 'v4'
    };
    const client = new S3(params);
    return client;
}
exports.createS3Client = createS3Client;
//# sourceMappingURL=s3.util.js.map