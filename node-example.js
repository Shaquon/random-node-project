const wordObj = [
    ['theFirstSentence'],
    ['theSecondSentence'],
    ['theThirdSentence']
]

const wordGenerator = () => {
    let resultSentence = '';

    for (let word of wordObj) {
        resultSentence = resultSentence + word + " ";
    }

    return resultSentence;
}

const rootElement = document.getElementById('root');
rootElement.innerHTML = wordGenerator();


console.log(wordGeneratorResult);