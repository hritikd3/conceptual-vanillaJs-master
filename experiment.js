function a(){
    var a=10,z=9;
    return function b(){
        console.log(a)
    }
}
var y=a()
console.log(z)
y()