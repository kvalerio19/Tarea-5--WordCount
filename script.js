//let str = "your long string";
//let wordCount = str.match(/(\w+)/g).length;
//alert(wordCount); //6

function wordCount() {

    let text = document.getElementById("input").value;
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        let words = text[i];
        if (words == " ") {
            count += 1;
        }
    }

    count += 1;
    document.getElementById("result").innerHTML = count;
}
