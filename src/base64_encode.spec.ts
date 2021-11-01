import data from "./test_criteria/test_data";
import { base64Encode } from "./base64_encode";

describe("base64Decode [unit]", () => {
    data.forEach(({ title, payload, base64Encoded }) => {
        it("should decode input token: " + title, () => {
            const encodedString = base64Encode(payload);
            expect(encodedString).toBe(base64Encoded);
        });
    });
});
