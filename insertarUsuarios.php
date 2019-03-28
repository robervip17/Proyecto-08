<?php
require "public/src/Usuario.php";
  $j=new Usuario();
  $j2=new Usuario();
  $error=$j->comprobarCampos($_POST);
  if(isset($error)){
      if($error===false){
        //NO HAY ERROR
        $j->conectar();
        $j->insertar();
      }
  }
?>
<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="./css/nba.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  </head>
  <body>
    <!-- Menu navegacion-->
    <?php include "./assets/navSup.php"; ?>
    <!-- ERRORES Y MENSAJES-->
    <?php
    if(isset($error)){
        if($error!="") echo "<h4>ERROR:$error</h4>";
    }
    ?>
    <!-- Formulario de insercion -->
    <h2>Nuevo Jugador</h2>
    <form class="formNBA" action="insertarUsuario.php" method="post">
      <div class="grupoFormItem">
        <label for="id"></label>
        <span class="formLabel">id </span>
        <input type="text" name="id" value="">
      </div>
      <div class="grupoFormItem">
        <label for="nombre"></label>
        <span class="formLabel">Nombre </span>
        <input type="text" name="nombre" value="">
      </div>
      <div class="grupoFormItem">
        <label for="puntuacion"></label>
        <span class="formLabel">Puntuacion </span>
        <input type="text" name="puntuacion" value="">
      </div>
      <input type="submit" name="" value="insertar">
    </form>
  </body>
</html>
