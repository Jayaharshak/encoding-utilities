import data from "./test_criteria/test_data";
import { base64Decode } from "./base64_decode";

describe("base64Decode [unit]", () => {
    data.forEach(({ title, payload, base64Encoded }) => {
        it("should decode input token: " + title, () => {
            const decodedString = base64Decode(base64Encoded);
            expect(decodedString).toBe(payload);
        });
    });
});
