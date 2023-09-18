function findZigZagSequence(arr) {
    arr.sort((a, b) => a - b); // Step 1: Sort the array in ascending order
    for (let i = 1; i < arr.length - 1; i += 2) {
        // Step 2: Swap adjacent elements starting from the second element
        const temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
    }
    return arr.join(' '); // Join the array elements and return as a string
}

function main(input) {
    const testCases = input.split('\n');
    const t = parseInt(testCases[0]);

    let currentIndex = 1; // Initialize the current index to 1

    for (let i = 0; i < t; i++) {
        const n = parseInt(testCases[currentIndex++]);
        const arr = testCases[currentIndex++].split(' ').map(Number);
        const result = findZigZagSequence(arr);
        console.log(result);
    }
}

const input = `1
5
3 1 4 2 5`;

main(input);
