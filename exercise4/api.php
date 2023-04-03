<?php
include('connectdb.php');
header("Access-Control-Allow-Origin: *");
$servername = "localhost"; //set the servername
    $username = "root"; //set the server username
    $password = ""; // set the server password (you must put password here if your using live server)
    $dbname = "tp4"; // set the table name

    $mysqli = new mysqli($servername, $username, $password, $dbname);
    
    if ($mysqli->connect_errno) {
        echo "Failed to connect to MySQL: " . $mysqli->connect_error;
        exit();
      }

            $email = $_GET['email'];

            if(isset($email)){
                
                $sql = "SELECT email FROM tp4 WHERE email = '$email'";

                    $resultat = mysqli_query($mysqli, $sql);

                    // Vérifier si la requête a réussi
                    if (mysqli_num_rows($resultat) > 0) {
                        // Parcourir les résultats de la requête
                        while($row = mysqli_fetch_assoc($resultat)) {
                            echo '2';
                        }
                    } else {
                        $sql = "INSERT INTO `tp4`(`email`) VALUES (?)";
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

?>