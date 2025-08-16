const checkUsername = (name) => {
  return new Promise((resolve, reject) => {
    let userName = name;
    if (userName.length >= 5) {
      resolve(`Valid Username`);
    } else {
      reject("Username is too Short");
    }
  })
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
};

checkUsername("baid");
