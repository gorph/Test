//Template Literals 12
const name = "John";
const age=39;
const job='Web Developer';
let myHtml;

function hello(){
   return 'hello 123';
}

myHtml=`
<ul>
   <li>Name: ${name}</li>
   <li id='age'>Age: ${age}</li>
   <li>Job: ${job}</li>
   <li>${age>30 ? 'Over 30':'Under 30'}</li>
   <li>Msg: ${hello()}</li>
</ul>
//<p div='obj_lit'>Insert Other Messages Here</p>
`;

document.getElementById('ulist').innerHTML+=myHtml;