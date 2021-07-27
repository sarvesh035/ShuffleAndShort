const listArr = [9, 8, 3, 4, 5, 6, 7, 2, 1];
window.onload = function () {
    sortList();
}

function createElement(elementArr) {
    var list = document.getElementById("shuffleAndSort");
    list.innerHTML = ""; let i = 0;
    while (i < elementArr.length) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(elementArr[i]));
        li.setAttribute("class", `li-${elementArr[i]}`); // added line   
        list.appendChild(li); ++i;
    }
}

function sortList() {
    var sortArr = listArr.sort((a, b) => a - b);
    createElement(sortArr);
}

function shuffleNodes() {
    let temp, i = listArr.length, rand;
    while (--i) {
        rand = Math.floor(i * Math.random());
        temp = listArr[rand];
        listArr[rand] = listArr[i];
        listArr[i] = temp;
    }
    createElement(listArr);
}