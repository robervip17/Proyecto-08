<?php
$conexion = new mysqli("localhost", "root", "", "juegos");
if ($conexion->connect_errno) {
  echo "Fallo al conectar a MySQL: (" . $conexion->connect_errno . ") " . $conexion->connect_error;
}
else {
  $resultado = $conexion->query("SELECT * FROM usuarios");
}
 ?>
<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="public/css/estilos.css">
  </head>
  <body>
    <?php include "public/assets/navSup.php"; ?>
    <table border=1 cellpadding=4 cellspacing=0 width="100%">
     <tr>
       <th>ID</th>
       <th>Nombre</th>
       <th>Apellidos</th>
       <th>Edad</th>
       <th>Curso</th>
       <th>Puntuacion</th>
     </tr>
     <?php
     foreach ($resultado as $usuarios) {
       echo "<tr>";
       echo "<td>".$usuarios['id']."</td>";
       echo "<td>".$usuarios['nombre']."</td>";
       echo "<td>".$usuarios['apellidos']."</td>";
       echo "<td>".$usuarios['edad']."</td>";
       echo "<td>".$usuarios['curso']."</td>";
       echo "<td>".$usuarios['puntuacion']."</td>";
       echo "</tr>";
     }
     ?>
     <?php include "public/assets/footer.php"; ?>
  </body>
</html>
