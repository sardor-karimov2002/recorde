// var users=[
//     {name:"jon", egg:20},
//     {name:"jon", egg:20},
//     {name:"jon", egg:20},
//     {name:"jon", egg:20},
//     {name:"jon", egg:20},
// ]
// console.log(users)
// users[users.length]={name:"sardor",egg:19};
// function push(value,users=[]){
//     users[users.length]=value;
//     return users
// }
// users=push({name:"karimov",egg:21},users)
// console.log(users) 

// for(let i=2; i<=100;i++){
//     let  count=0;
//     for(let j=1 ; j<=Math.sqrt(i);j++){
//         if(i%j===0){
//             count ++
//             // console.log(i+ "tub son")
//         }

//     }
//     if(count<2){
//         console.log(i+"tub son")
//     }
// }

// function isTub(num){
//     for(let i=2; i<=num;i++){
//         let  count=0;
//         for(let j=1 ; j<=Math.sqrt(num);j++){
//             if(num%j===0){
//                 count ++
//                 // console.log(i+ "tub son")
//             }

//         }
//         if(count<2){
//             console.log(num+"tub son")
//         }
//     }
//     return
// }
// isTub(100)
// console.log(isTub(20))

// var a=3;
// var b=2;
// var sum=0
// for(let i=1; i<=a;i++){
//     sum +=Math.pow(i,a+1-i)
// }
// console.log(sum)


// split , join haqida 
// var text ="assalom salom  do'stlar ";

// var splid=text.split(" ")// salom so'zini ajratib beradi 
// var splid1=text.split("") //polni harflar ni bir biridan ajratib beradi 
// console.log(splid)
// console.log(splid1)
// console.log(splid.join("sardor"))
// var text="ABCDEFGLMNOPQRSTUVXYZ";
// var letters=text.split('');
// console.log(letters)
// var soz=[ ]
// for(let i=0;i<3;i++){
//     soz.push(letters[i])
// }
// console.log(soz.join(""))