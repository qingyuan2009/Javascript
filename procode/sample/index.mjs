export const handler = (input) => {
    // Check if input is an array
    if (!Array.isArray(input)) {
        throw new Error("Input must be an array");
    }

    // Calculate the sum of the numbers in the array
    const sum = input.reduce((acc, num) => acc + num, 0);

    // Return the result
    return { sum };
};
