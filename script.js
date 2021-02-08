

$(function() {
    var $elie = $("#myDIV"), degree = 0, timer;

    let time = Math.floor((Math.random() * 760) + 100);
    let rounds = 0;
    console.log(time);
    function rotate() {
        
        $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});  
        $elie.css({ WebkitTransform: 'all 1s ease-in-out'});  
        $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});                      
        timer = setTimeout(function() {
            if (time == rounds  ) {

            } else {
              ++rounds; 
            ++degree; rotate();  
            }
            
            
        },5);
    }
    
    $("#nv3").click(function() {
        clearTimeout(timer);
    }, function() {
        rotate();
    });
}); 