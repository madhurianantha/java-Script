// // var a = prompt (" enter the value");
// // console.log(a);
// // // let val= (a % 2==0) ? console.log(" a is even"):console.log(" a is odd");
// // if( a %2==0){
// //     console.log("a is even");

// // }else{
// //     console.log("a is odd");

// // }
// var c=prompt("enter the value ")

// console.log(c);

// if(c != ""){

// let d=Number(c)

// switch(d){

// case 0:
//     alert("sunday")
//    break;
// case 1:
//     alert("mon")
//     break;
// case 2:
//     alert("tues")
//     break;
// case 3:
//      alert("wed")
//      break;
//  case 4:
//    alert("thurs")
//    break;
//    case 5:
//     alert("fri")
//     break;
//     case 6:
//         alert("sat")
//         break;
// default :
//    alert("enter only from 0-6");
// }
// }else{

//     alert("dont enter empty ")
// }
// create a function that eliminates space btw two strings 
// debugger
// let a="        The quick brown fox jumps over the lazy dog       "
// let a=prompt(" enter your data ")
// console.log(a.length);
// console.log(a.trim());
// console.log(a.trimStart());
// console.log(a.trimEnd());
// console.log(a.replace(/ /ig, ""));
// phn no.8976 indian no validation 10 dig startwith condition a|b| &lenth==10 not a indian no
// debugger
//  var a=prompt("enter the phone no");
//  arr=["9","8","7","6"];
// if((a.startwith("9")|| a.startwith("8")|| a.startwith("7")|| a.startwith("6")) && a.length==10){
//   if(arr.includes(a[0] && a.length==10)){
//         console.log("this is a valid no");
//         console.log(a);

// }else{
//         console.log("you entered invalid no");
// }
 

// input  mail ,
// var b=+prompt(" enter your mail");
// console.log(b);
// console.log(b.includes("@gmail.com"));

//  date 7/5/2023 another promt not exceeding this date endwith use 
// write a code generating opt random

// function getRandom() {
//         return Math.floor(Math.random() * (9999 - 1111) ) + 1111;
// }
//       console.log(getRandom());

// The JavaScript Math object allows you to perform mathematical tasks on numbers.
// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)	Returns x rounded up to its nearest integer
// Math.floor(x)	Returns x rounded down to its nearest integer
// Math.trunc(x)	Returns the integer part of x (new in ES6)

// write a code generating opt random
// var a="";
// for(i=0;i<4;i++){
//     var b =Math.random().toFixed(1)*10;
//   var a=(a+b);
// }
// console.log(a);

// function getRandom() {

//         return Math.floor(Math.random() * (9999 - 1111) ) + 1111;

       
// }
//      console.log(getRandom());
// //  let b=Math.random().toFixed(2)*100;
//       console.log(b);
//       pop method
// The pop() method removes (pops) the last element of an array.

// The pop() method changes the original array.

// The pop() method returns the removed element.
// debugger
// var p=[1,2,3,4,5];
// console.log(p.pop());
// var a=[1,2,3,4,5,6];
// var b=[];
// var c=[a.length-2];

// for(i=0;i<=c;i++){
//         b.push(a[i]);   
// }
// console.log((b));
// var d=[c-1];
// var e=[];
// for(j=0;j<=d;j++){
//         e.push(a[j]);
// }
// console.log((e));
// count the elements in an array using array itrration methods
// let a=[1,3,2,4,7,5,9,3];
// let count1=[];
// var count=a.map(function ele(){ return count1++;});
// console.log(count);
// console.log(count1);
// write a code in the dom for login details
// function autofiller(){
//     const namevariable= document.getElementsByName("hello")
//     namevariable.forEach(namefiller)
//     function namefiller(element,index,array){
        
