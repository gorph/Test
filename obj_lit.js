//Object Literals
const person={
   firstName:'John',
   lastName:'Doe',
   age: 30,
   email:'jd@aol.com',
   hobbies: ['tennis','soccer'],
   address: {
      city: 'WPB',
      state: 'FL'
   },
   getBirthYear: function(){
      return 2022-this.age;       //this used for object info
   }

}
let data= string.concat(person.firstName, ' was born in ',person.getBirthYear()); 
console.log (person);
console.log(person.address.city);

console.log(var);

document.getElementById('obj_lit').innerHTML+=data;
