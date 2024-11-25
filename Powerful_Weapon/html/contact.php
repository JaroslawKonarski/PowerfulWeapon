<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
</head>
<link rel="stylesheet" href="../CSS_Code/contact.css">
<script defer src="../javascript/contact.js"></script>
<link rel="stylesheet" href="https://use.typekit.net/sed6msj.css">
<body>

<?php include 'header.php' ?>
      

<div class="contact-container">
        <div class="contact-form">
            <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                <h2>Contact <span class="us">Us</span></h2>
                <div class="form-row-1">
                    <div class="form-inputs-1">
                        <label for="firstName">First Name:</label>
                        <input placeholder="James" type="text" id="name" name="name">
                    </div>
                    <div class="form-inputs-1">
                        <label for="lastName">Last Name:</label>
                        <input placeholder="Smith" type="text" id="lastname" name="lastname">
                    </div>
                </div>
                <div class="form-inputs">
                    <label for="email">E-mail:</label>
                    <input placeholder="james.smith@email.com" type="text" id="email" name="email">
                </div>
                <div class="form-inputs-message">
                    <label for="message">Message:</label>
                    <textarea placeholder="Hi there could you guys please help me out with..." id="message" name="message"></textarea>
                </div>
                <div class="form-button">
                    <button id="submit" type="submit" name="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>

<?php include 'footer.php' ?>

<?php include '../php/connect.php' ?>

</body>
