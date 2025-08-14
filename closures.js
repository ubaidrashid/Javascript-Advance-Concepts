const createCounter = () => {
    let value = 0;
    return {
        increment: () => {
            value++;
            return value;
        },
        getValue: () => {
            return value;
        }

    }

}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // Output: 2