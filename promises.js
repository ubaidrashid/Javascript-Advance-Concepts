const studentResult = new Promise((resolve, reject) => {
    let result = Math.random() > 0.5 ? "Pass" : "Fail";

    if (result === "Pass") {
        resolve("Congratulations! You have passed the exam.");
    } else {
        reject("Unfortunately, you have failed the exam. Please try again.");
    }
})

studentResult.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
})