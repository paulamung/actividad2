'use strict';document.addEventListener("DOMContentLoaded",function(){function c(){const d=document.getElementById("reloj");var a=new Date,b=a.getHours().toString().padStart(2,"0");const e=a.getMinutes().toString().padStart(2,"0");a=a.getSeconds().toString().padStart(2,"0");b=`${b}:${e}:${a}`;d.textContent=b;console.log(`Hora actual: ${b}`)}c();setInterval(c,1E3)});setTimeout(function(){location.reload()},1E4);(function(){alert("Modo de funcionamiento: Estricto")})();
