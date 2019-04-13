<?php 

$host = "localhost";
$user = "root";
$pass = "root";
$databese = "testeAjax";

@$mysqli = mysqli_connect($host, $user, $pass, $databese);

if($mysqli != true){
    echo "ERRO AO CONECTAR AO BANCO, POR FAVOR VERIFIQUE OS PARAMETROS OU OS VALORES DO DB";
}
