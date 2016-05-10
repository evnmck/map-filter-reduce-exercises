function onlyEven(array) {
    let newA = array.filter(element => {
        return element % 2 === 0
    })
    return newA
};

function onlyOneWord(array) {
    let newA = array.filter(element => {
        return !element.includes(" ")
    })
    return newA
};

function positiveRowsOnly(array) {
    let newA = array.filter((element) => {
        let bool = true;
        element.forEach(el => {
            if (el < 0) bool = false
        })
        return bool
    })
    return newA
}

function allSameVowels(array) {
    let newA = array.filter(element => {
        let sameVowels = true
        let twoVowels = []
        elem = element.split('');
        elem.forEach(el => {
            if (el == 'a' || el == 'e' || el == 'i' || el == 'o' || el == 'u')
                twoVowels.push(el);
        })
        for (let i = 0; i <= twoVowels.length - 2; i++) {
            if (twoVowels[i] !== twoVowels[i + 1]) {
                sameVowels = false
            }
        }
        return sameVowels
    })
    return newA
};

module.exports = {
    onlyEven: onlyEven,
    onlyOneWord: onlyOneWord,
    positiveRowsOnly: positiveRowsOnly,
    allSameVowels: allSameVowels
};
