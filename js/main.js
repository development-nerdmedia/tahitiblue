window.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('header');
  var headerClass = 'hLTFFw';
  var prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;

  function handleScroll() {
    var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
    var isAtTop = currentScrollPos === 0;
    var isScrollingUp = prevScrollPos > currentScrollPos;
    var isScrollingDown = currentScrollPos > prevScrollPos + 3;

    if (isAtTop) {
      headerClass = 'hLTFFw';
    } else if (isScrollingUp) {
      headerClass = 'leoCdG';
    } else if (isScrollingDown) {
      headerClass = 'bVLcxx';
    }

    header.className = headerClass;
    prevScrollPos = currentScrollPos;
  }

  window.addEventListener('scroll', handleScroll);

  setTimeout(() => {
    AOS.init();
  }, 700);
});


setTimeout(() => {
  document.querySelector(".preloadContent").classList.add("remove")
}, 500);


MyApp = {
  fondoAnimado: {
    init: function () {
      var content = document.querySelector("section.foto .fondo");
      var contentImg = document.querySelector("section.foto .fondo img");
      var waveFooter = gsap.timeline({
        scrollTrigger: {
          //markers: true,
          trigger: content,
          start: '0% 100%',
          end: '100% 0',
          scrub: true,
        },
      });
      waveFooter.to(contentImg, { yPercent: +20 })
    }
  },
  sliderBeneficios: {
    init: function () {
      var swiper = new Swiper(".sliderBeneficios", {
        loop: true,
        autoplay: {
          delay: 3000,
        },
        speed: 1000,
        navigation: {
          nextEl: ".sliderBeneficios .swiper-button-next",
          prevEl: ".sliderBeneficios .swiper-button-prev",
        },
        pagination: {
          el: ".beneficios .swiper-pagination",
          clickable: true,
        },
      });
      swiper.on('init', function () {
        var currentIndex = swiper.activeIndex;
        var currentSlideContent = swiper.slides[currentIndex].querySelector('p').textContent;
        var slideContentElement = document.querySelector('.titulo-slider');
        slideContentElement.textContent = currentSlideContent;
      });
      swiper.on('slideChange', function () {
        // Obtener el índice del slide actual
        var currentIndex = swiper.activeIndex;

        // Obtener el contenido del elemento <p> dentro del slide actual
        var currentSlideContent = swiper.slides[currentIndex].querySelector('p').textContent;

        // Actualizar el contenido del elemento <h3>
        var slideContentElement = document.querySelector('.titulo-slider');
        slideContentElement.textContent = currentSlideContent;
      });
    }
  },
  sliderPlanos: {
    init: function () {
      var swiper2 = new Swiper(".sliderPlanos", {
        loop: true,
        autoplay: {
          delay: 3000,
        },
        speed: 1000,
        navigation: {
          nextEl: ".creditoPlanos .swiper-button-next",
          prevEl: ".creditoPlanos .swiper-button-prev",
        },
        pagination: {
          el: ".creditoPlanos .swiper-pagination",
          clickable: true,
        },
      });
    }
  },
  sliderTestimonios: {
    init: function () {
      var swiper3 = new Swiper(".sliderTestimonios", {
        loop: true,
        autoplay: {
          delay: 3000,
        },
        speed: 1000,
        pagination: {
          el: "section.home .swiper-pagination",
          clickable: true,
        },
      });
    }
  },
  validateHome: {
    init: function () {
      $(document).on("wheel", "input[type=number]", function (e) { $(this).blur(); });

      var formespacioinput = document.querySelectorAll('section.home .form-input.required');
      var formespacioSelect = document.querySelectorAll('section.home .form-group select.required');
      var formespaciocheck = document.querySelectorAll("section.home .checkbox-box input[type='checkbox']");

      function validateInput(e) {
        for (let y = 0; y < formespacioinput.length; y++) {
          if (!formespacioinput[y].value) {
            formespacioinput[y].closest('.form-group').classList.add("error");
            e.preventDefault();
          } else {
            formespacioinput[y].closest('.form-group').classList.remove("error");
          }
        }
      }

      function validateSelect(e) {
        for (let i = 0; i < formespacioSelect.length; i++) {
          const element = formespacioSelect[i].value;
          if (element == "") {
            formespacioSelect[i].closest('.form-group').classList.add("error");
          } else {
            formespacioSelect[i].closest('.form-group').classList.remove("error");
          }
        }
      }

      function validateInputCorreo(e) {
        var inputCorreo = document.querySelector('section.home input[type=mail]');
        var valueCorreo = inputCorreo.value;
        if (valueCorreo.includes("@") && (valueCorreo.includes(".com") || valueCorreo.includes(".pe") || valueCorreo.includes(".gob") || valueCorreo.includes(".net") || valueCorreo.includes(".org") || valueCorreo.includes(".edu") || valueCorreo.includes(".gov") || valueCorreo.includes(".mil"))) {
          inputCorreo.closest('.form-group').classList.remove("error");
        } else {
          inputCorreo.closest('.form-group').classList.add("error");
          e.preventDefault();
        }
      }

      if ($('section.home').length > 0) {
        const checkbox = document.querySelector('section.home #politicas');
        const label = document.querySelector('section.home .labelPoliticas');

        checkbox.addEventListener('change', function () {
          if (this.checked) {
            label.classList.add('activo');
          } else {
            label.classList.remove('activo');
          }
        });
      }

      function validateCheck(e) {
        for (let i = 0; i < formespaciocheck.length; i++) {
          if (formespaciocheck[i].checked) {
            formespaciocheck[i].closest('.checkbox-box').classList.remove("error");
          } else {
            formespaciocheck[i].closest('.checkbox-box').classList.add("error");
            e.preventDefault();
          }
        }
      }

      document.addEventListener("click", function (e) {
        if (e.target.closest("section.home form button")) {
          validateInput(e)
          validateInputCorreo(e)
          validateSelect(e)
          validateCheck(e)
        }
        if (e.target.closest("section.home form select")) {
          e.target.closest('.form-group').classList.toggle("active");
        }
        else {
          document.querySelector("section.home form select").closest('.form-group').classList.remove("active")
        }
      })


      
      const formHome = document.querySelector('#formularioHome');
      formHome.addEventListener('submit', function (event) {
        event.preventDefault();

        var task_tahitipe = "inserta_leads";
        var fname_tahitipe = document.querySelector('#formularioHome input[name="name"]').value.replace(/ /g, '%20');
        var lname_tahitipe = "";
        var phones_tahitipe = document.querySelector('#formularioHome input[name="phone"]').value.replace(/ /g, '%20');
        var address_tahitipe = "";
        var email_tahitipe = document.querySelector('#formularioHome input[name="email"]').value.replace(/ /g, '%20');
        var observation_tahitipe = "";
        var horario_tahitipe = document.querySelector('#formularioHome select[name="horario"]').value.replace(/ /g, '%20');

        var url_tahitipe = 'https://lotes.tahitiblue.pe/intranet/api_leads.php?task=' + task_tahitipe + '&fname=' + fname_tahitipe + 
        '&lname=' + lname_tahitipe + '&phones=' + phones_tahitipe + '&email=' + email_tahitipe + '&origen=Pagina_Web&address=' + address_tahitipe + 
        '&observation=' + observation_tahitipe + '&horario_disponible=' + horario_tahitipe;

        var xhr_tahitipe = new XMLHttpRequest();
        xhr_tahitipe.open('POST', url_tahitipe, true);

        xhr_tahitipe.onload = function () {
          if (xhr_tahitipe.status === 200) {
            var response_tahitipe = xhr_tahitipe.responseText;
            console.log(response_tahitipe);
            window.location.href = "/contacto-gracias.html";
          } else {
            window.location.href = "/contacto-gracias.html";
          }
        };
        formHome.submit();
        xhr_tahitipe.send();
      })
    }
  },
  validateContacto: {
    init: function () {
      //$(document).on("wheel", "input[type=number]", function (e) { $(this).blur(); });

      var formespacioinput = document.querySelectorAll('section.contacto .form-input.required');
      var formespacioSelect = document.querySelectorAll('section.contacto .form-group select.required');
      var formespaciocheck = document.querySelectorAll("section.contacto .checkbox-box input[type='checkbox']");
      const checkbox2 = document.querySelector('section.contacto #politicas2');
      const label2 = document.querySelector('section.contacto .labelPoliticas2');

      function validateInput(e) {
        for (let y = 0; y < formespacioinput.length; y++) {
          if (!formespacioinput[y].value) {
            formespacioinput[y].closest('.form-group').classList.add("error");
            e.preventDefault();
          } else {
            formespacioinput[y].closest('.form-group').classList.remove("error");
          }
        }
      }

      function validateSelect(e) {
        for (let i = 0; i < formespacioSelect.length; i++) {
          const element = formespacioSelect[i].value;
          if (element == "") {
            formespacioSelect[i].closest('.form-group').classList.add("error");
          } else {
            formespacioSelect[i].closest('.form-group').classList.remove("error");
          }
        }
      }

      function validateInputCorreo(e) {
        var inputCorreo = document.querySelector('section.contacto input[type=mail]');
        var valueCorreo = inputCorreo.value;
        if (valueCorreo.includes("@") && (valueCorreo.includes(".com") || valueCorreo.includes(".pe") || valueCorreo.includes(".gob") || valueCorreo.includes(".net") || valueCorreo.includes(".org") || valueCorreo.includes(".edu") || valueCorreo.includes(".gov") || valueCorreo.includes(".mil"))) {
          inputCorreo.closest('.form-group').classList.remove("error");
        } else {
          inputCorreo.closest('.form-group').classList.add("error");
          e.preventDefault();
        }
      }

      function validateCheck(e) {
        for (let i = 0; i < formespaciocheck.length; i++) {
          if (formespaciocheck[i].checked) {
            formespaciocheck[i].closest('.checkbox-box').classList.remove("error");
          } else {
            formespaciocheck[i].closest('.checkbox-box').classList.add("error");
            e.preventDefault();
          }
        }
      }

      document.addEventListener("click", function (e) {
        if (e.target.closest("section.contacto form button")) {
          validateInput(e)
          validateInputCorreo(e)
          validateSelect(e)
          validateCheck(e)
        }
        if (e.target.closest("section.contacto form select")) {
          e.target.closest('.form-group').classList.toggle("active");
        } else {
          document.querySelector("section.contacto form select").closest('.form-group').classList.remove("active")
        }
      })

      const formContact = document.querySelector('#formularioContact');
      formContact.addEventListener('submit', function (event) {
        event.preventDefault();

        var task_tahitipe = "inserta_leads";
        var fname_tahitipe = document.querySelector('#formularioContact input[name="name"]').value.replace(/ /g, '%20');
        var lname_tahitipe = "";
        var phones_tahitipe = document.querySelector('#formularioContact input[name="phone"]').value.replace(/ /g, '%20');
        var address_tahitipe = "";
        var email_tahitipe = document.querySelector('#formularioContact input[name="email"]').value.replace(/ /g, '%20');
        var observation_tahitipe = "";
        var horario_tahitipe = document.querySelector('#formularioContact select[name="horario"]').value.replace(/ /g, '%20');

        var url_tahitipe = 'https://lotes.tahitiblue.pe/intranet/api_leads.php?task=' + task_tahitipe + '&fname=' + fname_tahitipe + '&lname=' + lname_tahitipe + '&phones=' + phones_tahitipe + '&email=' + email_tahitipe + '&origen=Pagina_Web&address=' + address_tahitipe + '&observation=' + observation_tahitipe + '&horario_disponible=' + horario_tahitipe;

        var xhr_tahitipe = new XMLHttpRequest();
        xhr_tahitipe.open('POST', url_tahitipe, true);

        xhr_tahitipe.onload = function () {
          if (xhr_tahitipe.status === 200) {
            var response_tahitipe = xhr_tahitipe.responseText;
            console.log(response_tahitipe);
            window.location.href = "/contacto-gracias.html";
          } else {
            //window.location.href = "/contacto-gracias.html";
            console.log("el formulario no se envio");
          }
        };
        formContact.submit();
        xhr_tahitipe.send();        

      })
    }
  },
  validateSuscripcion: {
    init: function () {

      function validateInputCorreo(e) {
        var inputCorreo = document.querySelector('section.suscribete input[type=mail]');
        var valueCorreo = inputCorreo.value;
        if (valueCorreo.includes("@") && valueCorreo.includes(".com")) {
          inputCorreo.closest('.form-group').classList.remove("error");
        } else {
          inputCorreo.closest('.form-group').classList.add("error");
          e.preventDefault();
        }
      }

      document.addEventListener("click", function (e) {
        if (e.target.closest("section.suscribete form button")) {
          validateInputCorreo(e)
        }
      })

    }
  },
  sliderVertical: {
    init: function () {

      window.addEventListener('load', checkResolution);
      window.addEventListener('resize', checkResolution);

      function checkResolution() {

        // Verificar si la resolución es mayor o igual a 1024px
        if (window.matchMedia("(min-width: 1025px)").matches) {



          var contentImg = document.querySelectorAll(".panel-img-frame");
          var contentText = document.querySelectorAll(".textoArea");

          contentImg.forEach(function (contentImg, i) {
            var controller = new ScrollMagic.Controller();
            var scene = new ScrollMagic.Scene({
              triggerElement: contentImg,
            })
              .setClassToggle(contentText[i], 'show')
              .addTo(controller)
            //.setClassRemove(contentText[i-1], 'show')
          })

          contentImg.forEach(function (contentImg2, y) {
            var controller2 = new ScrollMagic.Controller();
            var scene2 = new ScrollMagic.Scene({
              triggerElement: contentImg2,
            })
              .setClassToggle(contentText[y - 1], 'hidden')
              .addTo(controller2)
          })

        } else {

          var contentImg = document.querySelectorAll(".panel-img-frame");
          var contentText = document.querySelectorAll(".textoArea");
          let elementoMasAlto = null;
          let alturaMaxima = 0;

          contentText.forEach(function (elemento) {
            const altura = elemento.offsetHeight;
            if (altura > alturaMaxima) {
              alturaMaxima = altura;
              elementoMasAlto = elemento;
            }
          });

          const contenedorParrafos = document.querySelector("section.sliderVertical .content .contentText .campo .contentTextos");
          contenedorParrafos.style.height = alturaMaxima + "px";

          var contentSection = document.querySelector("section.sliderVertical .content .contentText");

          const alturaSection = contentSection.offsetHeight;

          const contenedorImagenes = document.querySelectorAll("section.sliderVertical .content .contentImg .panel-img-frame");
          contenedorImagenes.forEach(function (elementoimagen) {
            elementoimagen.style.top = alturaSection + "px";
            elementoimagen.style.height = `calc( 100vh - ${alturaSection}px )`
          });


          const contentText2 = document.querySelector("section.sliderVertical .content .contentText");
          //contentText2.style.marginBottom = `calc( 100vh - ${alturaSection}px )`


          contentImg.forEach(function (contentImg, i) {
            var controller = new ScrollMagic.Controller();
            var scene = new ScrollMagic.Scene({
              triggerElement: contentImg,
              triggerHook: 'onEnter',
              offset: '130%',
            })
              .setClassToggle(contentText[i], 'show')
              .addTo(controller)
            //.setClassRemove(contentText[i-1], 'show')
          })

          contentImg.forEach(function (contentImg2, y) {
            var controller2 = new ScrollMagic.Controller();
            var scene2 = new ScrollMagic.Scene({
              triggerElement: contentImg2,
              triggerHook: 'onEnter',
              offset: '130%',
            })
              .setClassToggle(contentText[y - 1], 'hidden')
              .addTo(controller2)
            //.setClassRemove(contentText[i-1], 'show')
          })

          const contenedorImagenes2 = document.querySelectorAll("section.sliderVertical .content .contentImg");

          var waveFooter2 = gsap.timeline({
            scrollTrigger: {
              //markers: true,
              trigger: contenedorImagenes2,
              start: '50% 50%',
              end: '100% 100%',
              scrub: true,
            }
          });
          waveFooter2.to(contentText2, { marginBottom: `calc( 100vh - ${alturaSection}px )`, });

        }
      }
    }
  },
  desplegable: {
    init: function () {
      document.addEventListener("click", function (e) {
        if (e.target.closest("footer .desplegable .title")) {
          e.target.closest('.desplegable').classList.toggle("open");
        }
      })
    }
  },
  menuMovil: {
    init: function () {
      document.addEventListener("click", function (e) {
        if (e.target.closest("header .navigation .menu ul li.menuMovil") || e.target.closest(".menuMovilPage .top button")) {
          document.querySelector('.menuMovilPage').classList.toggle("open");
          document.querySelector('body').classList.toggle("scrollhidden");
        }
      })
    }
  },
  historia: {
    init: function () {
      // Código corregido con la línea document.querySelector("section.historia .time .item .content").classList.add("open")
      const parentElements = document.querySelectorAll('section.historia .time .item .content');
      const clickableElements = document.querySelectorAll('section.historia .time .item .fecha');
      let openElement = document.querySelector("section.historia .time .item .content");

      openElement.classList.add("open");

      parentElements.forEach(parent => {
        parent.addEventListener('click', toggleOpenClass);
      });

      clickableElements.forEach(element => {
        element.addEventListener('click', toggleOpenClass);
      });

      function toggleOpenClass(event) {
        const currentParent = event.currentTarget.parentNode;
        const currentChild = currentParent.querySelector('section.historia .time .item .content');
        console.log(currentParent);

        // Si el elemento actual ya está abierto, cerrarlo
        if (currentChild.classList.contains('open')) {
          currentChild.classList.remove('open');
          openElement = null;
        } else {
          // Si el elemento actual no está abierto, cerrar el elemento abierto previamente (si existe) y abrir el actual
          if (openElement) {
            openElement.classList.remove('open');
          }
          currentChild.classList.add('open');
          openElement = currentChild;
        }
      }
    }
  },
  preguntas: {
    init: function () {
      const parentElements = document.querySelectorAll('section.preguntasPage .acordeon .item .title');
      let openElement = null;

      parentElements.forEach(parent => {
        parent.addEventListener('click', toggleOpenClass);
      });

      function toggleOpenClass(event) {
        const currentParent = event.currentTarget.parentNode;
        const currentChild = currentParent
        if (openElement && openElement !== currentChild) {
          openElement.classList.remove('open');
        }
        currentChild.classList.toggle('open');
        openElement = currentChild;
      }

      function handleMediaQuery(mediaQuery,) {
        var num = 1;
        if (mediaQuery.matches) {
          $('#cargarMasModulo').show();
          $('.modulo-mas').hide();
          $(`.modulo-mas`).slice(0, 3).show();
          $("#cargarMasModulo").click(function (e) {
            $(`.modulo-mas:hidden`).slice(0, 3).slideDown(0);
            if ($(`.modulo-mas:hidden`).length == 0) {
              $("#cargarMasModulo").attr("style", "display:none;");
            } else {
              $("#cargarMasModulo").attr("style", "display:block;");
            }
          });
        } else {
          $('.modulo-mas').show();
        }
      }

      var mediaQuery = window.matchMedia('(max-width: 1025px)');
      handleMediaQuery(mediaQuery);
      window.addEventListener('resize', function () {
        handleMediaQuery(mediaQuery);
      });
    }
  },
  documentos: {
    init: function () {
      function handleMediaQuery(mediaQuery,) {
        var num = 1;
        if (mediaQuery.matches) {
          $('#cargarMasModulo').show();
          $('.modulo-mas').hide();
          $(`.modulo-mas`).slice(0, 3).show();
          $("#cargarMasModulo").click(function (e) {
            $(`.modulo-mas:hidden`).slice(0, 3).slideDown(0);
            if ($(`.modulo-mas:hidden`).length == 0) {
              $("#cargarMasModulo").attr("style", "display:none;");
            } else {
              $("#cargarMasModulo").attr("style", "display:block;");
            }
          });
        } else {
          $('.modulo-mas').show();
        }
      }

      var mediaQuery = window.matchMedia('(max-width: 1025px)');
      handleMediaQuery(mediaQuery);
      window.addEventListener('resize', function () {
        handleMediaQuery(mediaQuery);
      });
    }
  },
  imgFollow: {
    init: function () {

      document.body.addEventListener("mousemove", e => {
        gsap.to(".seguir", {
          x: e.clientX,
          y: e.clientY,
          // stagger : 0,
        })
      })

      $("section.home .video video").hover(function () {
        $(".seguir").addClass("mostrar");
      }, function () {
        $(".seguir").removeClass("mostrar");
      }
      );

    }
  },
  relacionadas: {
    init: function () {
      var swiperRelacion = new Swiper(".sliderRelacion", {
        slidesPerView: 3.2,
        spaceBetween: 80,
        loop: true,
        autoplay: {
          delay: 3000,
        },
        speed: 1000,
        navigation: {
          nextEl: ".flechas .swiper-button-next",
          prevEl: ".flechas .swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          1501: {
            slidesPerView: 3.2,
            //spaceBetween: 80,
          },
          1441: {
            slidesPerView: 2.8,
            //spaceBetween: 40,
          },
          1281: {
            slidesPerView: 3,
            //spaceBetween: 40,
          },
          1094: {
            slidesPerView: 2.7,
            //spaceBetween: 35,
          },
          1025: {
            slidesPerView: 2.5,
            //spaceBetween: 35,
          },
          930: {
            slidesPerView: 2.3,
            //spaceBetween: 35,
          },
          800: {
            slidesPerView: 2,
            //spaceBetween: 35,
          },
          726: {
            slidesPerView: 1.8,
            //spaceBetween: 27,
          },
          590: {
            slidesPerView: 1.5,
            //spaceBetween: 27,
          },
          501: {
            slidesPerView: 1.35,
            //spaceBetween: 27,
          },
          477: {
            slidesPerView: 1.3,
            //spaceBetween: 27,
          },
          449: {
            slidesPerView: 1.2,
            spaceBetween: 27,
          },
          0: {
            slidesPerView: 1.15,
            //spaceBetween: 27,
          }
        },
      });
    }
  },
}


