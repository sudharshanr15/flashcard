<?php

$conn = null;

$username = "root";
$password = "dharshan";
$hostname = "localhost";
$db = "flashcard";

try{
    $conn = new PDO("mysql:host=$hostname;dbname=$db", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(Exception $e){
    die("Connection failed");
}