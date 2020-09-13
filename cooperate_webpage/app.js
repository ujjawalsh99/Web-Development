// Varying modal content
$('#staticBackdrop-video').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var recipient = button.data('whatever'); // Extract info from data-* attributes
  console.log(recipient);
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('Media Track ' + recipient);
  modal.find('.modal-body input').val(recipient);
})



// Reducing the size of text
var maxLength = 300;
	$(".show-read-more").each(function(){
		var myStr = $(this).text();
		if($.trim(myStr).length > maxLength){
			var newStr = myStr.substring(0, maxLength);
			var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
			$(this).empty().html(newStr);
			$(this).append(' <a href="javascript:void(0);" class="read-more">...   continue reading</a>');
			$(this).append('<span class="more-text">' + removedStr + '</span>');
		}
	});
	$(".read-more").click(function(){
		$(this).siblings(".more-text").contents().unwrap();
		$(this).remove();
	});


// Stop playing video in iframe when modal is closed
// For multiple modals with iframe videos.
// On modal close, it goes through all the iframe videos and resets them instead of resetting all of them to the first video.
$('#staticBackdrop-video').on('hidden.bs.modal', function(e) {
  var $iframes = $(e.target).find('iframe');
  $iframes.each(function(index, iframe){
  $(iframe).attr('src', $(iframe).attr('src'));
  });
})


// Pause/Stop the YouTube video while sliding next slide in model box
// This should stop all videos playing in all iframes on the page:
$('.carousel-control-prev').click(function() { 
	 $("iframe").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
});
});

$('.carousel-control-next').click(function() { 
	 $("iframe").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
});
});

