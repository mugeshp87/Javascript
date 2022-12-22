const person={
    name:"mugesh",
    age:22,
    details:{
        department:"cse"
    },
    bio:function(){
        console.log(`${this.name} is ${this.age} old`)
    }
}
console.log(person);
console.log(person.name);
console.log(person.age)
person.bio();
console.log(person.lastname="mugi");
console.log(person)