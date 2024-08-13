<?php

$conn = null;

$username = "sudharshan";
$password = "sudharshan";
$hostname = "mysql.selfmade.ninja";
$db = "sudharshan_flashcard";

try{
    $conn = new PDO("mysql:host=$hostname;dbname=$db", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(Exception $e){
    die("Connection failed");
}