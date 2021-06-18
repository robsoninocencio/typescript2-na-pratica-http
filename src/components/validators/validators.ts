export default class Validators {
    static required(value: string) {
        return typeof value !== undefined && value !== '' && value !== null;
    }
}