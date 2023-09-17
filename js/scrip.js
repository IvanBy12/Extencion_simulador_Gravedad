(document).ready(function () {

  $('.planeta').hover(
    function () {
      $(this).find('.info').removeClass('oculto');
    },
    function () {
      $(this).find('.info').addClass('oculto');
    }
  );
});

$(document).ready(function () {
  $('.planeta').click(function () {

    const informa = $(this).find(".info").text();

    console.log(informa)


    $('.informa').show();

    $('.planeta').not(this).hide();
    $('.fila').not($(this).parent()).hide();

    $(this).css({ "position": "absolute", "top": "50%", "left": "50%", "transform": "translate(-50%, -50%)" });

    if (informa == "Planeta desconocido") {
      console.log("holasdjasdkasd");
      datos();
    } else {
      animacion($(this).find(".gravedad").text())
    }





  });
});

function datos() {

  $("#agregarPlaneta").click(function () {

    const nuevoPlaneta = $("#nuevoPlaneta").val();
    const nuevaGravedad = parseFloat($("#nuevaGravedad").val());



    if (!isNaN(nuevaGravedad)){
    
     

      animacion(nuevaGravedad);
    }
  
  

  })


}

$(document).ready(function () {
  $("#refreshButton").click(function () {
    location.reload();
  });
})



function animacion(planeta) {
  const gravity = parseFloat(planeta);

  console.log(5 + gravity)
  console.log(planeta)
  if (planeta == 'tierra') {
    console.log("Holaaaaaaaaaaaskndsak")
  }

  const position = {
    x: $(".planeta").position().left,
    y: $(".planeta").position().top,
  };

  const velocity = {
    x: 0,
    y: 0,
  };


  const interval = setInterval(function () {
    velocity.y += gravity;

    if (position.y >= 2000) {
      clearInterval(interval);
    }

    position.y += velocity.y;
    $(".planeta").css("top", position.y + "px");
  }, 100);

  setTimeout(function () {
    velocity.y = -gravity;
  }, 100);

}
