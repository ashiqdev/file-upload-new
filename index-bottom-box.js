$(document).ready(function () {
  $('.app-info-container').waypoint(
    function (direction) {
      $('.app-info-container').addClass(
        'animate__animated animate__backInLeft'
      );
    },
    {
      offset: '600px',
    }
  );
});
