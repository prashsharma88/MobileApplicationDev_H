// 2 upper letter, 1 special character, 2 digits, 3 lower case total len=8
const Regex1 = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;

// 2 Upper case letter
const UpperRegex = /(?=(.*[A-Z]){2,})/;

// 2 lower case letter
const LowerRegex = /(?=(.*[a-z]){2,})/;

// 2 Special Character
const SpecialRegex = /(?=(.*[!@#$%^&*(),.?":{}|<>]){2,})/;

// 3 Numbers
const NumberRegex = /(?=(.*\d){3,})/

// minLength
const LengthReges = /^.{8,}$/;

export const colors = ['#FFFFFF','#F5004F','#FF885B','#FFEB00','#6439FF','#185519'];

export function getPasswordStrength(passwordTxt : string) {

    console.log(passwordTxt.match(UpperRegex));

    let strength = 0;
    if(passwordTxt.match(UpperRegex)) strength++;
    if(passwordTxt.match(LowerRegex)) strength++;
    if(passwordTxt.match(SpecialRegex)) strength++;
    if(passwordTxt.match(NumberRegex)) strength++;
    if(passwordTxt.match(LengthReges)) strength++;

    return strength;
}