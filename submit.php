<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Construction du message e-mail
    $to = "soilihinizar04@gmail.com";
    $subject = "Nouveau message de contact";
    $email_body = "Nom/prénom: $name\n";
    $email_body .= "Adresse Email: $email\n";
    $email_body .= "Téléphone: $phone\n";
    $email_body .= "Message:\n$message";

    // Envoi de l'e-mail
    if (mail($to, $subject, $email_body)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Une erreur est survenue lors de l'envoi de votre message.";
    }
} else {
    // Redirection si le formulaire n'est pas soumis
    header("D:\Audiobooks\Mon_site_Web\contact.html");
}
?>