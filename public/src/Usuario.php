<?php
/**
 * Jugador
 */
class Usuario
{
private $conexion=null;
private $id;
private $nombre;
private $puntuacion;
  function __construct()
  {
  }
  public function comprobarCampos($post){
    $error=null;
    if(!isset($post)||!isset($post["id"])||!isset($post["nombre"])||!isset($post["puntuacion"])){
      $error="";
    }elseif($post["id"]==""){
      $error="No has introducido la id";
    }elseif($post["nombre"]==""){
      $error="No has introducido el nombre";
    }elseif($post["puntuacion"]==""){
      $error="No has introducido la puntuacion";
    }else {
      $error=false;
      $this->id = $post['id'];
      $this->nombre = $post['nombre'];
      $this->puntuacion = $post['puntuacion'];
    }
    return $error;
    }
    public function conectar(){
      $this->conexion = new mysqli("localhost", "root", "", "juegos");
      if ($this->conexion->connect_errno) {
        echo "Fallo al conectar a MySQL: (" . $this->conexion->connect_errno . ") " . $this->conexion->connect_error;
      }
  }
    public function top(){
        $resultado=$this->conexion->query("SELECT * FROM usuarios WHERE nombre='Roberto'");
        return $resultado;
    }
    public function insertar(){
      $consulta="INSERT INTO usuarios (id, nombre, apellidos, edad, curso, puntuacion)
                  VALUES ($this->id, '$this->nombre', NULL, NULL, NULL, $this->puntuacion)";
                  echo $consulta;
      $this->conexion->query($consulta);
  }
  public function listarUsuarios(){
      $resultado=$this->conexion->query("SELECT * FROM usuarios");
      return $resultado;
  }
}
 ?>
