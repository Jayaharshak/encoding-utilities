import * as jwt from "jsonwebtoken";

export const JWTEncode = (payload: string, secretKey: string, options?: any) => {
    return options
        ? jwt.sign(payload, secretKey, options)
        : jwt.sign(payload, secretKey);
};

export default JWTEncode;
