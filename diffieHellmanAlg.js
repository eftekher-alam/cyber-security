function findSecretKey(prime, base) {
    // Private key of each user can be kept secret
    const privateKeyA = 3;
    const privateKeyB = 4;

    // Calculate public key for each user
    const publicKeyA = calculatePublicKey(prime, base, privateKeyA);
    const publicKeyB = calculatePublicKey(prime, base, privateKeyB);

    // Secret public key is the modular exponentiation of the public key of the other user with the private key of the current user
    const secretPublicKeyA = modularExponentiation(publicKeyB, prime, privateKeyA);
    const secretPublicKeyB = modularExponentiation(publicKeyA, prime, privateKeyB);

    console.log("Secret public key for A: ", secretPublicKeyA);
    console.log("Secret public key for B: ", secretPublicKeyB);
}

function calculatePublicKey(prime, base, privateKey) {
    return modularExponentiation(base, prime, privateKey);
}

function modularExponentiation(base, modulus, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result = (result * base) % modulus;
    }
    return result;
}

const prime = 5;
const base = 7;
findSecretKey(prime, base);
