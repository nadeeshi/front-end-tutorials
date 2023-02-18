
//function jsFunction($scope){
    function getGreetingMsg() {
        const hour = new Date().getHours();
        var greetingMsg;

        if (hour < 18) {
            greetingMsg = "Good Day";
        } else {
            greetingMsg = "Good Evening"
        }

        return greetingMsg;
    }

function getGreetingMsg2() {
    const hour = new Date().getHours();
    let greetingMsg;

    if (hour < 18) {
        greetingMsg = "Good Day";
    } else {
        greetingMsg = "Good Evening"
    }

    document.getElementById("ifElseBlock2").innerHTML = greetingMsg;
}

function getToday() {
    let day;

    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }

    document.getElementById("switchCaseBlock").innerHTML = day;
}


function forLoop() {
    var i = 5;
    let j = 5;

    for (var i = 0; i < 10; i++) {
    }

    document.getElementById("forLoopWithVar").innerHTML = i; // i =10

    for (let j = 0; j < 10; j++) {
    }

    document.getElementById("forLoopWithLet").innerHTML = j; // i =5
}

/*
This is not good if we need to use index order
Instead we can use for loo, for of loop, or Array.forEach() when order it important
 */
function forInLoop() {
    const numbers = [34, 45, 67, 43];

    let text = "";
    for (let x in numbers) {
        text += numbers[x] + <br/>;
    }

    document.getElementById("forInLoop").innerHTML = text;
}

function forEachLoop() {
    const numbers = [34, 56, 54, 34];

    let text = "";
    numbers.forEach(myFunction);

    document.getElementById("forEachLoop").innerHTML = text;
    function myFunction(value) {
        text += value + <br/>;
    }
}

function whileLoop() {
    let text = "";
    let i = 0;

    while (i < 10) { // until this condition is true this loop will executed
        text += i;
        i++;
    }

    document.getElementById("whileLoop").innerHTML = text;
}


function doWhileLoop() {
    let text = "";
    let i = 0;

    do { // this loop always execute at least once, even condition is false
        text += i;
        i++;
    } while (i < 10);

    document.getElementById("doWhileLoop").innerHTML = text;
}

//}
