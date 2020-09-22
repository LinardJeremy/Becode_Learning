// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {

        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    class Dog extends Animal {
        
        constructor (name){
            super(name);
            this.name=name;
        }
        static greeting = "Salut";

        sayHello(){
           return super.sayHello();
        }   
    }
    class Cat extends Animal {
        constructor(name){
            super(name);
            this.name=name;
        }
        static greeting = "Salut";

        sayHello(){
           return super.sayHello();
        }   
    }
    document.getElementById("run").addEventListener("click", () => {
      console.log(new Dog("Milou",).sayHello());
      console.log(new Cat("Moustache",).sayHello());

    });

})();
