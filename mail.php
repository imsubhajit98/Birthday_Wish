<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$mobile= $_POST['mobile'];
$subject = $_POST['subject'];

$to = "subhajit06521@gmail.com";
$txt ="Name: ".$name . "\r\nEmail: " . $email. "\r\nMobile: ".$mobile. "\r\nMessage: " .$message;
$headers = "From: ".$email . "\r\n" ;
// $headers = "From: ".$email . "\r\n" ;
// "CC: subhajit06521@gmail.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
    // echo 'alert("Great 🎉🎊 Thanks for contact me")';
    echo '<script type="text/javascript">';
    echo ' alert("Thanks for contact me")';  //not showing an alert box.
    echo '</script>';
   header('Location: index.html' . $_SERVER['HTTP_REFERER']);
}
//redirect
// header("Location:thank.html");
// header('Location: index.html' . $_SERVER['HTTP_REFERER']);

?>


echo("<script>window.location = 'index.html';</script>");