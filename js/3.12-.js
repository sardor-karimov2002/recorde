var galasovay=document.getElementById('galasovay')
var rec=new webkitSpeechRecognition();
var divEl=document.createElement('div')




rec.lang='Uz-uz';
rec.onstart= function(){
    console.log("Process started");
    
}

rec.onresult=function(event){
    let result=event.results[0][0].transcript
    recBtn.textContent=result;
    let okey=document.querySelector('.okey');
    let rasmlar=document.querySelector('.rasmlar');
    let gulshoda=document.querySelector('.gulshoda');
    let iskandar=document.querySelector('.iskandar');
    let maftuna=document.querySelector('.maftuna');
    let tolib=document.querySelector('.tolib');
    let sherzod=document.querySelector('.sherzod');
    let dilarom=document.querySelector('.dilarom');
    let xurshida=document.querySelector('.xurshida');
    let sardor=document.querySelector('.sardor');
    let oxirgi=document.querySelector('.oxirgi');
    if(result=='iskandar'){
        okey.src=iskandar.src
    }
    if(result=='gulshoda'){
        okey.src=gulshoda.src
    }
    if(result=='sardor'){
        okey.src=sardor.src
    }
    if(result=='tolib'){
        okey.src=tolib.src
    }
    if(result=='dilorom'){
        okey.src=dilarom.src
    }
    if(result=='maftuna'){
        okey.src=maftuna.src
    }
    if(result=='sherzod'){
        okey.src=sherzod.src
    }
    if(result=='xurshida'){
        okey.src=xurshida.src
    }
    else{
       document.body.style.background='red'
    }
    console.log(result);

}
rec.onend=function(){
    console.log("Process tugatildi");
}
rec.onerror=function(){
    console.log("xatolik yuz berdi");
}
var recBtn=document.createElement('div')
recBtn.textContent='';

galasovay.addEventListener('click', ()=>{
    rec.start()
})
document.body.appendChild(recBtn)
document.body.appendChild(divEl) 