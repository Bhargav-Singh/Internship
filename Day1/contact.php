<?php

if ( isset( $_POST['submit'] ) ) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $msg = $_POST['msg'];
    
    $connect = mysqli_connect( 'localhost', 'root', '', 'mydb' );

    // Check connection
    if ( !$connect ) {
        die( "ERROR: Could not connect. " . mysqli_connect_error() );
    }

        $sql = "INSERT INTO Students (name, email, msg) VALUES ('$name', '$email', '$msg')";

        if ( $connect->query( $sql ) === TRUE ) {
            header( "Location: index.html" );
        } else {
            header( "Location: error.html" );
        }
    }
    mysqli_close( $connect );
?>
