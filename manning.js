function ADDunits() {
    var lunits = document.getElementById('lunits')
    var sunits = document.getElementById('sunits')
  if(document.getElementById("US").checked==true){
    lunits.innerHTML="[ft]"
    sunits.innerHTML="[ft/ft]"
    }
  else if(document.getElementById("SI").checked==true){
    lunits.innerHTML="[m]"
    sunits.innerHTML="[m/m]"
        }
}

function Calc() {
 var n=document.getElementById("n").value
 var R=document.getElementById("R").value
 var S=document.getElementById("S").value
 if(document.getElementById("US").checked==true){
    var V=1.49/n * R**(2/3) * S**(0.5);
    }
   
    else if(document.getElementById("SI").checked==true){
    var V=(1/n) * R**(2/3) * S**(0.5);
        }

  if(V%1==0){
    ans=ans
        }
    else {
    V=V.toFixed(4)
        }
  
  var ans = document.getElementById('answer')
  ans.innerHTML=V
}
  
