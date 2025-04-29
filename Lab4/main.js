//Q1
let smallWindow;

function openWindow() {
    smallWindow = window.open("/newWindow.html", "smallWin", "width=500,height=500");

    smallWindow.onload = () => {
        setTimeout(() => {
            smallWindow.scrollTo({
                top: smallWindow.document.body.scrollHeight,
                behavior: "smooth"
            });

            //b (document.write will override the text)
            // smallWindow.document.write(`<h2 style="text-align:center;">My Name is: Your Name</h2>`);

            //a
            setTimeout(() => {
                if (!smallWindow.closed) {
                    smallWindow.close();
                }
            }, 5000);
        }, 500);
    };
};

//Q2
//a
//method1
console.log(document.getElementsByTagName("img"));
//method2
console.log(document.images); 

//b
const city = document.getElementById("city");
console.log(city.options); 

//c
const secondTable = document.querySelectorAll("table")[1]; // Index 1 for second table
const tableRows = secondTable.querySelectorAll("td");
console.log(tableRows);

//d
const elementsWithBothClasses = document.querySelectorAll(".fontBlue.BGrey");
console.log(elementsWithBothClasses);

//Q4
setInterval(() => {
    const now = new Date();
    document.title = now.toLocaleString();
}, 1000);


//form question
window.onload = function () {
    const params = new URLSearchParams(location.search);

    if (params.has("name") && params.has("age")) {
    const user = {
        name: params.get("name"),
        age: params.get("age"),
    };

    console.log(user);
    }
};
