  $(document).ready(function() {
    // Initialize the slider
    $('#userSlider').on('input', function() {
      var sliderValue = parseInt($(this).val());

      // Determine which plan to highlight based on the slider value
      if (sliderValue >= 0 && sliderValue <= 10) {
        // Highlight Plan 1
        $('.pricing-table').removeClass('highlighted');
        $('.pricing-table:eq(0)').addClass('highlighted');
      } else if (sliderValue > 10 && sliderValue <= 20) {
        // Highlight Plan 2
        $('.pricing-table').removeClass('highlighted');
        $('.pricing-table:eq(1)').addClass('highlighted');
      } else {
        // Highlight Plan 3 (default)
        $('.pricing-table').removeClass('highlighted');
        $('.pricing-table:eq(2)').addClass('highlighted');
      }
    });
  });
  