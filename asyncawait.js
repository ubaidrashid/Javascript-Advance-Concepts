async function getUserData() {
  try {
    let Api = await fetch(`https://jsonplaceholder.typicode.com/users`);
    if (!Api.ok) {
      console.log("api sahi nhi hai ");
    }
    let res = await Api.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

getUserData();
