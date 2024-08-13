<?php

// require_once __DIR__ . "/conn.php";

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: https://sudharshan.selfmade.one");
header("Access-Control-Allow-Credentials: true");


$token = $_COOKIE['access_token'] ?? null;

if(!$token){
    $res = [
        "status" => false,
        "message" => "Authentication required"
    ];
    http_response_code(401);

    die(json_encode($res));
}

try{
    $query = $conn->prepare("SELECT * from access_tokens where token=:token ORDER BY id DESC LIMIT 1");
    $query->bindParam(":token", $token);
    $query->execute();

    $result = $query->fetch(PDO::FETCH_ASSOC);

    if($result){
        $date = new DateTime();
        $expiry_time = new DateTime($result['expiry_at']);

        $is_expired = $date > $expiry_time;

        if($is_expired){
            $res = [
                "status" => false,
                "message" => "Authentication required"
            ];
            http_response_code(401);

            die(json_encode($res));
        }
    }else{
        $res = [
            "status" => false,
            "message" => "Authentication required"
        ];
        http_response_code(401);

        die(json_encode($res));
    }
}catch(Exception $e){
    $res = [
        "status" => false
    ];

    http_response_code(401);
    die(json_encode($res));
}