if ($('section.foto').length > 0) {
  MyApp.fondoAnimado.init();
}

if ($('section.noticiasRelacionadas').length > 0) {
  MyApp.relacionadas.init();
}

if ($('.sliderBeneficios').length > 0) {
  MyApp.sliderBeneficios.init();
}

if ($('.sliderPlanos').length > 0) {
  MyApp.sliderPlanos.init();
}

if ($('.sliderTestimonios').length > 0) {
  MyApp.sliderTestimonios.init();
}

if ($('section.home .formulario').length > 0) {
  MyApp.validateHome.init();
}

if ($('section.contacto .formulario').length > 0) {
  MyApp.validateContacto.init();
}

if ($('section.suscribete .formulario').length > 0) {
  MyApp.validateSuscripcion.init();
}

if ($('.sliderVertical').length > 0) {
  MyApp.sliderVertical.init();
}

if ($('footer .desplegable').length > 0) {
  MyApp.desplegable.init();
}

if ($('.menuMovilPage').length > 0) {
  MyApp.menuMovil.init();
}
if ($('section.historia').length > 0) {
  MyApp.historia.init();
}
if ($('section.preguntasPage .acordeon .item').length > 0) {
  MyApp.preguntas.init();
}

if ($('section.documentosPage').length > 0) {
  MyApp.documentos.init();
}

if ($('.iconoFollow').length > 0) {
  MyApp.imgFollow.init();
}
