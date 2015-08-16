'use strict';
(function() {
 $(document).ready(initializeGrid);

  function makeGrid(size){
    var $grid = $('<div class="grid"></div>');
    var $row = $('<div class="row"></div>');
    for (var i = 1; i <= size; i++) {
      $row.append('<div class="col"></div>');
    }

    for (var i = 1; i <= size; i++) {
      $grid.append($row.clone());
    }
    $('.container').append($grid);
    adjustCol(size);
  }

  function adjustCol(val){
    $('.col').css({
      width: 100/val + '%',
      paddingBottom: 100/val + '%'
    });
  }

  function addHover () {
    $(".col").one('mouseover', function(){
      $(this).addClass('permahover');
    });
  }

  function initializeGrid(){
    makeGrid(50);
    addHover();
  }

  function submitButton (){
    var size = parseInt($('input[type="text"]').val());
    if (size > 0 && size <= 100 ){
      $('.container').html('');
      makeGrid(size);
      $(".col").removeClass('permahover');
      addHover();
    }
    else {
      alert('Size must be from 1-100!');
    }
  }

  $('input[value="Submit"]').click(submitButton);

  $("form input").keypress(function (e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
            console.log("enter works");
            submitButton();
            return false;
        } else {
            return true;
        }
    });

  $('input[value="Clear Screen"]').click(function() {
    $(".col").removeClass('permahover');
    addHover();
  });

}());