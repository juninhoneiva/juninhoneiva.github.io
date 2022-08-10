<?php

if(isset($_POST['email']) && !empty($_POST['email'])){

$nome = addslashes($_POST['name']);
$email = addslashes($_POST['email']);
$mensagem = addslashes($_POST['message']);
$to = "contato@resendeneiva.com.br";
$subject = "Contato - Resende & Neiva";
$body = "Nome: ".$nome. "\r\n".
        "Email: ".$email. "\r\n".
        "Mensagem: ".$mensagem;
$header = "From:ailton@resendeneiva.com.br"."\r\n".    
            "Reply-To:".$email."\r\n".
            "Content-type: text/plain; charset=\"UTF-8\"" . "\r\n".
            "X=Mailer:PHP/".phpversion();
mail($to,$subject,$body,$header);

}
?>