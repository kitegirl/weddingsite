<template>
  <div id="page-top">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
   <link rel="shortcut icon" type="image/jpg" href="/favi2.jpg"/>


  <title>Home</title>

  <!-- Bootstrap core CSS -->
 <link href="assets/css/bootstrap.css" rel="stylesheet">

  <!-- Custom fonts for this template -->
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

  <!-- Custom styles for this template -->
<link href="assets/css/agency.min.css" rel="stylesheet">  



  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">Home</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#agenda">Agenda</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#location">Location</a>
          </li> 
           <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#hotel">Hotel</a>
          </li> 
           <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#RSVP">RSVP</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#kontakt">Kontakt</a>
          </li>
         <li class="nav-item">
           <router-link class="nav-link" to="/logout">Logout</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>

</template>

<script>
export default {
        name: 'App'
    }
</script>

<style>
.nav-item {
color: #666633;
}
</style>

