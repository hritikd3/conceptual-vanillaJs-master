// problem statement:  you have to find the max occuring character in the given string 


// input : "Return the max character from the string "
// output: the max occuring character is of -> t



    
    const maxChar=(str)=>{
        let arr= str.split('')
        let count=0;
        let result="";
        
        arr.forEach((ch) => {
            let innerCount=0;
            arr.forEach((el)=>{
                if(el==ch){
                    
                    innerCount +=1;
                } 
            })
            if(innerCount > count) {
                count= innerCount;
                result= ch;

            }
          
        });
        console.log( result)
        
    }
    
    const str= "this is javascript code ";
    maxChar(str)
