function printStart(n) {

    for (let i = 0; i < n; i++) {
        row = '';
        for (let j = 0; j < n; j++) {
            row += '*';
        }
        console.log(row);

    }
}

printStart(5)