<template>
  <div id="home">
    <navigation-comp></navigation-comp>
      <header class="masthead">
       <div class="container"> 
          <div class="intro-text">
            <div class="intro-heading">Julia and Thijs 
              <br> feiern ihre Hochzeit in </div>
              <div class="countdown, intro-lead-in">
                <Countdown deadline="June 19, 2021"></Countdown></div>
              <div class="intro-lead-in">Sagt uns jetzt ob ihr dabei seid.</div>
                <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#RSVP">RSVP</a>
              </div>
       </div> 
      </header>
    <!-- Countdown 
  <section class="page-section">
  <div class="row">
    <div class="col-lg-12 text-center">
      <h2 class="section-heading text-uppercase">Count Down</h2>
      <h3 class="section-subheading text-muted">Wir zählen die Tage bis zur großen Party mit euch!</h3>
  </div> 
    <div class="countdown">
    <Countdown deadline="June 19, 2021"></Countdown>
    </div>
</div>
</section> -->

  
<!-- Agenda -->
  <section class="page-section" id="agenda">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Agenda</h2>
          <h3 class="section-subheading text-muted">Die Höhepunkte des Hochzeitstages für den 19. Juni 2021</h3>
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
                  <h4 class="subheading">Freie Trauung im Park </h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Markus führt die Trauung unter freiem Himmel durch und gibt einen kleinen Einblick wie Thijs und Julia sich kennen und lieben gelernt haben.</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="img/about/2.jpg" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>15:00-16:00</h4>
                  <h4 class="subheading">Sektempfang</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Einen Tost auf das Ehepaar, Glückwünsche und eine kleine Erfirschung an diesem sonnigen Tag.</p>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="img/about/3.jpg" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>16:00-17:00</h4>
                  <h4 class="subheading">Anschneiden Hochzeitstorte</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Die Hochzeitstorte wird im Schlossgarten angeschnitten. Kaffee und Kuchen werden unter freiem Himmel gereicht.</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="img/about/4.jpg" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>18:30</h4>
                  <h4 class="subheading">Gruppenfoto</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Bitte versammelt euch alle pünktlich an der großen Treppe für ein gemeinsames Foto mit allen Gästen.</p>
                </div>
              </div>
            </li>
                      <li>
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="img/about/3.jpg" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>19:00</h4>
                  <h4 class="subheading">Abendessen</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Am Buffett könnt ihr euch selbst nach Lust und Laune bedienen und den Gaumen verwöhnen.</p>
                </div>
              </div>
            </li>
                      <li class="timeline-inverted">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="img/about/4.jpg" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>21:00-22:00</h4>
                  <h4 class="subheading">Hour of Schwoof</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Thijs und Julia's lieblings Lovesongs laden zum kuscheln und tanzen ein.</p>
                </div>
              </div>
            </li>
             <li>
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="img/about/3.jpg" alt="">
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>Ab 22:00</h4>
                  <h4 class="subheading">Disco</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Tanzen bis die Füße glühen. DJ Teffi trifft genau den Geschmack der Gäste. Let's Dance!</p>
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

 <!-- Hotel -->
    <section class="page-section" id="hotel">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Übernachten</h2>
          <h3 class="section-subheading text-muted"></h3>
        </div>
      </div>
      <div class="row text-center">
        <div class="col-md-4">
          <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
          <h4 class="service-heading">Shuttle nach Halle</h4>
          <p class="text-muted">Wer in Halle übernachten möchte, kann von unserem Shuttle Service gebrauch machen. Von 22:00-03:30 fährt euch unser Shuttle kostenlos in die Hallenser Innenstadt. </p>
        </div>
        <div class="col-md-4">
          <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
          </span>
          <h4 class="service-heading">Übernachtung im Schloss</h4>
          <p class="text-muted">Wer möchte kann direkt im Schloss Teutschenthal übernachte und am nächsten morgen mit uns gemeinsam Frühstücken. Das DZ kostet 100€ die Nacht. Buchung über Tele: 0345/1111111, Referenz: Hochzeit Pabst/Waanders.</p>
        </div>
        <div class="col-md-4">
          <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
          </span>
          <h4 class="service-heading">Jugendherberge</h4>
          <p class="text-muted">Wer etwas preiswerter übernachten möchte kann das in der Jugendherberge tun. Die Nacht im 4 Bett Zimmer kostet 50€. Weitere Informationen findet ihr auf www.judengherberge.de</p>
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
  
 <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4">
          <p> Julia 
          <br> &#9742; 0176-47339210</p>
        </div>
        <div class="col-md-4">
          <p> Thijs 
          <br> &#9742; XXXX-XXXXXX</p>
        </div>
        <div class="col-md-4">
          <p>Programmbeiträge bitte an:
           <br> Maria &#9742; 0176-47339210 
          <br> Yvonne &#9742; 0176-47339210</p>
        </div>
      </div>
    </div>
  </footer> 


    </div>
</template>

<script>
        import Navigation from './navigation.vue';
        import Countdown from 'vuejs-countdown'
        export default {
        name: 'home',
        components:{
            'navigation-comp': Navigation,
            Countdown 
            
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