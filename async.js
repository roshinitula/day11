// console.log(10);
// console.log(20);
// setTimeout(()=>{
//     console.log(30);
// })
// console.log(40);
// console.log(50);


// console.log(10);
// console.log(20);
// setInterval(()=>{
//     document.writeln("MRU");
//     console.log(30);
// },150)
// console.log(40);
// console.log(50);


//! API fetching

// function fetchUsers(){
//     let response =fetch("https://jsonplaceholder.typicode.com/users");
//     response.then(result=>{
//         // console.log(result.json());
//         return result.json().then(data=>{
//             console.log(data);
//         })
//     })
//     .catch(err=>console.log(err))
// }
// fetchUsers();



// function fetchUsers(){
//     let response =fetch("https://jsonplaceholder.typicode.com/users");
//     response.then(result=>{
//         // console.log(result.json());
//         return result.json().then(data=>{
//             console.log(data);
//             let store = document.getElementById("store");
//             console.log(store);
//             data.map(user=>
//             {
//                 store.innerHTML += `
//                 <tr>
//                 <td>${user.id}</td>
//                 <td>${user.name}</td>
//                 <td>${user.email}</td>
//                 <td>${user.company.name}</td>s
//                 </tr>
//                 `
//             }
//             )
//         })
//     })
//     .catch(err=>console.log(err))
// }
// fetchUsers();

//?synchronouse

// function demo()
// {
//     console.log("Start");
//     console.log("10");
//     console.log("20");
//     return;
//     console.log("30");
//     console.log("40");
//     console.log("End");
// }
// demo();


//?converting sync to asyn

// async function demo(){
//     console.log("start");
//         let x =await p;
//         console.log(x);
//         console.log("End");
//     };
//     demo()


// async function fetchUsers(){
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let data=await response.json();
//     console.log(data);
// }
// fetchUsers();








