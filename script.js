function sumArguments(number1, number2) {
    let sum = number1 + number2
    return sum
}
sumArguments(1, 2)
function subtractionArguments(number1, number2) {
    let sub = number1 - number2
    return sub
}
subtractionArguments(2, 2)
function productArguments(number1, number2) {
    let product = number1 * number2
    return product
}
productArguments(3, 3)
function divisionArguments(number1, number2) {
    let division = number1 / number2
    return division
}
divisionArguments(6, 2)
function exponentNumber(number, exponent) {
    let exponentNumber = number ** exponent
    return exponentNumber
}
exponentNumber(2, 3)
function remainderDivision(number1, number2) {
    let remainder = number1 % number2
    return remainder
}
remainderDivision(5, 2)
function squareRootNumber(number) {
    let squareRoot = Math.sqrt(number)
    return squareRoot
}
squareRootNumber(64)
function absoluteValue(number) {
    let absoluteValue = Math.abs(number)
    return absoluteValue
}
absoluteValue(-345.5)
function roundedNumber(number) {
    let roundedNumber = Math.round(number)
    return roundedNumber
}
roundedNumber(3.789)
function randomNumber() {
    let random = Math.random()
    return random
}
randomNumber()
function concatenationStrings(str1, str2) {
    let sentence = str1 + str2
    return sentence
}
concatenationStrings('Hello ', 'World')
function lengthString(text) {
    let length = text.length
    return length
}
lengthString('I learn JavaScript') // 18
function uppercaseStrings(text) {
    let uppercaseStrings = text.toUpperCase()
    return uppercaseStrings
}
uppercaseStrings('I learn JavaScript')
function  lowerCaseStrings(text) {
    let lowerCaseStrings = text.toLowerCase()
    return lowerCaseStrings
}
lowerCaseStrings('I learn JavaScript')
function characterPosition(text, index) {
    let characterPosition = text.charAt(index)
    return characterPosition
}
characterPosition('I learn JavaScript', 12)
function stringInverted(text) {
    let arrayText = text.split('')
    let arrayInverted = arrayText.reverse()
    let stringInverted = ''
    for (let i = 0; i < arrayInverted.length; i++){
        stringInverted += arrayInverted[i]
    }
    return stringInverted
}
stringInverted('I learn JavaScript')
function numberOfTimes(text, character) {
    let count = 0
    for (let i = 0; i < text.length; i++){
        if(text[i].toUpperCase() == character.toUpperCase()) {
            count ++
        }
    }
    return count
}
numberOfTimes('I learn JavaScript', 's') // todos 's' y 'S'
function textWithoutWhitespace(text) {
    let textWithoutWhitespace = text.replaceAll(' ', '')
    return textWithoutWhitespace
}
textWithoutWhitespace('I learn JavaScript')
function stringPalindrome(text) {
    let arrayText = text.split('')
    let arrayInverted = arrayText.reverse()
    let stringInverted = ''
    for (let i = 0; i < arrayInverted.length; i++){
        stringInverted += arrayInverted[i]
    }
    if(stringInverted == text) {
        return true
    } else {
        return false
    }
}
stringPalindrome('aba')
function firstToUppercase(text) {
    let arrayText = text.split('')
    let newText = arrayText[0].toUpperCase()
    for (let i = 1; i < arrayText.length; i++){
        if (arrayText[i] == ' ') {
            arrayText[i+1] = arrayText[i+1].toUpperCase()
        }
        newText += arrayText[i]
    }
    return newText
}
firstToUppercase('i learn java script')
function sumOfAllElements(arrayElements) {
    let sum = 0
    for (let i = 0; i < arrayElements.length; i++) {
        sum += arrayElements[i]
    }
    return sum
}
sumOfAllElements([1, 2, 5, 5, 6])
function averageOfAllElements(arrayElements) {
    let sum = 0
    for (let i = 0; i < arrayElements.length; i++) {
        sum += arrayElements[i]
    }
    let average = sum / arrayElements.length
    return average
}
averageOfAllElements([2, 2, 5])
function sortArrayNumbers(numbers) {
    let sort = numbers.sort()
    return sort
} 
sortArrayNumbers([1, 9, 6, 6, 7])
function sortElementsGreaterThanNumber(arrayElements, number) {
    let newArrayElements = arrayElements.filter((i) => i > number)
    return newArrayElements
}
sortElementsGreaterThanNumber([1, 9, 6, 2, 7], 3)
function  bothArrays(arrayElements1, arrayElements2) {
    let bothArrays = arrayElements1.concat(arrayElements2)
    return bothArrays
}
bothArrays([1, 9, 6, 2, 7], [2, 2, 5])
function maxNumberInsideArray(arrayElements) {
    arrayElements[arrayElements.length] = Math.max.apply(null, arrayElements)
    return arrayElements
}
maxNumberInsideArray([1, 9, 6, 2, 7, 56])
function minNumberInsideArray(arrayElements) {
    arrayElements[arrayElements.length] = Math.min.apply(null, arrayElements)
    return arrayElements
}
minNumberInsideArray([1, 9, 6, 2, 7, 56])
function countElement(arrayElements, element) {
    let count = 0
    for (let i = 0; i < arrayElements.length; i++){
        if(arrayElements[i] == element) {
            count ++
        }
    }
    return count
}
countElement(['I', 'learn', 'JavaScript', 'learn', 'learn', 'more'], 'learn')

function objectLiteralValueName(obj) {
    return obj.name
}
objectLiteralValueName({name: 'Vita'})
function objectLiteralValueAge(obj, number) {
    obj.age = number
    return obj
}
objectLiteralValueAge({age: 34}, 35)

console.log(objectLiteralValueAge({age: 34}, 35))