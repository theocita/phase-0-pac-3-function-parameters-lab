function introduction(name) {
    console.log(name)
    return `Hi, my name is ${name}.`;
}
function introductionWithLanguage(name, language) {
    console.log (name, language);
    return `Hi, my name is ${name} and I am learning to program in ${language}`;
}
function introductionWithLanguageOptional(name, language = "Javascript") {
console.log (name, language);
    return `Hi, my name is ${name} and I am learning to program in ${language}`;
}