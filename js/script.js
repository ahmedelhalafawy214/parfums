//  IIFE    SEF    Encapsulation    


var allProducts = document.querySelectorAll(".parent a , .parent button")
var content = document.querySelector("#content")
var btn = document.querySelector("#addToCart")
var totalPrice = 0 ;
allProducts.forEach( function (item){
    item.onclick = function (){
        totalPrice += parseInt (item.getAttribute("price")) 
        content.innerHTML += item.textContent + " , ";
        if (content.innerHTML != "" ){
            btn.style.display = "block";
            btn.style.backgroundColor = "blue";
            btn.style.color = "white";
            btn.style.position="absolute";
            btn.style.width="150px";
            btn.style.height="40px";
            btn.style.backgroundColor="250px";
            btn.style.borderradius="20px";
            btn.style.fontsize="250px";
            btn.style.right="200px";
            btn.style.top="230px";
            

        }
    }
})
btn.onclick = function (){
console.log=totalPrice
}

/////////////////////////////////////////////////////////////////////////////////////////

// JSON     Javascript Object Notation 
// 1
// 2 
// 3 
// API   


//  var  res = [
//     {
//         name : "ahmed",
//         age : "30",
//         city : "mansoura"
//     },
//     {
//         name : "fatma",
//         age : "19",
//         city : "cairo"
//     },
//     {
//         name : "sajda",
//         age : "26",
//         city : "egypt"
//     }
 

//  console.log(res)
// console.log(typeof res)

// document.getElementById("div1").innerHTML = res;

// var x = JSON.stringify(res)

// // document.getElementById("div1").innerHTML = x ;

// // console.log( typeof x )
// var y = JSON.parse (x)

// // document.getElementById("div1").innerHTML =y  ;

// var z = JSON.stringify (y)

// document.getElementById("div1").innerHTML =z  ;
////////////////////////////////////////////////////////////////////


