// const divide = (a, b) => {
//   try {
//     if (b === 0) {
//       throw new Error("Cannot divide by zero");
//     }
//     let division = a / b;
//     console.log(`Succes: ${a} divided ${b} = ${division} `);
//   } catch (error) {
//     console.log(`Error : ${error}`);
//   } finally {
//     console.log("operation finished");
//   }
// };

// divide(10, 2);
// divide(10, 0);

// const jsonConvert = (str) => {
//   try {
//     let result = JSON.parse(str);
//     console.log(result);
//   } catch (error) {
//     console.log(`Error : Invalid JSON format`);
//   } finally {
//     console.log("JSON attemp complete");
//   }
// };

// jsonConvert('{"id": 101, "name": "Ali"}');

// jsonConvert("{id: 101, name: Ali}");

// const cart = [
//   { item: "Book", qty: 4, price: 300 },
//   { item: "Pen", qty: 5, price: 20 },
// ];

// const checkout = (amountPaid) => {
//   try {
//     let balanceAmount = cart.reduce(
//       (sum, item) => sum + item.qty * item.price,
//       0
//     );
//     if (balanceAmount > 1000) {
//        balanceAmount = balanceAmount - (balanceAmount * 10) / 100;
//        console.log(`10% discount apply Your New balance Amount is ${balanceAmount}`)

//       }

//       if (amountPaid < balanceAmount) {
//       console.log(`Your Total Amount is ${balanceAmount}`);
//       throw new Error("not enough money");
//     } else if (amountPaid > balanceAmount) {
//       let change = amountPaid - balanceAmount;
//       console.log(`Your Total Amount is ${balanceAmount}`);
//       console.log(`Payment Sucessfull take ur change ${change}`);
//     } else {
//       console.log("Payment SuccessFull");
//     }
//   } catch (error) {
//     console.log(`Error: ${error}`);
//   } finally {
//     console.log("checlout attemp completed");
//   }
// };

// checkout(1500);
// const cart = [
//     { item: "Shoes", qty: 2, price: 1500 },
//     { item: "Cap", qty: 1, price: 500 },
//   ];

// const checkout = (amountPaid) => {
//       try {
//         let total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

//         if (total > 2000) {
//           total = total - (total * 15) / 100; // 15% discount
//           console.log(`15% discount applied. New Total = ${total}`);
//         }

//         if (amountPaid < total) {
//           throw new Error("Payment failed, not enough money");
//         } else if (amountPaid > total) {
//           let change = amountPaid - total;
//           console.log(`Payment success, take your change ${change}`);
//         } else {
//           console.log("Payment successful with exact amount");
//         }
//       } catch (error) {
//           console.log(`Error : ${error}`)
//       } finally {
//           console.log("checkout scenario complete")
//       }

//   };

//   checkout(2500);

const cart = [
  { item: "Shirt", qty: 2, price: 800 },
  { item: "Jeans", qty: 1, price: 2000 },
  { item: "Belt", qty: 2, price: 500 }, // yahan qty = 0 rakhi hai error test k liye
];

const checkout = (amountPaid) => {
  try {
    // Tum isme error handling karna
    //   1
    if (cart.length === 0) {
      throw new Error("Cart is empty");
    }
    //   2
    cart.forEach((item) => {
      if (item.qty <= 0) {
        throw new Error("Item is empty");
      }
    });

    let total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
    // 4
    if (total > 3000) {
      total = total - (total * 20) / 100;
      console.log(`20% Discount deduct Now your Total balance is ${total}`);
    }

    // 3
    if (amountPaid <= 0) {
      throw new Error("Not enough money");
    }
    //   5
    else if (amountPaid < total) {
      throw new Error("Not enough money");
    } else if (amountPaid > total) {
      // 7
      let change = amountPaid - total;
      console.log(`payment Successfull take ur change ${change}`);
    }
    if (amountPaid == total) {
      //   6
      console.log("Paymnet Successfull");
    }
  } catch (error) {
    console.log(`Error : ${error.message}`);
  } finally {
    console.log("payment scenario complete");
  }
};

checkout(5000);
