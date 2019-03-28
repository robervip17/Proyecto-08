<?php
require "public/src/Usuario.php";
  $j=new Usuario();
  $j->conectar();
  $listarTop=$j->top();
?>
<!DOCTYPE html>
<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="public/css/estilos.css">
  </head>
  <body>
    <div id="nav"><?php include "public/assets/navSup.php"; ?></div>
    <table border=1 cellpadding=4 cellspacing=0 width="100%">
     <tr>
       <th>ID</th>
       <th>Nombre</th>
       <th>Puntuacion</th>
     </tr>
     <?php
     foreach ($listarTop as $usuarios) {
       echo "<tr>";
       echo "<td>".$usuarios['id']."</td>";
       echo "<td>".$usuarios['nombre']."</td>";
       echo "<td>".$usuarios['puntuacion']."</td>";
       echo "</tr>";
     }
     ?>
   </table>
    <form>
      <br>
     Siguiente fila
     <input type="text" id="fila" value="">
     Siguiente columna
     <input type="text" id="columna" value="">
     <button type="button" name="button" onclick="comprobarMovimiento()">Comprobar movimiento</button>
     <br><br>
     Movimientos realizados
     <input type="text" id="movimientosRealizados1" value="" disabled=”disabled” >
     Num movimientos
     <input type="text" id="numMovimientos" value="" disabled=”disabled”>
     <br><br>
     Mensajes
     <input type="text" id="mensajes" value="" disabled=”disabled”>
    <script type="text/javascript" src="public/js/codigo.js">
    </script>
    <div id="footer"><?php include "public/assets/footer.php"; ?></div>
  </body>
</html>
