const user = {
  id: 101,
  name: "Ali",
  email: "ali@gmail.com",
  orders: [
    {
      orderId: 1,
      date: "2025-08-16",
      items: [
        { itemId: 1, name: "Mobile", qty: 1, price: 20000 },
        { itemId: 2, name: "Charger", qty: 2, price: 1500 },
        { itemId: 3, name: "Cover", qty: 1, price: 500 },
      ],
    },
    {
      orderId: 2,
      date: "2025-08-15",
      items: [
        { itemId: 1, name: "Laptop", qty: 1, price: 80000 },
        { itemId: 2, name: "Mouse", qty: 1, price: 2000 },
        { itemId: 3, name: "Keyboard", qty: 1, price: 3000 },
      ],
    },
    {
      orderId: 3,
      date: "2025-08-10",
      items: [
        { itemId: 1, name: "Headphones", qty: 1, price: 5000 },
        { itemId: 2, name: "Cable", qty: 3, price: 1000 },
        { itemId: 3, name: "USB Hub", qty: 1, price: 2500 },
      ],
    },
  ],
};

const getOrders = (user) => {
  return new Promise((resolve, reject) => {
    console.log("fetched Orders");
    if (user) {
      resolve(user.orders);
    } else {
      reject("User not Found");
    }
  });
};

const showData = async () => {
  let userData = user ? user : "user not found";
  console.log(userData);
  let orders = await getOrders(userData);
  console.log(orders);
};

showData();
