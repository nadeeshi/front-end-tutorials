
function createMap() {
    const fruits = new Map([ // create a map
        ["Apple", 200],
        ["Orange", 100],
        ["Banana", 200]
    ]);

    fruits.set("Grapes", 500); // add map values
    fruits.set("Apple", 500); // change exiting map values

    fruits.get("Apple"); // get the value of a key

    fruits.size;

    fruits.delete("Banana");

    fruits.has("Apple"); // return true if a key exists in a Map

    let text = "";
    fruits.forEach(function (key, value) {
        text += key + '=' + value;
    });

    document.getElementById("fruits").innerHTML = text;
}