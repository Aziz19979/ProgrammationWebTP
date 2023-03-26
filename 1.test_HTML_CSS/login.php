<?php
$username = $_POST["username"];
$password = $_POST["password"];
// Check if the user is authorized to log in
// ...

if ($username === "admin" && $password === "admin") {
    echo "success";
} else {
    echo "failure";
}


