export const data = [
    {
        "title": "scenario 1",
        "payload": "{\"npi\":\"1234567890\",\"iss\":\"Lasso\",\"iat\":1516239022}",
        "completePayload": "{\"header\": {\"alg\": \"HS256\", \"typ\": \"JWT\"}, \"payload\": {\"iat\": 1516239022, \"iss\": \"Lasso\", \"npi\": \"1234567890\"}, \"signature\": \"QX5DocdIgHU2FFul_w6jH5m2XcFflgCQIJJBShHrEJc\"}",
        "JWTdecoded": "{\"npi\":\"1234567890\",\"iss\":\"Lasso\",\"iat\":1516239022}",
        "JWTEncoded": `eyJhbGciOiJIUzI1NiJ9.eyJucGkiOiIxMjM0NTY3ODkwIiwiaXNzIjoiTGFzc28iLCJpYXQiOjE1MTYyMzkwMjJ9.nOEBV3h3ZT_kfpSIBo7GBSUc-32FfcZKamSCprRcOLY`,
        "base64Encoded": `eyJucGkiOiIxMjM0NTY3ODkwIiwiaXNzIjoiTGFzc28iLCJpYXQiOjE1MTYyMzkwMjJ9`,
        "secretKey": "Lasso_vanity_id",
        "decodeOptions": { "complete": true },
        "encodeOptions": {},
    },
    {
        "title": "scenario 2",
        "payload": "{\"npi\":\"0123456789\",\"iss\":\"Lasso\",\"iat\":1516231011}",
        "completePayload": "{\"header\": {\"alg\": \"HS256\", \"typ\": \"JWT\"}, \"payload\": {\"iat\": 1516231011, \"iss\": \"Lasso\", \"npi\": \"0123456789\"}, \"signature\": \"pM-RXMpVcnZQuibALcf-dIyHoOHvTo2p_yt1kfz0rPo\"}",
        "JWTdecoded": "{\"npi\":\"0123456789\",\"iss\":\"Lasso\",\"iat\":1516231011}",
        "JWTEncoded": `eyJhbGciOiJIUzI1NiJ9.eyJucGkiOiIwMTIzNDU2Nzg5IiwiaXNzIjoiTGFzc28iLCJpYXQiOjE1MTYyMzEwMTF9.IOqgMfO177q9nwwxlmyDlLvahuE0465Xvf4_svzhEPQ`,
        "base64Encoded": `eyJucGkiOiIwMTIzNDU2Nzg5IiwiaXNzIjoiTGFzc28iLCJpYXQiOjE1MTYyMzEwMTF9`,
        "secretKey": "Lasso_vanity_id",
        "decodeOptions": { "complete": true },
        "encodeOptions": {},
    }
];

export default data;
