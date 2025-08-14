function outer() {
    let name = "Baid";

    function inner() {
        console.log(name); // inner ko outer ka variable mil gaya
    }

    inner();
}

outer();
