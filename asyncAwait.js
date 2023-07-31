

 async function userFetch(){
    let raw= await fetch('https://randomuser.me/api/')
    // console.log(raw)
    let ans= await raw.json();
    console.log(ans)
};
userFetch()