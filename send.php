<?php
$email = $_POST['email'];
$comment = $_POST['comment'];
$email = htmlspecialchars($email);
$comment = htmlspecialchars($comment);
$result = mail("su25n76@yandex.ru", "Заявка с сайта", "Email:".$email.". Comment: ".$comment ,"From: your portfolio. \r\n");