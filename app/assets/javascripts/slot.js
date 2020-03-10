$(function() {
    var sec = 100;

    var startSlot_1 = {};
    var slot_1_stop = false;
    var startSlot_2 = {};
    var startSlot_3 = {};
    

$(".btn-start").click(function () {
    var index_1 = 0;
      startSlot_1 = setInterval(function(){
          if(slot_1_stop == true){
              $('btn-start').prop('disabled', false) ;
          }
          index_1++;
          if (index_1 >= $('.reels').eq(0).children().length) {
            index_1 = 0;
          } 
        
          var mt = 120.5 * (index_1) * -1;
          $('.reels').eq(0).animate({
            marginTop: mt + "px"
            
          });
      }, sec);
      var index_2 = 0;
      startSlot_2 = setInterval(function(){
        
          if(slot_1_stop == true){
          $('btn-start').prop('disabled', false) ;
              }
          
          index_2++;
          if (index_2 >= $('.reels').eq(1).children().length) {
            index_2 = 0;
          } 
        
          var mt = 120.5 * (index_2) * -1;
          $('.reels').eq(1).animate({
            marginTop: mt + "px"
          });
      }, sec);
      var index_3 = 0;
      startSlot_3 = setInterval(function(){
          if(slot_1_stop == true){
              $('btn-start').prop('disabled', false) ;
          }
          index_3++;
          if (index_3 >= $(".reels").eq(2).children().length) {
            index_3 = 0;
          } 
        
          var mt = 130.5 * (index_3) * -1;
          $('.reels').eq(2).animate({
            marginTop: mt + "px"
          });
      }, sec);
      });
$(".btn-stop").click(function () {      
    var val = $(this).attr('data-val');
    if(val == 1) {
       clearInterval(startSlot_1);
       startSlot_1 = {};
       clearInterval(startSlot_2);
       startSlot_1 = {};
       clearInterval(startSlot_3);
       startSlot_1 = {};
       slot_1_stop = true;
       $('btn-stop').prop('disabled', false) ;
    }
  });
});