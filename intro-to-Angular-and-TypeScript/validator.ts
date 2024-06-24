export class ValidationClass {
    static validate(message: string): void {
        if (message.length > 4) {
            console.log('length of the string is too long');

        }
    }
}