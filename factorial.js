// var factorial = 1;
// for (var i = 1; i <= 10; i++)
// {
//     factorial = factorial * i;
// }

// console.log(factorial);


// function getFactorial(num)
// {
//     let factorial = 1;
//     for (let i = 1; i <= num; i++)
//     {
//         factorial = factorial * i;
//     }

//     return factorial;
// }

// console.log("11 Factorial = ", getFactorial(11));


// Factorial Reverse

// function getFactorial(num)
// {
//     let factorial = 1;
//     for (let i = num; i >= 1; i--)
//     {
//         factorial = factorial * i;
//     }
//     return factorial;

// }

// console.log("11 Factorial = ", getFactorial(11));

function getFactorial(num)
{
    let factorial = 1;
    let i = num;
    while (i >= 1)
    {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

console.log("11 Factorial = ", getFactorial(11));