export default class Form {
    static getValueFromField(selector) {
        return document.querySelector(selector).value;
    }
}