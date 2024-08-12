<?php

require "./conn.php";

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$token = $_COOKIE['$access_token'];

try{
    $query = $conn->prepare("SELECT * from access_tokens where token=:token");
    $query->bindParam(":token", $token);


}catch(Exception $e){
    $res = [
        "status" => false
    ];

    http_response_code(401);
    die(json_encode($res));
}