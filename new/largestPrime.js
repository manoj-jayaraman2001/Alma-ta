

function isPrime(number){
    if (number === 1 ) return false
    if (number !== 2 && number % 2 === 0) return false
    for (let i = 3 ; i < number - 1 ; i++){
        if (number % i === 0){
            return false
        }
    }

    return true
}




function largestDiagoalPrimeNumber(matrix) {

    let largestPrimeNormalDiagonal = -1 
    let largestPrimeAntiDiagonal = -1

    let r = matrix[0].length - 1

    for (let i = 0; i < matrix.length; i++){
        if (isPrime(matrix[i][i]) && largestPrimeNormalDiagonal < matrix[i][i]){
            largestPrimeNormalDiagonal = matrix[i][i]
        }
    }

    for (let i = 0; i < matrix.length; i++){
        if (isPrime(matrix[i,r-i]) && largestPrimeAntiDiagonal < matrix[i,r-i] ){
            largestPrimeAntiDiagonal = matrix[i,r-i]
        }
    }


    if (largestPrimeNormalDiagonal == -1 && largestPrimeAntiDiagonal == -1 ){
        return 0
    }

    if (largestPrimeNormalDiagonal > largestPrimeAntiDiagonal){
        return largestPrimeNormalDiagonal
    }else{
        return largestPrimeAntiDiagonal
    }

}

let matrix = [
  [1, 2, 3], //   [0,0],[0,1],[0,2]
  [4, 13, 6], //    [1,0],[1,1],[1,2]
  [7, 8, 7], //  [2,0], [2,1], [2,2]
];

console.log(largestDiagoalPrimeNumber(matrix))

// [[1,2,3],[4,5,6],[7,8,9]]

// You are given a 0-indexed two-dimensional integer array nums.

// Return the largest prime number that lies on at least one of the diagonals of nums.
//  In case, no prime is present on any of the diagonals, return 0.


