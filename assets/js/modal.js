$(document).ready(function() {
    $('.video-card').click(function() {
      var $videoSrc = $(this).data("src");
      $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    });

    $('#videoModal').on('hide.bs.modal', function (e) {
      $("#video").attr('src', ''); // Stop video when closing the modal
    });
  });