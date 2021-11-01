
# TS Encoding Utilities

**Author:** *Jay Kandimalla    `software engineer`*

The encoding utilities contains 
* Base64 Encoding and Decoding
* JWT(JSON Web Tokens) Encoding
* JWT Verify - Decode functions



## Download



This library is released under the [ GNU Affero General Public License v3.0](https://github.com/Jayaharshak/encoding-utilities/blob/main/LICENSE) & supports modern environments.<br>

## Installation


Using npm:
```shell
$ npm i -g npm
$ npm i encoding-utilities
```
Note: add `--save` if you are using npm < 5.0.0

In Node.js:
```js
import  encodingUtilities  from  "encoding-utilities";

const {

	base64Decode,

	base64Encode,

	JWTDecode,

	JWTEncode,

	JWTVerifyAndDecode

} = encodingUtilities;

const  decodedPayload = base64Decode("eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ==");

const  encodedString = base64Encode('{"sub":"1234567890","name":"John Doe","iat":1516239022}');

const  decodedData = JWTDecode(`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`);

const  encodedToken = JWTEncode('{"sub":"1234567890","name":"John Doe","iat":1516239022}', "secretKey");

const  decodedVerifiedPayload = JWTVerifyAndDecode(`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`, "secretKey");

// Options can be given as optional params 

```

## [reference for all options]([lodash-es](https://www.npmjs.com/package/lodash-es))

## Why Encoding Utilities?

Encoding Utilities library is one stop solution for all encoding and decoding techniques available. We will continuously update module to include all standard encryption methods to be at single place.