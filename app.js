const res1=document.querySelector("#resultado1");
const res2=document.querySelector("#resultado2");
const res3=document.querySelector("#resultado3");
const res4=document.querySelector("#resultado4");
const res5=document.querySelector("#resultado5");

const div=document.querySelector("#cuadro");
const resultadoCss=document.querySelector("#resultadocss");

document.querySelector("#rango1").addEventListener("input",(e)=>{
    res1.innerHTML=e.srcElement.value;
    div.style.borderRadius=res1.innerHTML+"%";
    validar();
});

document.querySelector("#rango2").addEventListener("input",(e)=>{
    res2.innerHTML=e.srcElement.value;
    div.style.borderTopLeftRadius=res2.innerHTML+"%";
    validar();
});

document.querySelector("#rango3").addEventListener("input",(e)=>{
    res3.innerHTML=e.srcElement.value;
    div.style.borderTopRightRadius=res3.innerHTML+"%";
    validar();
});

document.querySelector("#rango4").addEventListener("input",(e)=>{
    res4.innerHTML=e.srcElement.value;
    div.style.borderBottomLeftRadius=res4.innerHTML+"%";
    validar();
});

document.querySelector("#rango5").addEventListener("input",(e)=>{
    res5.innerHTML=e.srcElement.value;
    div.style.borderBottomRightRadius=res5.innerHTML+"%";
    validar(); 
});

function validar(){
        const res=div.style.cssText.split(";");
        resultadoCss.innerHTML=res;
}