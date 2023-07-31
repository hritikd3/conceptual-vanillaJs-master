
//async javascript behaviour when we fetch the api , we dont know when response get laoded
function randomUser(){
    fetch("https://randomuser.me/api/")
    .then(function(raw){
        
        return raw.json();
    })
    .then(function(data){
        console.log(data)
    })
}
 randomUser()