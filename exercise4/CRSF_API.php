<?php
session_start(); // Démarre la session pour stocker le jeton CSRF
include('connectdb.php');
header("Access-Control-Allow-Origin: *");

$mysqli = new mysqli($servername, $username, $password, $dbname);

if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli->connect_error;
    exit();
}

$email = $_GET['email'];

if(isset($email)){

    // Vérifier si le jeton CSRF est valide
    if (!isset($_SESSION['csrf_token']) || $_GET['csrf_token'] !== $_SESSION['csrf_token']) {
        die("Erreur : jeton CSRF invalide !");
    }

    $sql = "SELECT email FROM tp4 WHERE email = '$email'";

    $resultat = mysqli_query($mysqli, $sql);

    // Vérifier si la requête a réussi
    if (mysqli_num_rows($resultat) > 0) {
        // Parcourir les résultats de la requête
        while($row = mysqli_fetch_assoc($resultat)) {
            echo '2';
        }
    } else {
        $sql = "INSERT INTO tp4(email) VALUES (?)";
        $stmt = $mysqli->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        echo '1';
    }
    // Fermer la connexion à la base de données MySQL
    mysqli_close($mysqli);
}
else
{
    echo '0';
}

// Générer un nouveau jeton CSRF pour la prochaine requête
$_SESSION['csrf_token'] = bin2hex(random_bytes(32));
?>