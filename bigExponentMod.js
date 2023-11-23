//Modulus exponent algorithm

function modPow(base, exponent, modulus) {
    if (modulus === 1) return 0;

    let result = 1;
    base = base % modulus;

    while (exponent > 0) {
        console.log(`${base}^${exponent} % ${modulus}`);
        // If the least significant bit of exponent is set
        if (exponent % 2 === 1) {
            let z = (result * base) % modulus;
            // console.log(`result ${result} = (${result} * ${base}) % ${modulus}`);
            result = z;
        }

        // Shift exponent to the right (equivalent to exponent /= 2)
        let x = Math.floor(exponent / 2);
        // console.log(`exponent ${x} = Math.floor(${exponent} / 2);`);
        exponent = x;

        // Multiply base with itself
        let y = (base * base) % modulus;
        // console.log(`base ${y} = (${base} * ${base}) % ${modulus};`);
        base = y;
    }

    return result;
}

// Example usage:
const base = 2;
const exponent = 1000;
const modulus = 5; // Any modulus value

const result = modPow(base, exponent, modulus);
console.log(`${base}^${exponent} mod ${modulus} = ${result}`);
