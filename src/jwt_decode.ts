import * as jwt from "jsonwebtoken";

// Check additional options available
export const JWTDecode = (token: string, options?: any) => {
    return options
        ? jwt.decode(token, options)
        : jwt.decode(token);
};

export default JWTDecode;
