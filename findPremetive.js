function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function findPrimitiveRoot(prime) {
    if (!isPrime(prime)) {
        return "Input is not a prime number";
    }

    //i%5, hence 1^n = 1(always) and 1%5 = 1 (always) so no need to calculate i = 1. Loop start from 2
    for (let i = 2; i < prime; i++) {
        console.log(`Checking for = ${i}`);
        let isPrimitiveRoot = true;

        // (primitive^prime-1)%prime = 1 (always) no need to calculate for prime-1 
        for (let j = 1; j < prime - 1; j++) {
            console.log(`${i}^${j} % ${prime} = ${Math.pow(i, j) % prime}`);

            if (Math.pow(i, j) % prime === 1) { //if get 1 before [ (primitive^prime-1)%prime = 1 ] then not primitive
                isPrimitiveRoot = false;
                break;
            }

        }
        if (isPrimitiveRoot) {
            return i;
        }
    }

    return "No primitive root found";
}


const primeNumber = 7;
const primitiveRoot = findPrimitiveRoot(primeNumber);

console.log(`The primitive root of ${primeNumber} is ${primitiveRoot}`);
