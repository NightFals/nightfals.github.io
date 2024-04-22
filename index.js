// Arrays to store the first and second set of numbers
let numbersSet1 = [];
let numbersSet2 = [];
let chart;

// Function to calculate the average of a set of numbers
function calculateAverage(numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

// Function to add a number to a set array and update the average and chart
function addNumberToSet(num, setArray, resultSetId, label) {
    const today = new Date().toLocaleDateString();
    const existingIndex = setArray.findIndex(item => item.date === today);
    
    if (existingIndex !== -1) {
        // Update existing value for the day
        setArray[existingIndex].value = num;
    } else {
        // Add new value for the day
        setArray.push({ date: today, value: num });
    }

    const average = calculateAverage(setArray.map(item => item.value));
    document.getElementById(resultSetId).textContent = average.toFixed(2);
    updateChart(label);
}

// Function to update the chart
function updateChart(label) {
    const dates = [];
    const valuesSet1 = [];
    const valuesSet2 = [];

    // Get the last 10 data points if available
    const last10Set1 = numbersSet1.slice(-10);
    const last10Set2 = numbersSet2.slice(-10);

    last10Set1.forEach(item => {
        dates.push(item.date);
        valuesSet1.push(item.value);
    });

    last10Set2.forEach(item => {
        valuesSet2.push(item.value);
    });

    if (!chart) {
        const ctx = document.getElementById('chart').getContext('2d');
        chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    label: 'Productivity', // Label for the first part of the graph
                    data: valuesSet1,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }, {
                    label: 'Happiness', // Label for the second part of the graph
                    data: valuesSet2,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            min: 1,
                            max: 10,
                            stepSize: 1 // Ensure y-axis ticks are integers
                        }
                    }]
                }
            }
        });
    } else {
        chart.data.labels = dates;
        chart.data.datasets[0].data = valuesSet1;
        chart.data.datasets[1].data = valuesSet2;
        chart.update();
    }
}

// Function to save data to local storage
function saveData() {
    localStorage.setItem('numbersSet1', JSON.stringify(numbersSet1));
    localStorage.setItem('numbersSet2', JSON.stringify(numbersSet2));
}

// Function to load data from local storage
function loadData() {
    const savedNumbersSet1 = localStorage.getItem('numbersSet1');
    if (savedNumbersSet1) {
        numbersSet1 = JSON.parse(savedNumbersSet1);
    }

    const savedNumbersSet2 = localStorage.getItem('numbersSet2');
    if (savedNumbersSet2) {
        numbersSet2 = JSON.parse(savedNumbersSet2);
    }
}

// Call loadData when the page loads to load previously saved data
loadData();

// Call saveData whenever data is updated
window.addEventListener('beforeunload', saveData);

// Dynamically create buttons for numbers 1 to 10 for a set
function createNumberButtons(container, setArray, resultSetId, addNumberFunction, label) {
    for (let i = 1; i <= 10; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.onclick = function() {
            addNumberFunction(i, setArray, resultSetId, label);
        };
        container.appendChild(button);
    }
}

// Initialize buttons for both sets
createNumberButtons(document.getElementById("buttonsSet1"), numbersSet1, "resultSet1", addNumberToSet, 'Productivity');
createNumberButtons(document.getElementById("buttonsSet2"), numbersSet2, "resultSet2", addNumberToSet, 'Happiness');
