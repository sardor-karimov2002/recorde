// var books=[
//    { name:"o'tgan kunlar"},
//    { name:"mehrobdan chayon"},
//    { name:"Amir temur  hayoti"},
// ]

// var backEl=document.getElementById('back');
// backEl.addEventListener('click',()=>{
//     var ulElement=document.getElementById('ulElement');
//     for(let i=0;i<books.length;i++){
//         let li=document.createElement('li');
//         li.textContent=books[i].name
//         ulElement.appendChild(li)
//     }
// })


// eng uzun so'zni topish ;
// var text ="assalomun alaykum yaxshimiszlar charchashlar yuqmi nima  gaplar";
// function renderText(text=""){
//     let splid=text.split(" ");
//     let sort=" ";
//     let sortNUM=0;
//     console.log(splid)
//     for(let i=0;i<splid.length;i++){
//         if(splid[i].length>sort.length){
//             sort=splid[i]
//         }else{
//             sortNUM++;
//         }
//     }
//     return {sort , sortNUM}
// }
// var result=renderText(text)
// console.log(result)
// var tugulgan=new Date('01.01.2002');
// console.log(tugulgan.getMinutes())
// var text="abc";
// var nemaOF="sardor";
// result=nemaOF.padStart(10,text);
// console.log(result)

///fus

// var textInput=document.getElementById('mask-input');
// var maskDiv=document.querySelector('.maskDiv');
// textInput.addEventListener('focus', ()=>{
//     let text=" "
//     maskDiv.textContent=text.padStart(20,"_")
// })
// textInput.addEventListener('keyup', ()=>{
//     maskDiv.textContent=textInput.value.padEnd(20,"_")
// })

// eng uzin so'z
var text="assalomu alaykum yaxshimisz sog'lig'lariz yaxshimi nima gaplar.";

function renderText(text=" "){
    let satar=text.split(" ")
    console.log(satar)
    let eng=" ";
    let sort=0
    for(let i=0 ;i<satar.length;i++){
        if(satar[i].length>eng.length){
            eng=satar[i]
            
        }
    }
    return eng
}
renderText(text)
console.log(renderText(text))
