function Calc() {
 var ft=document.getElementById("number").value
  if(document.getElementById("inches").checked==true){
    ft=ft/12;
        }
    else if(document.getElementById("feet").checked==true){
    ft=ft;
        }
    else if(document.getElementById("yards").checked==true){
    ft=ft*3;
        }
    else if(document.getElementById("miles").checked==true){
    ft=ft*5280;
        }
    else if(document.getElementById("meters").checked==true){
    ft=ft*3.28084;
        }
    else if(document.getElementById("kilometers").checked==true){
    ft=ft*3280.84;
        }  
 var ans
  
  if(document.getElementById("inches2").checked==true){
    ans=ft*12;
        }
    else if(document.getElementById("feet2").checked==true){
    ans=ft;
        }
    else if(document.getElementById("yards2").checked==true){
    ans=ft/3;
        }
    else if(document.getElementById("miles2").checked==true){
    ans=ft/5280;
        }
    else if(document.getElementById("meters2").checked==true){
    ans=ft/3.28084;
        }
    else if(document.getElementById("kilometers2").checked==true){
    ans=ft/3280.84;
        } 
  
  if(ans%1==0){
    ans=ans
        }
    else {
    ans=ans.toFixed(4)
        }
  var div = document.getElementById('answer')
  div.innerHTML=ans
}

function Pic() {
var pic = "ThumbsUpChuck.gif"
  document.getElementById('picture').src = pic.replace('90x90', '225x225');
}
