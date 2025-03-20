function personne (param1,param2) {
    this.name = param1 ,
    this.lastename = param2 
}
let r = "mohmaed amine"
let s = "amine"

personne.prototype.getfillname = function() {
    return this.name +' '+ this.lastename ;

};

const person = new personne("momo","bahmane")

console.log(person.getfillname());