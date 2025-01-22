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

function fetchUsers(){
    let response =fetch("https://jsonplaceholder.typicode.com/users");
    response.then(result=>{
        // console.log(result.json());
        return result.json().then(data=>{
            console.log(data);
        })
    })
    .catch(err=>console.log(err))
}
fetchUsers();