<?php

$usuario = $_POST['username'];
$pass = $_POST['password'];

if($usuario === '' || $pass ===''){
    echo json_encode('error');
}else{
    echo json_encode('Correcto:<br>Usuario: '.$usuario.'<br>Pass:'.$pass);
}