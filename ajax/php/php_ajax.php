<?php 

include('conn.php');

$nome = $_POST['nomeUsuario']; 

$sql = 'INSERT INTO gravadoAjax (nome) VALUE ("'.$nome.'")';

$query = $mysqli->query($sql);

if($query == true){
    echo "gravado com sucesso";
}else{
    echo "erro ao gravar";
    echo $sql;
}