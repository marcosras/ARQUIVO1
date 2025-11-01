function converter(){
let temp = document.getElementById("n1").value
if (temp=="" || isNaN(Number(temp))){
    alert("Insira um valor válido")
}else{
    let race = document.getElementById("race")
    let rafa = document.getElementById("rafa")
    let rake = document.getElementById("rake")
    let cf = ((Number(temp)*9/5)+32).toFixed(2)
    let ck = (Number(temp)+273.15).toFixed(2)
    let fc = ((Number(temp)-32)*5/9).toFixed(2)
    let fk = ((Number(temp)-32)*5/9+273.15).toFixed(2)
    let kc = (Number(temp)-273.15).toFixed(2)
    let kf = ((Number(temp)-273.15)*9/5+32).toFixed(2)
    
    if(race.checked){
        var result= document.getElementById("result")
        result.innerHTML=`${temp}°C equivale a ${cf}°F<br>${temp}°C equivale a ${ck}K`
    }else if(rafa.checked){
        var result= document.getElementById("result")
        result.innerHTML=`${temp}°F equivale a ${fc}ºC<br>${temp}°F equivale a ${fk}K`
    }else if(rake.checked){
        var result= document.getElementById("result")
        result.innerHTML=`${temp}K equivale a ${kc}°C<br>${temp}K equivale a ${kf}°F`
    }
}
}
