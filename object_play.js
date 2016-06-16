var myPerson = {
  name: "Jay",
  age: 32,
  talk: function(){
    console.log("hello");
  }
};


console.log("my person", myPerson);
//this will give the hash and it details back but what if you just wanted the name
console.log("person name", myPerson.name);
console.log("person name", myPerson["name"]); //as all keys are strings in a hash. 

//right now this object is static it cant do anything, like methods

var add = function(a,b){
  return a + b;
}
console.log("adding 1 2" add(1,2));

//we have assigned this function 'funcion(a,b)' to a variable they are an object that can be passed around and assigned. 

//making the person talk, so we added the function to our hash remeber it just an object
myPerson.talk(); //the brackets call the function. you must have them 

//so it like name age talk are instances of the class in ruby terms. a person is the object and it has several of these instances. 

var myPerson = {
  name: "Jay",
  age: 32,
  talk: function(){
    console.log("hello"+ this.name);
  }
};

//THIS is a keyword and is used in the same way as self.name. Right my person has the attributes of name, age and the talk method. then within this talk method we can do THIS.name.

//create a bear object, with type, name, a roar method

var Bear = {
  type: "polarBear",
  name: "noah",
  roar: function(){
    console.log("RAWR");
  },
  stomach:[]
  hunt: function(){
  eat: function(){
    this.stomach.push(arguments)

  }
}

console.log(bear.stomach)
Bear.eat("fish","rabbit")


