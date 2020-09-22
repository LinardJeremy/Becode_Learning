function fibonacci(n) {
 let a = 0 ;
 let b= 1;
 let somme= 0;
    for(let i=2; i <= n; i++){
        somme= a + b;
        a= b;
        b= somme;

    }
    return n ? b : a; 
}

console.log(fibonacci(8));