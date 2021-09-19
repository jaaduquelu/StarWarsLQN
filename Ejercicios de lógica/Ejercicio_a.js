
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i, "buzz", (i % 5 == 0) ? "bazz" : '');
    } else if (i % 5 == 0) {
        console.log(i, "bazz");
    } else {
        console.log(i);
    }
}