// 06-dom/07-generate-table-one/script.js - 6.7: creating a table (1)


(() => {
    // your code here
let target = document.getElementById('target');
let table = document.createElement('table');
target.append(table);
for (let i=0;i<10; i++){
let tr = document.createElement('tr');
 target.appendChild(tr);
 let x= document.createElement('td');
 tr.appendChild(x).innerHTML= "une cellule";
}

})();
