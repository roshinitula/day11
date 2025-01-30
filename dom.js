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



// let form = document.querySelector("form");
// let username =document.getElementById("uName");
// let mail = document.getElementById("uMail");
// let psw = document.getElementById("uPass");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     let uname = username.ariaValueMax;
//     let uemail = mail.ariaValueMax;
//     let upass = psw.ariaValueMax;
//     let userDetails={
//         uname, uemail, upass
//     }

    
//     console.log(userDetails);
//     localStorage.setItem("userData", JSON.stringify(userDetails))
// })


// let main=document.createElement("div");
// main.setAttribute("id","mainblock");
// console.log(main);

// let topEle=document.createElement("div");
// topEle.setAttribute("class","topblock");

// let image=document.createElement("img");
// image.setAttribute("src","/paris1.png")
// topEle.appendChild(image);
// // console.log(topEle);

// let bottomEle=document.createElement("div");
// bottomEle.setAttribute("class","bottomblock");
// // console.log(bottomEle);

// let h1=document.createElement("h1");
// h1.innerText("Paris");

// let btn=document.createElement("button");
// btn.innerText("View more");

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);

// main.appendChild(topEle);
// main.appendChild(bottomEle);

// document.body.appendChild(main);


// let main=document.createElement("div");
// main.setAttribute("id","mainblock");
// console.log(main);

// let topEle=document.createElement("div");
// topEle.setAttribute("class","topblock");

// let image=document.createElement("img");
// image.src ="./3606208.jpeg"
// topEle.appendChild(image);
// // console.log(topEle);

// let bottomEle=document.createElement("div");
// bottomEle.setAttribute("class","bottomblock");
// // console.log(bottomEle);

// let h1=document.createElement("h1");
// h1.innerText="car";

// let btn=document.createElement("button");
// btn.innerText="View more";
// btn.style.border="none";
// btn.style.padding="20px";
// btn.style.color="white";
// btn.style.backgroundColor="doggerblue";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);

// main.appendChild(topEle);
// main.appendChild(bottomEle);

// document.body.appendChild(main);



// let mainEle = document.createElement("div");
// mainEle.setAttribute("id","mainBlock");
// mainEle.style.border="2px solid red";
// mainEle.style.width="550px";
// mainEle.style.height="550px";
// console.log(mainEle);

// let topEle = document.createElement("div");
// topEle.setAttribute("class","topBlock");

// let image = document.createElement("img");
// image.src="https://cdn.pixabay.com/photo/2023/02/09/16/43/cat-7779237_640.jpg";
// image.style.width="550px"

// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class","bottomBlock");

// let h1 = document.createElement("h1");
// h1.innerText = "CAT";
// h1.style.textAlign="center"

// let btn = document.createElement("button");
// btn.innerText="View More";
// btn.style.border="none";
// btn.style.padding="20px";
// btn.style.backgroundColor="dodgerblue";
// btn.style.color="white";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);

// topEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);
// document.body.appendChild(mainEle);



//!
// let form =document.querySelector("form");
// let username =document.getElementById("uName");
// let pass =document.getElementById("uPass");
// let gender =document.getElementsByName("Gender");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     let uname = username.value;
//     let psw = pass.value;
//     let gen ="";
//     for (let i=0; i<=gender.length-1;i++){
//         // console.log(gender.checked);
//         if(gender[i].checked == true){
//             gen =  gender[i].value;
//         }
//     }
//    let userDetails={
//     username:uname,
//     password:psw,
//     gender:gen
//    }
//     console.log(userDetails);
//     sessionStorage.setItem("userData", JSON.stringify(userDetails))
     
// })


// let form =document.querySelector("form");
// let username =document.getElementById("uName");
// let pass =document.getElementById("uPass");
// let check =document.getElementById("check");
// let show = document.getElementById("show")
// let gender =document.getElementsByName("Gender");


// check.addEventListener("click", event=>{
//     if(event.target.checked == true){
//         pass.setAttribute("type", "text");
//         show.innerText = "hide password";
//     }else{
//         pass.setAttribute("type", "text");
//         show.innerText = "show password";
//     }
// })
// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     let uname = username.value;
//     let psw = pass.value;
//     let gen ="";
//     for (let i=0; i<=gender.length-1;i++){
//         // console.log(gender.checked);
//         if(gender[i].checked == true){
//             gen =  gender[i].value;
//         }
//     }
//    let userDetails={
//     username:uname,
//     password:psw,
//     gender:gen
//    }
//     console.log(userDetails);
//     sessionStorage.setItem("userData", JSON.stringify(userDetails))
     
// })