function fn() {
    log ('Hoisting de função');

    function log(value) {
        console.log(value);
    }
}

/**
 function fn() {
     function log(value) {
        console.log(value);
     }

     log('Hoisting de função');
 }
 */