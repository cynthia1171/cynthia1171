$(document).ready(function() {
  $(".p2").typed({
    strings: ["CYNTHIA", "FRONTEND", "DEVELOPER", "GAMER"],
    typeSpeed: 50,
    backSpeed: 10,
    backDelay: 2000,
    showCursor: false,
    loop: true
  });
  $(".rotator").smoove({
    offset: "40%"
  });

  /* funcion particles de slider */

  var particleNumber = 75;
  // number of particles (change it!)

  window.requestAnimFrame = (function() {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();
  // requesting the keyframes

  var c = document.getElementById("c");
  var ctx = c.getContext("2d");
  //context and id of canvas

  var w = window.innerWidth;
  var h = window.innerHeight;
  //width and height of canvas

  c.width = w;
  c.height = h;
  //setting the width and height for canvas

  var mouse = { x: w / 2, y: h / 2 };
  //mouse position

  document.addEventListener(
    "mousemove",
    function(e) {
      mouse.x = e.clientX || e.pageX;
      mouse.y = e.clientY || e.pageY;
    },
    false
  );
  //finding the mouse position

  //when clicked, the set-up function runs
  document.addEventListener(
    "mouseover",
    function() {
      var particleNumber = 75;

      var particles = [];
      // the particles storage

      for (i = 0; i < particleNumber; i++) {
        setTimeout(function() {
          particles.push(new createParticle());
        }, i * 10);
        // add a particle (not all at once - setTimeout(); )
      }
      // adding 55 particles

      function createParticle() {
        this.x = mouse.x;
        this.y = mouse.y;
        // the x and y

        this.vx = Math.random() * 8 - 4;
        this.vy = Math.random() * 8 - 4;
        // the velocities

        this.size = 20;
        // the size

        this.life = Math.random() * 100;
        // the life

        var g = "rgba(46, 204, 113,1.0)";
        var gg = "rgba(46, 204, 113,0.45)";
        var ggg = "rgba(46, 204, 113,0.2)";
        var array = [g, gg, ggg];
        this.color = array[Math.floor(Math.random() * 3)];
        // making 3 mandatory colors (change it and fork - i might use that!)

        this.reset = function() {
          // the reset

          this.x = mouse.x;
          this.y = mouse.y;
          this.vx = Math.random() * 8 - 4;
          this.vy = Math.random() * 8 - 4;
          this.size = 20;
          this.life = Math.random() * 33;
        };
      }

      function draw() {
        requestAnimFrame(draw);
        // requesting the keyframes

        ctx.fillStyle = "#262626";
        ctx.fillRect(0, 0, c.width, c.height);
        // the canvas

        for (t = 0; t < particles.length; t++) {
          var p = particles[t];
          // using the particle we want to use

          ctx.beginPath();
          ctx.fillStyle = p.color;
          ctx.fillRect(p.x, p.y, p.size, p.size);
          // making the particle

          p.x += p.vx;
          p.y += p.vy;
          // velocities

          p.life *= 0.9;
          p.size *= 0.89999;
          // making the life and size decrease

          if (p.life < 1) {
            p.reset();
          }
          // reseting the particles when dead
        }
      }

      draw();
      // calling draw
    },
    false
  );

  //                 //
  // background code //
  //                 //

  var particles = [];
  // the particles storage

  for (i = 0; i < particleNumber; i++) {
    setTimeout(function() {
      particles.push(new createParticle());
    }, i * 15);
    // add a particle (not all at once - setTimeout(); )
  }
  // adding 55 particles

  function createParticle() {
    this.x = Math.random() * c.width;
    this.y = Math.random() * c.height;
    // the x and y

    this.vx = Math.random() * 8 - 4;
    this.vy = Math.random() * 8 - 4;
    // the velocities

    this.size = 20;
    // the size

    this.life = Math.random() * 100;
    // the life

    var g = "rgba(46, 204, 113,1.0)";
    var gg = "rgba(46, 204, 113,0.45)";
    var ggg = "rgba(46, 204, 113,0.2)";
    var array = [g, gg, ggg];
    this.color = array[Math.floor(Math.random() * 3)];
    // making 3 mandatory colors (change it and fork - i might use that!)

    this.reset = function() {
      // the reset

      this.x = Math.random() * c.width;
      this.y = Math.random() * c.height;
      this.vx = Math.random() * 8 - 4;
      this.vy = Math.random() * 8 - 4;
      this.size = 20;
      this.life = Math.random() * 33;
    };
  }

  function draw() {
    requestAnimFrame(draw);
    // requesting the keyframes

    ctx.fillStyle = "#262626";
    ctx.fillRect(0, 0, c.width, c.height);
    // the canvas

    for (t = 0; t < particles.length; t++) {
      var p = particles[t];
      // using the particle we want to use

      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
      // making the particle

      p.x += p.vx;
      p.y += p.vy;
      // velocities

      p.life *= 0.9;
      p.size *= 0.89999;
      // making the life and size decrease

      if (p.life < 1) {
        p.reset();
      }
      // reseting the particles when dead
    }
  }

  draw();

  /* fin slider */

  $(".button-collapse").sideNav();
  $(".scrollspy").scrollSpy();

  $(".ir-arriba").click(function() {
    $("body, html").animate(
      {
        scrollTop: "0px"
      },
      500
    );
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $(".ir-arriba").slideDown(100);
    } else {
      $(".ir-arriba").slideUp(100);
    }
  });

  $(function() {
    // smooth scroll to div
    $("a[href*=#]:not([href=#])").click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top
            },
            1000
          );
          return false;
        }
      }
    });
  });
});
