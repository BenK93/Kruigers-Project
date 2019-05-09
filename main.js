    var sourceSwap = function () {
        var $this = $(this);
        var newSource = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', newSource);
    }

   $(function() {
        $('img.xyz').hover(sourceSwap, sourceSwap);
   
       $('#header').click(function(){
           $(this).css("position", "relative");
      
        
        
       $('#header').animate( {
            left: 300,
            opacity: .5,
            'font-size': "22px",
            width: 300
        }, 2000, "easeInQuad", function(){ alert("all done");});
       
       });
       
   });






