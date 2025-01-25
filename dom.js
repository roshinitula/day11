// let  element = document.getElementById("demo");
// element.innerText ="G+";
// console.log(element);

//!

// let ele = document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].innerText="Hello"
// ele[0].style.backgroundColor="tomato"

// //! spread operator:- itwill takeout each and every value from the original array
// //! and store it inside one more new array(pure array).

// let x=[...ele];
// x.map(element=>{
//     element.style.backgroundColor="pink"
// })

//  let ele = document.querySelector("#mru");
//  console.log(ele);

//  let ele = document.querySelector(".test");
//  console.log(ele);

// let ele = document.querySelectorAll(".test");
// console.log(ele);






// let ele=document.createElement("h1");
// ele.innerText="Dynamic creation of html element";
// //ele.setAttribute("id","demo");
// ele.id="demo";
// //ele.removeAttribute("id")
// //console.log(ele);
// document.body.append(ele);

// let image=document.createElement("img");
// image.src="./3606208.jpg";
// console.log(image);

// document.body.appendChild(ele);
// document.body.appendChild(image)



let form = document.querySelector("form");
let username =document.getElementById("uName");
let mail = document.getElementById("uMail");
let psw = document.getElementById("uPass");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let uname = username.ariaValueMax;
    let uemail = mail.ariaValueMax;
    let upass = psw.ariaValueMax;
    let userDetails={
        uname, uemail, upass
    }

    
    console.log(userDetails);
    localStorage.setItem("userData", JSON.stringify(userDetails))
})