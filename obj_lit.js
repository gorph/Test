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
let data= person.firstName + ' was born in '+ person.getBirthYear(); 
console.log (person);
console.log(person.address.city);

console.log(data);

let myHtml1=`
<p>${data}</p>
`;

document.getElementById("obj_lit").innerHTML+=myHtml1;
