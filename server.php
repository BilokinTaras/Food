<?php
$_POST = json_decode(file_get_contents("php://input"), true);
//Для обычних данных в виде массива
echo var_dump($_POST);
