import { base64Decode } from "./base64_decode";
import { base64Encode } from "./base64_encode";
import { JWTDecode } from "./jwt_decode";
import { JWTEncode } from "./jwt_encode";
import { JWTVerifyAndDecode } from "./jwt_verify_and_decode";

// export const encodingUtilities = (data: string, secureKey?: string, options?: string) => {

//     return {
//         "base64Encode": base64Encode(data),
//         "base64Decode": base64Decode(data),
//         "JWTEncode": JWTEncode(data, secureKey, options),
//         "JWTDecode": JWTDecode(data, options),
//         "JWTVerifyAndDecode": JWTVerifyAndDecode(data, secureKey),
//     };
// };

export default {
    base64Decode,
    base64Encode,
    JWTDecode,
    JWTEncode,
    JWTVerifyAndDecode
};

// export default encodingUtilities;
