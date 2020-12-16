// Your code here
class Cat {
  constructor(name,sex){
    this.name=name;
    this.sex=sex;
  }
  speak (){
<<<<<<< HEAD
    return this.name + " says meow!";
  }
 }
 
 class Dog {
   constructor(name,sex){
     this.name=name;
     this.sex=sex;
   }
   speak (){
    return this.name+" says woof!";
    }
 }
=======
    return console.log(`${this.name}says meow!`);
  }
}
 
class Dog {
  constructor(name,sex){
    this.name=name;
    this.sex=sex;
  }
  speak (){
   return console.log(`${this.name}says woof!`);
  }
}
>>>>>>> 2c008e11bb015787f9d3aa86c02235bca6b4ee03
 
class Bird {
  constructor(name,sex){
    this.name=name;
    this.sex=sex;
  }
  speak (){
<<<<<<< HEAD
    if(this.sex === "male"){
   return `It's me! ${this.name}, the parrot!`;
     }
    else {
      return `${this.name} says squawk!`;
=======
    if(this.sex===male){
   return console.log(`It's me! ${this.name}`);
     }
    else {
      return console.log(`${this.name}says squawk!`);
>>>>>>> 2c008e11bb015787f9d3aa86c02235bca6b4ee03
  }
  }
}