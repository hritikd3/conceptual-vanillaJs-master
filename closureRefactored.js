// according to ques "closureQues" , bacause of let it is printing in sequence but with var it will simply print the count like  :-  hello 6 6 6 6 6 
//  WE WANT TO PRINT THE SAME LIKE "LET" SO using closure i can do it 

function foo(){
    for(var i=1; i<=5; i++){
        function close(x){
            setTimeout(()=>{
                console.log(x)
            },x*1000)
        }
        close( i)
    }
    console.log("I will console first bcz of setTimeout")
}

foo()

