<?php

require "../conn.php";

$username = $_POST['username'] ?? null;
$password = $_POST['password'] ?? null;

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: https://sudharshan.selfmade.one");
header("Access-Control-Allow-Credentials: true");

if(!($username && $password)){
    $res = [
        "status" => false,
        "message" => "Invalid request"
    ];

    http_response_code(400);
    die(json_encode($res));
}


try{
    $query = $conn->prepare("SELECT * FROM `admin` where username=:username and `password`=:password");
    $query->bindParam(":username", $username);
    $query->bindParam(":password", $password);

    $query->execute();

    $result = $query->fetchAll(PDO::FETCH_ASSOC);

    if(count($result) == 1){
        $access_token = bin2hex(random_bytes(32));
        $admin_id = $result[0]['id'];
        $current_time = date('Y-m-d H:i:s');
        $expiry_time = date('Y-m-d H:i:s', strtotime('+2 hours', strtotime($current_time)));

        $query = $conn->prepare("INSERT INTO access_tokens SET admin_id=:admin_id, token=:token, expiry_at=:expiry_at");
        $query->bindParam(":admin_id", $admin_id);
        $query->bindParam(":token", $access_token);
        $query->bindParam(":expiry_at", $expiry_time);

        $query->execute();

        setcookie("access_token", $access_token, time() + (3600 * 2), "/", "", true, true);

        $res = [
            "status" => true
        ];

        die(json_encode($res));
    }else{
        $res = [
            "status" => false,
            "message" => "Invalid username or password"
        ];

        die(json_encode($res));
    }
}catch(Exception $e){
    $res = [
        "status" => false,
        "message" => $e->getMessage()
    ];

    http_response_code(500);
    die(json_encode($res));
}