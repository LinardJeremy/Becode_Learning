// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here
   class person {
       constructor(firstname,lastname){
            this.firstname= firstname;
            this.lastname = lastname;

       }
       get name() {
        return this.firstname +" "+ this.lastname;


       }
       set name(fullname){
        let nom = fullname.split(' ');
        this.firstname = nom [0];
        this.lastname = nom[1];


       };
   }
   
    document.getElementById("run").addEventListener("click", () => {
        let d =  new person("jeremy", "linard");
        console.log(d.name);
        d.name = "Jean Dupont";
        console.log(d.name);
    });

})();
