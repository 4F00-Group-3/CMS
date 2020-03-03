#!/usr/bin/php-cgi
<?php
/**
 * TO DO
 * integrate Babel and Axios to connect React to backend
 */
?>

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PHP| MySQL | React.js | Axios Example</title>
    <script src= "https://unpkg.com/react@16/umd/react.production.min.js"></script>
    <script src= "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>

    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>

    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

</head>
<body>
</body>
</html> -->

<!doctype html>
<!-- Matthew Alunni Assignment 3 5865647-->
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../../../favicon.ico">

    <title>Welcome</title>

    <!-- Bootstrap core CSS -->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <!-- Custom styles for this template -->
    <link href="CSS/index.css" rel="stylesheet">
  </head>

  <body class="text-center">



    <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">

      <!-- NAVBAR-->
      <nav class="site-header sticky-top py-1">
        <div class="container d-flex flex-column flex-md-row justify-content-between">
          <a class="navbar-brand" href="index.html">
            <img src="Images/Icon.PNG" width="30" height="30" alt="" style="border-radius: 25%; opacity: 0.8;">
          </a>
          <a class="py-2 d-none d-md-inline-block" href="product.php">Products</a>
          <a class="py-2 d-none d-md-inline-block" href="wishlist.php">Wishlist</a>
          <a class="py-2 d-none d-md-inline-block" href="login.php" id="LogIn">Log In</a>
          <a class="py-2 d-none d-md-inline-block" href="logout.php" id="LogOut">Log Out</a>
        </div>
      </nav>

      <main role="main" class="inner cover">
        <h1 class="cover-heading" style="margin-top: 15%">Welcome to M Company</h1>
        <p class="lead">Build the best product, cause no unnecessary harm, use business to inspire and implement solutions to the environmental crisis.</p>

      </main>

      <footer class="mastfoot mt-auto">
        <div class="inner">
          <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
        </div>
      </footer>
    </div>


    <!-- php -->
    <?php
      session_start();
      $logged = 0;

      if (isset($_SESSION['username']))  {
          if ($_SESSION['username'] == "username") {
            $logged = 1;
          }
     }
     ?>

    <!-- Bootstrap Optional JavaScript -->

    <script>
    //    localStorage.setItem("items", "<?php echo $myData; ?>");


 window.onload = funtion() {
   if (<?php echo $logged; ?> == 0) {
     //logged out
     document.getElementById("LogOut").style.display = "none";
     document.getElementById("LogOut").style.visibility = "hidden";
   }
   else {
     //logged in
     document.getElementById("LogIn").style.display = "none";
     document.getElementById("LogIn").style.visibility = "hidden";
   }

 }



    </script>

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery-slim.min.js"><\/script>')</script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootsytrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  </body>
</html>

