<template>
    <div id="home">
        <navigation-comp></navigation-comp>
        <header class="masthead">
    <div class="container">
      <div class="intro-text">
        <div class="intro-heading text-uppercase">Julia and Thijs heiraten! </div>
        <div class="intro-lead-in">Sag uns jetzt bescheid ob du dabei bist</div>
        <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#RSVP">RSVP</a>
      </div>
    </div>
  </header>
    <!-- Countdown -->
  <section class="page-section">
  <div class="row">
    <div class="col-lg-12 text-center">
      <h2 class="section-heading text-uppercase">Count Down</h2>
      <h3 class="section-subheading text-muted">Wir zählen die Tage bis zur großen Party mit euch!</h3>
   
<div id="clockdiv">
  <div>
    <span class="days"></span>
    <div class="smalltext">Days</div>
  </div>
  <div>
    <span class="hours"></span>
    <div class="smalltext">Hours</div>
  </div>
  <div>
    <span class="minutes"></span>
    <div class="smalltext">Minutes</div>
  </div>
  <div>
    <span class="seconds"></span>
    <div class="smalltext">Seconds</div>
  </div>
</div>
</div>
</div>
</section>

  <!-- RSVP-->
  <section class="page-section" id="RSVP">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">RSVP</h2>
        </div>
      </div>
      <div class="iframe-container">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeKTEyaezqIknRfvffyXkogCLhyyqCWl7Nex0fnZMqPg2BLRg/viewform?embedded=true" width="640" height="517" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
    </div>
  </section>
<!-- Agenda -->
  <section class="page-section" id="agenda">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Agenda</h2>
          <h3 class="section-subheading text-muted">Die Höhepunkte des Hochzeitstages</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <ul class="timeline">
            <li>
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="img/about/1.jpg" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>14:00-15:00</h4>
                  <h4 class="subheading">Kaffee trinken</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Die Hochzeitstorte wird im Schlossgarten angeschnitten. Kaffee und Kuchen werden unter freiem Himmel gereicht.</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="img/about/2.jpg" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>March 2011</h4>
                  <h4 class="subheading">An Agency is Born</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="img/about/3.jpg" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>December 2012</h4>
                  <h4 class="subheading">Transition to Full Service</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="img/about/4.jpg" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>July 2014</h4>
                  <h4 class="subheading">Phase Two Expansion</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <h4>Be Part
                  <br>Of Our
                  <br>Story!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Location -->
  <section class="bg-light page-section" id="location" >
    <div class="container" id="locationdiv"> 
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Location</h2>
          <h3 class="section-subheading text-muted">Wir heiraten im schönen Schloss Teutschenthal</h3>
        </div>
      <div class="maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9947.393152820003!2d11.78997!3d51.44258!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x421e62eb41f4dbbd!2sHotel%20Schloss%20Teutschenthal!5e0!3m2!1sen!2sde!4v1582480161309!5m2!1sen!2sde" width="450" height="300"  style="float:right" frameborder="0" allowfullscreen=""></iframe>
      </div>              
      </div>
    </div>
  </section>
    </div>
</template>

<script>
        import Navigation from './navigation.vue';
        export default {
        name: 'home',
        components:{
            'navigation-comp': Navigation
        },
        data() {
            return {};
        }
    }
</script>

<style scoped>
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>