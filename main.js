const btn=document.getElementById("Submit")
btn.addEventListener("click",(event)=>{
    event.preventDefault()
let inputA=document.getElementById("ShedA").value
let inputB=document.getElementById("ShedB").value
let inputC=document.getElementById("ShedC").value
let inputD=document.getElementById("ShedD").value
let days=document.getElementById("days").value
let totals=totalProduction(inputA,inputB,inputC,inputD);
incomeOverTime (45,days,totals)
console.log(inputA)
})

function totalProduction(A,B,C,D){
let production=`total production in shed A ${A}litres\n
total production in shed B ${B}litres\n
total production in shed C ${C}litres\n
total production in shed D ${D}litres`
totalProduction=parseInt(A)+parseInt(B)+parseInt(C)+parseInt(D)
console.log(production);
let holder=document.getElementById("produce")
holder.textContent+=production
let totalHolder=document.querySelector("#total")
totalHolder.innerHTML+=`<p style="color:blue;">Total production in all sheds is ${totalProduction}<br></p>`
return totalProduction
}

function incomeOverTime(sellingPrice,time,totals){
let incomePerWeek=totals*sellingPrice*parseInt(time)
let incomePerYear=totals*sellingPrice*364
let incomeHolder=document.getElementById("income")
incomeHolder.innerHTML+=`<p style="color:red;">Total weekly income:${incomePerWeek}</p><br>
<p style="color:green;">Total yearly income:${incomePerYear}</p><br>`
}

