import data from "./test_criteria/test_data";
import JWTVerifyAndDecode from "./jwt_verify_and_decode";

describe("JWTVerifyAndDecode [unit]", () => {
    data.forEach(({ title, payload, secretKey, JWTEncoded }) => {
        it("should get data from input token: " + title, () => {
            const decodedData = JWTVerifyAndDecode(JWTEncoded, secretKey);
            expect(decodedData).toEqual(JSON.parse(payload));
        });
        data.forEach(({ payload, secretKey, JWTEncoded }) => {
            it("should return undefined for wrong key: " + title, () => {
                const decodedData = JWTVerifyAndDecode(JWTEncoded, "secretKey");
                expect(decodedData).toEqual(undefined);
            });
        });
    });
});