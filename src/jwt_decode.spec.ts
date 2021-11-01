import data from "./test_criteria/test_data";
import JWTDecode from "./jwt_decode";

describe("JWTDecode [unit]", () => {
    data.forEach(({ title, payload, completePayload, JWTEncoded, decodeOptions }) => {
        it("should get data from input token: " + title, () => {
            const decodedData = JWTDecode(JWTEncoded);
            const payloadObj = JSON.parse(payload);
            expect(decodedData.npi).toBe(payloadObj.npi);
            expect(decodedData.iss).toBe(payloadObj.iss);
        });
        it("should get complete data from input token and options " + title, () => {
            const decodedData = JWTDecode(JWTEncoded, decodeOptions);
            const payloadObj = JSON.parse(completePayload);
            expect(decodedData.npi).toBe(payloadObj.npi);
            expect(decodedData.iss).toBe(payloadObj.iss);
            expect(decodedData.alg).toBe(payloadObj.alg);
        });
    });
});


// Try with secret key - without secret key -- with options -- without options