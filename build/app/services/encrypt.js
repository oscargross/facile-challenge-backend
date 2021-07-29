"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cryto = require('crypto');
var secret = 'asdasdasdasdasdasdasdasdasdasdas';
var Encrypt = /** @class */ (function () {
    function Encrypt() {
        this.encrypt = function (name) {
            console.log(name);
            try {
                var iv = Buffer.from(cryto.randomBytes(16));
                var cipher = cryto.createCipheriv('aes-256-cbc', Buffer.from(secret), iv);
                var encrypted = cipher.update(name);
                encrypted = Buffer.concat([encrypted, cipher.final()]);
                return iv.toString('hex') + ":" + encrypted.toString('hex');
            }
            catch (error) {
                return null;
            }
        };
        this.decrypt = function (name) {
            try {
                var _a = name.split(':'), iv = _a[0], encrypted = _a[1];
                var ivBuffer = Buffer.from(iv, 'hex');
                var decipher = cryto.createDecipheriv('aes-256-cbc', Buffer.from(secret), ivBuffer);
                var content = decipher.update(Buffer.from(encrypted, 'hex'));
                content = Buffer.concat([content, decipher.final()]);
                return content.toString();
            }
            catch (error) {
                return null;
            }
        };
    }
    return Encrypt;
}());
exports.default = Encrypt;
// const decrypted = decrypt('e5707fd51e489a400953e8ee88cd01fb:47b7c38599a6c98adc5a0f4b03938a4d')
// console.log(decrypted);
