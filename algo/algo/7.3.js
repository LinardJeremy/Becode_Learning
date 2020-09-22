function divisor(n){
    
    for (let i=1; i<=n;i++){
        for (let j=1;j<=n;j++){
            if (i*j==n && i!=1 && i!=n) {
                console.log(i);
            }
        }
    } 
   
}
divisor(10);