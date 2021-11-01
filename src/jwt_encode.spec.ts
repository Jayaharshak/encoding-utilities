import data from "./test_criteria/test_data";
import JWTEncode from "./jwt_encode";

describe("JWTEncode [unit]", () => {
    data.forEach(({ title, payload, secretKey, JWTEncoded, encodeOptions }) => {
        it("should get data from input token: " + title + "", () => {
            const encodedData = JWTEncode(payload, secretKey);
            expect(encodedData).toBe(JWTEncoded);
        });
        it("should get complete data from input token and options " + title, () => {
            const encodedData = JWTEncode(payload, secretKey, encodeOptions);
            expect(encodedData).toBe(JWTEncoded);
        });
    });
});