//         console.log(element.value);
//     }
// }
// bulb on off method
// function on() {
//     const img = document.getElementById("bulb");
//     img.src = "https://toppng.com/uploads/preview/light-bulb-png-transparent-light-bulb-115628766421gdl0skp2k.png";
//     img.width=400;
//     img.height=500;
// }
// function tableon() {
//     const tableCells = document.getElementsByClassName("tablecolor");
//     for (let i = 0; i < tableCells.length; i++) {
//         const cell = tableCells[i];
//         cell.style.backgroundColor = "green"; 
//         cell.style.width = "50px"; 
//         cell.style.height = "50px"; 
//         cell.style.border = "2px solid black"; 
//         cell.style.textAlign = "center"; 
//     }
//     tableCells[4].style.backgroundColor="#d9b3ff";
// }
// bulb on off grid mood
// const bulbsState = [false, false, false, false];
// function updateBulbStatus() {
//     let bulbsOn = 0;
//     let bulbsOff = 0;

//     bulbsState.forEach((isOn) => {
//         if (isOn) {
//             bulbsOn++;
//         } else {
//             bulbsOff++;
//         }
//     });

//     const bulbStatus = document.getElementById('bulbStatus');
//     bulbStatus.textContent = `Bulbs On: ${bulbsOn} | Bulbs Off: ${bulbsOff}`;
// }

//       function liteon1() {
//         const tableCells = document.getElementsByClassName("tablecolor");
//             var bulbimg = document.getElementsByTagName("img")[0];
//             var button = document.getElementsByTagName("button")[0];
//             if (bulbimg.src === "https://www.citypng.com/public/uploads/preview/hd-light-bulb-on-off-png-31626305624ofqq78jchu.png") {
//                 bulbimg.src = "https://toppng.com/uploads/preview/light-bulb-png-transparent-light-bulb-115628766421gdl0skp2k.png";
//                 bulbsState[0] = true;
//                 tableCells[0].style.backgroundColor="white";
                
//                button.innerHTML = "Turn off the light1";
              
        //     } else {
        //         bulbimg.src = "https://www.citypng.com/public/uploads/preview/hd-light-bulb-on-off-png-31626305624ofqq78jchu.png";
        //         bulbsState[0] = false;
        //         tableCells[0].style.backgroundColor="black";
                
        //         button.innerHTML = "Turn on the light1";
        //     }
        //     updateBulbStatus();
        // }
        // function liteon2() {
        //     var bulbimg = document.getElementsByTagName("img")[1];
        //     var button = document.getElementsByTagName("button")[1];
        //     if (bulbimg.src === "https://www.citypng.com/public/uploads/preview/hd-light-bulb-on-off-png-31626305624ofqq78jchu.png") {
        //         bulbimg.src = "https://toppng.com/uploads/preview/light-bulb-png-transparent-light-bulb-115628766421gdl0skp2k.png";
        //         bulbsState[1] = true;
                
        //         button.innerHTML = "Turn off the light2";
        //     } else {
        //         bulbimg.src = "https://www.citypng.com/public/uploads/preview/hd-light-bulb-on-off-png-31626305624ofqq78jchu.png";
        //         bulbsState[1] = false;
            
        //         button.innerHTML = "Turn on the light2";
        //     }
        //     updateBulbStatus();
        // }
        //     function liteon3() {
        //         var bulbimg = document.getElementsByTagName("img")[2];
        //         var button = document.getElementsByTagName("button")[2];
        //         if (bulbimg.src === "https://www.citypng.com/public/uploads/preview/hd-light-bulb-on-off-png-31626305624ofqq78jchu.png") {
        //             bulbimg.src = "https://toppng.com/uploads/preview/light-bulb-png-transparent-light-bulb-115628766421gdl0skp2k.png"; 
                    
        //             bulbsState[2] = true;
        //             button.innerHTML = "Turn off the light3";
        //         } else {
        //             bulbimg.src = "https://www.citypng.com/public/uploads/preview/hd-light-bulb-on-off-png-31626305624ofqq78jchu.png";
                    
        //             bulbsState[2] = false;
        //             button.innerHTML = "Turn on the light3";
        //         }
        //         updateBulbStatus();
        //     }
        //         function liteon4() {
        //             var bulbimg = document.getElementsByTagName("img")[3];
        //             var button = document.getElementsByTagName("button")[3];
        //             if (bulbimg.src === "https://www.citypng.com/public/uploads/preview/hd-light-bulb-on-off-png-31626305624ofqq78jchu.png") {
        //                 bulbimg.src = "https://toppng.com/uploads/preview/light-bulb-png-transparent-light-bulb-115628766421gdl0skp2k.png";
        //                 bulbsState[3] = true;
        //                 button.innerHTML = "Turn off the light4";
        //             } else {
        //                 bulbimg.src = "https://www.citypng.com/public/uploads/preview/hd-light-bulb-on-off-png-31626305624ofqq78jchu.png";
        //                 bulbsState[3] = false;
        //                 button.innerHTML = "Turn on the light4";
        //             }
        //             updateBulbStatus();
        // }
    
        // updateBulbStatus();

