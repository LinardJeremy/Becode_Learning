// 06-dom/08-generate-table-two/script.js - 6.8: creating a table (2)

(() => {

    // your code here
    let target = document.getElementById('target');
    let table = document.createElement('table');
    target.append(table);
for (let i=1;i<=10; i++){
 let x= document.createElement('td');
 target.appendChild(x).innerHTML= 1*i;
}



})();
