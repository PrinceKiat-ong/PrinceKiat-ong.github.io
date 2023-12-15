function calculateAverage(grades) {
    const total = grades.reduce((sum, grade) => sum + parseFloat(grade), 0);
    return total / grades.length;
}

function displayResult(average) {
    const resultDiv = document.getElementById('result');
    let resultText = '';

    if (average > 90) {
        resultText = `With honors: above 90: ${average.toFixed(2)}`;
    } else if (average >= 75) {
        resultText = `Passed: between 75-90: ${average.toFixed(2)}`;
    } else {
        resultText = `Failed: lower than 75: ${average.toFixed(2)}`;
    }

    resultDiv.textContent = resultText;
}

document.getElementById('calculateButton').addEventListener('click', function () {
    const gradeInputs = document.querySelectorAll('.gradeInput');
    const grades = Array.from(gradeInputs).map(input => input.value);

    const average = calculateAverage(grades);
    displayResult(average);
});