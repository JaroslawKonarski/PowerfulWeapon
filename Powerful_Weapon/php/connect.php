<?php
if (isset($_POST['submit'])) {
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'powerful_weapon';

    $conn = mysqli_connect($servername, $username, $password, $database);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $name = $_POST['name'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $sql = "INSERT INTO `filmusers` (name, lastname, email, message) VALUES ('$name', '$lastname', '$email', '$message')";

    if (mysqli_query($conn, $sql)) {
        echo "<script>window.location.href = 'greeting.php';</script>";
    } else {
        echo "<script>alert('There is an error. Please try again.');</script>". mysqli_error($conn);
    }

    mysqli_close($conn);
}
?>  