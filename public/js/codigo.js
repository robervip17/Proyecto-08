var color1=["blue","yellow","pink","red","yellow","blue"];
var color2=["blue","white","pink","red","yellow","blue"];
var color3=["blue","yellow","blue","red","red","pink"];
var color4=["pink","white","pink","red","green","red"];
var color5=["green","white","green","green","white","yellow"];
var color6=["green","white","pink","white","green","yellow"];
var todosColores=["blue","yellow","pink","red","yellow","blue","blue","white","pink","red","yellow","blue","blue","yellow","blue","red","red","pink","pink","white","pink","red","green","red","green","white","green","green","white","yellow","green","white","pink","white","green","yellow"];
var numero1=[2,6,5,4,5,5];
var numero2=[4,6,6,3,2,6];
var numero3=[3,4,1,2,6,3];
var numero4=[1,4,2,5,6,1];
var numero5=[5,5,3,2,2,1];
var numero6=[4,1,4,3,1,3];

var posInicial=[0,0];
var posFinal=[0,0];

var filaInicial=0;
var colInicial=0;

var filaFinal=0;
var colFinal=0;

var movimientosRealizados=[];

var contador=0;

function casillaAleatoria() {
  while (true) {
    filaInicial= Math.floor((Math.random() *6) +1);
    filaFinal= Math.floor((Math.random() *6) +1);
    if (filaInicial != filaFinal) {
      break;
    }
  }
  while (true) {
    colInicial= Math.floor((Math.random() *6) +1);
    colFinal= Math.floor((Math.random() *6) +1);
    if (colInicial != colFinal) {
      break;
    }
  }

posInicial.splice(0,1, `${filaInicial}`);
posFinal.splice(0,1, `${filaFinal}`);

posInicial.splice(1,1, `${colInicial}`);
posFinal.splice(1,1, `${colFinal}`);
}
casillaAleatoria();

function tablero() {

document.write(`<table width=30% align=center>`);
document.write("<tr>");
document.write(`<td style="background-color:#00FFA2; border: 5px solid black">`);
document.write("<table align=center>");

  for (let i = 0; i < numero1.length; i++) {
    if (posInicial[0]==1 && posInicial[1]==i+1) {
            document.write(`<td style="background-color:${color1[i]};font-size:80px; border: 10px solid black">${numero1[i]}</td>`);
    }
    else if (posFinal[0]==1 && posFinal[1]==i+1) {
document.write(`<td style="background-color:${color1[i]};font-size:80px; border: 10px solid grey">${numero1[i]}</td>`);
    }
    else {
    document.write(`<td style="background-color:${color1[i]};font-size:80px;  border: 10px solid #00FFA2">${numero1[i]}</td>`);
    }
  }
  document.write("</tr>");
  document.write("<tr>");

  for (let i = 0; i < numero2.length; i++) {
    if (posInicial[0]==2 && posInicial[1]==i+1) {
            document.write(`<td style="background-color:${color2[i]};font-size:80px; border: 10px solid black">${numero2[i]}</td>`);
      }
    else if (posFinal[0]==2 && posFinal[1]==i+1) {
  document.write(`<td style="background-color:${color2[i]};font-size:80px; border: 10px solid grey">${numero2[i]}</td>`);
      }
      else {
        document.write(`<td style="background-color:${color2[i]};font-size:80px; border: 10px solid #00FFA2">${numero2[i]}</td>`);
      }
    }
  document.write("</tr>");
  document.write("<tr>");
  for (let i = 0; i < numero3.length; i++) {
    if (posInicial[0]==3 && posInicial[1]==i+1) {
            document.write(`<td style="background-color:${color3[i]};font-size:80px; border: 10px solid black">${numero3[i]}</td>`);
      }
    else if (posFinal[0]==3 && posFinal[1]==i+1) {
  document.write(`<td style="background-color:${color3[i]};font-size:80px; border: 10px solid grey">${numero3[i]}</td>`);
      }
      else {
        document.write(`<td style="background-color:${color3[i]};font-size:80px; border: 10px solid #00FFA2">${numero3[i]}</td>`);
      }
    }
  document.write("</tr>");
  document.write("<tr>");
  for (let i = 0; i < numero4.length; i++) {
    if (posInicial[0]==4 && posInicial[1]==i+1) {
            document.write(`<td style="background-color:${color4[i]};font-size:80px; border: 10px solid black">${numero4[i]}</td>`);
    }
    else if (posFinal[0]==4 && posFinal[1]==i+1) {
document.write(`<td style="background-color:${color4[i]};font-size:80px; border: 10px solid grey">${numero4[i]}</td>`)
    }
        else {
        document.write(`<td style="background-color:${color4[i]};font-size:80px; border: 10px solid #00FFA2">${numero4[i]}</td>`);
          }
    }
  document.write("</tr>");
  document.write("<tr>");
  for (let i = 0; i < numero5.length; i++) {
    if (posInicial[0]==5 && posInicial[1]==i+1) {
            document.write(`<td style="background-color:${color5[i]};font-size:80px; border: 10px solid black">${numero5[i]}</td>`);
    }
    else if (posFinal[0]==5 && posFinal[1]==i+1) {
  document.write(`<td style="background-color:${color5[i]};font-size:80px; border: 10px solid grey">${numero5[i]}</td>`)
    }
    else {
      document.write(`<td style="background-color:${color5[i]};font-size:80px; border: 10px solid #00FFA2">${numero5[i]}</td>`)
        }
  }
  document.write("</tr>");
  document.write("<tr>");
  for (let i = 0; i < numero6.length; i++) {
    if (posInicial[0]==6 && posInicial[1]==i+1) {
            document.write(`<td style="background-color:${color6[i]};font-size:80px; border: 10px solid black">${numero6[i]}</td>`);
    }
    else if (posFinal[0]==6 && posFinal[1]==i+1) {
  document.write(`<td style="background-color:${color6[i]};font-size:80px; border: 10px solid grey">${numero6[i]}</td>`)
    }
    else {
        document.write(`<td style="background-color:${color6[i]}; font-size:80px; border: 10px solid #00FFA2">${numero6[i]}</td>`);
          }
    }
  document.write("</tr>");
  }
  document.write("<table>");
    document.write("</td>");
  document.write("</tr>");
  document.write("</table>");
  tablero();
console.log(posInicial);
function comprobarMovimiento() {
  let comprobarposInicial=posInicial;
  if (posInicial[0]==fila.value || posInicial[1]==columna.value) {
      mensajes.value="El movimiento es valido";
      movimientosRealizados.splice(0,1, `${fila.value}`);
      movimientosRealizados.splice(1,1, `${columna.value}`);
      movimientosRealizados1.value=`(${movimientosRealizados})`;
      posInicial.splice(0,1,`${fila.value}`);
      posInicial.splice(1,1,`${columna.value}`);
      contador=contador+1;
      numMovimientos.value=contador;
      if (posFinal[0]==fila.value && posFinal[1]==columna.value) {
        mensajes.value="Has ganado!";
      }
  }
  else {
    mensajes.value="El movimiento no es valido"
  }
  fila.value="";
  columna.value="";
}