// call backs and promises
// function getposts(name,callback){
//         if(name==="madhu"){
//                 setTimeout(() => {
//                         // query that featches the ost from backend
//                         const result=["post1","post2","post"]//from db
//                         callback(result);
//                 },2000);
//         }else{
// console.log("other user");
//         }
// }
// // async task fetch com from db
// function getcomments(posts,callback){
//         if(posts.length>0){
//                 //hitting db or simulate db
//         setTimeout(()=>{
//                 //fetch comments from db r backend
//                 const comments=["comment1","comment2","comment"]
//                 callback(comments);
//         }, 2000)
// }else{
        // console.log("no posts available");
// }
// }
// function getlikes(comments,callback) {
//         setTimeout(()=>{
//                 const result=true
//                 callback(result)
//         },2000)
        
// }

// getposts("madhu",(posts)=>{
//         console.log(posts)
//         getcomments(posts,(comments)=>{
//                 console.log(comments);
//                 getlikes(comments,(result)=>{
//                         console.log(result);
//                 });
//         });
// });
//callback hell
//using promise to callbacks
// producing code
// function asyncoperation(){
// let resultofstudents=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//                 let studentmarks=95
//                 if(studentmarks>90){
//                         resolve("promise fullfill");
//                 }else{
//                         reject("promise reject");
//                 }
//         },2000)
      
// })
// return resultofstudents
// }
// // consuming code
// asyncoperation().then((result)=>console.log(result))
// .catch((err)=>console.log(err))
// callback hell prob
// function getposts(name){
//         return new Promise((resolve,reject)=>{
//                 setTimeout(()=>{
//                         // querry that fetch the post from backend
//                         resolve(["post1","post2","post"]);
//                 },2000)
//         })
// }
// function getcomments(comments){
//         return new Promise((resolve,reject)=>{
//                 setTimeout(()=>{
//          const result=["comment1","comment2","comment"]
//                 resolve(result)
//         },2000)
                
//         })
// }
// getposts()
//     .then((posts) =>{  
//         console.log(posts);
//        return getcomments(posts) })//getcomments(posts)
//     .then(comments => console.log(comments))
//     .catch(error => console.error(error));
   
   
//     function getposts(name){

//         return new Promise((resolve,reject)=>{
    
//         if(name=="ram"){
    
//         resolve(["post1","post2","post3"])
    
//         }else{
    
//             reject("other user")
    
//         }
    
//     })
    
//     }
    
//     function getcomments(comments){
    
//         return new Promise((resolve,reject)=>{
    
//         if(comments.length>0){
    
//             resolve(["comment1","comment2","comment3"])
    
//         }
    
//     })
    
//     }
    
//     function getlikes(likes){
    
//         return new Promise((resolve,reject)=>{
    
//         resolve(true)
    
//     })
    
//     }
    
//     getposts("ram").then((posts)=>{
    
//         console.log(posts)
    
//         return getcomments(posts)
    
//     })
    
//         .then((comments)=>{
    
//             console.log(comments)
    
//             return getlikes(comments)
    
//         })
    
//             .then((likes)=>{
    
//                 console.log(likes)
    
//     })
// result.forEach(element => {
//     let list=document.createElement("li")
//     list.textContent=element["title"]
//     ul.appendChild(list)
// });



// let inpt=[1,2,"n","h",undefined,null,true,false]

// let txt = "";
// inpt.forEach(myFunction);

// function myFunction(value) {
//   txt +=typeof value +"      ";
  
// }
// console.log(txt);
// // const time= gettime();

// const d = new Date();
// let time = d.getTime();
// console.log(time);
var n="1234";
for(i=0;i<n.length;i++){
        var b = b+ n[i];
console.log(b);
}