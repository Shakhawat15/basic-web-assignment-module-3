/**
 * Question: Write a program that generates a multiplication table for a given number using a for loop.
 * Solved By: Md Shakhawat Hossen
 * Date: 21-05-2023
 */

/**
 * 
 * Create multiplicationTable function to Write a program that generates a multiplication table for a given number using a for loop.
 * 
 * @param {Number} num 
 */
function multiplicationTable(num) {
    // Use for loop to iterate 1 to 10
    for (let i = 1; i <= 10; i++) {
        // Calculate the given number and the iteration number
        const results = `${num} * ${i} = ${num * i}`;
        // Show results in console
        console.log(results);
    }
}

// Invoke the multiplicationTable() function
multiplicationTable(6);