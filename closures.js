const atm = (initialbalance, userPin) => {
  let balance = initialbalance;
  let pin = userPin;

  return {
    checkBalance: (enteredpin) => {
      if (enteredpin === pin) {
        console.log(`Your balance is ${balance}`);
      } else {
        console.log("Wrong Pin");
      }
    },
    deposit: (amount, enteredpin) => {
      if ((enteredpin === pin, amount >= 0)) {
        balance += amount;
        console.log(`Now your Balance is ${balance}`);
      } else if (amount <= 0) {
        console.log("Please enter correct amount");
      } else {
        console.log("Wrong Pin");
      }
    },
    withDraw: (amount, enteredpin) => {
      if ((enteredpin === pin, amount <= balance)) {
        balance -= amount;
        console.log(`${amount} withdraw from your Account`);
      } else if (amount > balance) {
        console.log("You have not Sufficient Balance for this withdraw");
      } else {
        console.log("Wrong Pin");
      }
    },
    changePin: (oldPin, newPin) => {
      if (oldPin === pin) {
        pin = newPin;
        console.log("Your Pin changed Successfully");
      } else {
        console.log("Wrong Old Pin");
      }
    },
  };
};

const UsingAtm = atm(10000, 1234);
UsingAtm.checkBalance(1254);
UsingAtm.checkBalance(1234);
UsingAtm.deposit(10000, 1234);
UsingAtm.withDraw(22000, 1234);
UsingAtm.withDraw(18000, 1234);
UsingAtm.changePin(1234, 1598);
