import * as jwt from "jsonwebtoken";

// Check additional options available  --- check options -- optional params
export const JWTVerifyAndDecode = (token: string, secureKey: string) => {
  try {
    token = jwt.verify(token, secureKey);
  } catch (err) {
    token = undefined;
  }
  return token;
};

export default JWTVerifyAndDecode;
