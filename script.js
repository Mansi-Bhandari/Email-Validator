let result={
    "tag": "",
    "free": false,
    "role": false,
    "user": "max1",
    "email": "max1@contentcreator.com",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "contentcreator.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
  }
  let inputtext=document.getElementById("useremail");
  let x=document.getElementById("submitbtn")

x.addEventListener("click",async (e)=>{
  e.preventDefault();
let key="ema_live_tjU28BBfgZ4TiqJWNRaSN4Ty1ams6jtWiQh69z1H";
let email=document.getElementById("useremail").value;


let url=`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`

let res=await fetch(url);
let result=await res.json();
// console.log(result)
let str="";
for(key of Object.keys(result)){
  if(result[key]!="" && result[key]!=" "){
  str+=`<div> ${key}:${result[key]}</div>`;
  }
  inputtext.value=" ";
}

let a=document.getElementById("resultContainer");
a.innerHTML=str;
})




 