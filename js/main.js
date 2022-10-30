class transport{
    constructor(firm, model, color, inUse){
    this.firm = firm;
    this.model = model;
    this.color = color;
    this.inUse = inUse;
    };
    condition(){
        console.log(`${this.inUse} New`);
    };
    condition2(){
        console.log(`${this.inUse} Was in use`);
    };
};

class car extends transport{
    constructor(firm, model, color, inUse, engineValue, maxSpeed){
    super(firm, model, color, inUse)
    this.engineValue = engineValue;
    this.maxSpeed = maxSpeed;
    };
};

const bmw = new car('BMW', 'e14', 'pink', 'condition:', 'started', '180km/h');
console.log(bmw);
bmw.condition();