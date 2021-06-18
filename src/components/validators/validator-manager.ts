import ValidatorRuleCallable from "./validator-rule-callable";
import Form from "../form";

export default class ValidatorManager {
  constructor(
    private chainRules: Array<{
      selectorField: string;
      rules: Array<ValidatorRuleCallable>;
      messageInvalid: string;
    }>
  ) {}

  isValid(): boolean {
    for (let ruleSet of this.chainRules) {
      for (let rule of ruleSet.rules) {
        const value = Form.getValueFromField(ruleSet.selectorField);
        const isValid = rule(value);
        if (!isValid) {
          alert(ruleSet.messageInvalid);
          return false;
        }
      }
    }
    return true;
  }
}
