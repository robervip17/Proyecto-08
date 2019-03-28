function comprobar() {
  var nombre=document.getElementById("nombre").value;
  var apellidos=document.getElementById("apellidos").value;
  var edad=document.getElementById("edad").value;
  var curso=document.getElementById("curso").value;
  var error=true;
    document.getElementById('nombreOculto').style.display = 'none';
    document.getElementById('apellidoOculto').style.display = 'none';
    document.getElementById('edadOculto').style.display = 'none';
    document.getElementById('edadOculto1').style.display = 'none';
    document.getElementById('cursoOculto').style.display = 'none';
    document.getElementById('cursoOculto1').style.display = 'none';
if (nombre=="") {
document.getElementById('nombreOculto').style.display = 'block';
error=false;
}
if (apellidos=="") {
  document.getElementById('apellidoOculto').style.display = 'block';
  error=false;
}
if (edad=="") {
  document.getElementById('edadOculto').style.display = 'block';
  error=false;
}
if (isNaN(edad)) {
  document.getElementById('edadOculto1').style.display = 'block';
  error=false
}
if (curso=="") {
  document.getElementById('cursoOculto').style.display = 'block';
  error=false
}
if (isNaN(curso)) {
  document.getElementById('cursoOculto1').style.display = 'block';
  error=false
}
if (error==false) {
  return false;
}
}
