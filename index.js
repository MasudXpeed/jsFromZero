// Fibonacci series

function fibonacci(n) {

  let fib = [0, 1]

  for (let i = 2; i <= n; i++) {

    fib[i] = fib[i - 1] + fib[i - 2]

  }

  return fib;
}


// Factorial of a number

function factorial(n) {

  let result = 1

  for (let i = 2; i <= n; i++) {
    result = result * i
  }

  return result;
}

console.log(factorial(6))
