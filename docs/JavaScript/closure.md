# Closure

## What is Closure?

- A closure is created when a function is defined inside another function, and the **inner function reference variables in the outer function's scope**. When the inner function is returned from the outer function, it retains a reference to the outer function's scope, and can continue to access those variables even after the outer function has finished executing. Vice-versa is not ture!
- In simple terms a closure can **`remember` values from its outer function's scope and use them later**, even if the outer function has returned and those values would normally be out of scope.

## When to use closure concept?

- From definition, you can see that it's used for retrival of values from outer parent function so we can understand that closure can be used **(1)for retrival of dead values which have become out of scope**. Additionally, we can comprehend that it can be used **(2)for privating some variables or functions**.
- While writing the code whenever there is a need for these types of thing try to incorporate this closure concept i.e in programmer language it's called `lexical environment.`

## Where and How to use closure concept?

1. Private variable and functions:

```javascript
const makeCounter = () => {
  let count = 0;
  return () => {
    count++;
    console.log(count);
  };
};

let counter = makeCounter();
counter(); // logs 1
counter(); // logs 2
counter(); // logs 3
```

- In this example, `makeCounter` is an `arrow function` that returns another `arrow function`. The returned function increments a count variable each time it is called, and logs the new value of `count` to the console
- When `makeCounter` is called, it creates a new scope with a `count` variable initialised to 0. It then returns a new arrow function that "closes over" this scope and increments the count variable each time it is called.
- When we assign the returned arrow function to the counter variable, we create a closure that retains a reference to the count variable.
- Each time we call `counter()`, it increments the `count` variable and logs the new value to the console, because it is still "closing over" the original `count` variable in the outer function's scope.
- Thus, because the `count` variable is not exposed outside of the returned object, it is effectively a private variable that can only be accessed or modified throught the makeCounter() methods.

2. Partial function:

```javascript
function add(x) {
  return function (y) {
    return x + y;
  };
}

let add5 = add(5);
console.log(add5(3)); // 8
```

- In this example, the `add()` function returns another function that takes a single argument and returns the `sum` of that argument and the `x` value from the outer function's scope.
- This allows us to "partially apply" the `add()` function by passing in an `x` value and getting back a new function that always adds that value to its argument.
- Thus, we can then use the new function like any other function, passing in different `y` values as needed.

3. For preserving states in asychronous code:

```javascript
const animate = (element, from, to, duration) => {
  let start = performance.now();

  const update = () => {
    let time = performance.now() - start;
    let progress = time / duration;
    let value = from + (to - from) * progress;

    element.style.left = value + 'px';

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };
  requestAnimationFrame(update);
};

let element = document.getElementById('my-element');
animate(element, 0, 100, 1000);
```

- In this example, the animate() function creates a closure over the start variable, which is used to calculate the elapsed time since the animation started.
- The update() function also "closes over" the element, from, to, and duration arguments, so that it can use them to update the element's position over time.
- Thus, by creating a closure over these values, we can preserve their state between animation frames, even though the update() function is called asynchronously by requestAnimationFrame().
