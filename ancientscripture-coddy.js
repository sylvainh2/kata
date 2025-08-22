let originalLine = ["The", "quick", "brown", "fox"];
let additionalLine = ["the", "lazy", "dog"];
let additional = additionalLine.slice(-2)
console.log([...originalLine,...additional])