const name = "John";
const age=39;
const job='Web Developer';
let myHtml;

myHtml=`
<ul>
   <li>Name: ${name}</li>
   <li id='age'>Age: ${age}</li>
   <li>Job: ${job}</li>
</ul>
`;

document.body.innerHTML=myHtml;