class Car {
    engine: string;

    constructor(engine:string) {
        this.engine = engine;
    }

    disp(msg:string):void {
        console.log(`${msg} Enginne is : ${this.engine}`);
    }
}

let obj = new Car("XXSS1");
console.log(obj.engine);
obj.disp("Tata");