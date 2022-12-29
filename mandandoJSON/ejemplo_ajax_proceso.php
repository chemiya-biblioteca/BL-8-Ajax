<?php 
//http://localhost/php/pruebasLimpioGIt/echoNormal/
//en la carpeta xampapp/htdocs/php


header("Access-Control-Allow-Origin: *");
$resultado = $_POST['valorCaja1'] + $_POST['valorCaja2']; 
echo $resultado; //haciendo este echo estas respondiendo la solicitud ajax
?>