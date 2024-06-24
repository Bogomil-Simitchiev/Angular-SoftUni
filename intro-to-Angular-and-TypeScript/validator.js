"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationClass = void 0;
class ValidationClass {
    static validate(message) {
        if (message.length > 4) {
            console.log('length of the string is too long');
        }
    }
}
exports.ValidationClass = ValidationClass;
