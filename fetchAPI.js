
//async javascript behaviour when we fetch the api , we dont know when response get laoded
const randomUser=()=>{
    fetch("https://randomuser.me/api/")
    .then((raw)=>{
        
        return raw.json();
    })
    .then((data)=>{
        console.log(data)
    })
}
 randomUser()