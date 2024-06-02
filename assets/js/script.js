$(document).ready(function() {
    // Submit Contact Form
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        // Form data
        var formData = $(this).serialize();
        // Submit form to getform.io endpoint
        $.ajax({
            url: 'https://getform.io/your-endpoint',
            method: 'POST',
            data: formData,
            success: function(response) {
                // Handle success
                console.log('Form submitted successfully!');
                // Close modal
                $('#contact-popup').modal('hide');
                // Reset form
                $('#contact-form')[0].reset();
            },
            error: function(xhr, status, error) {
                // Handle error
                console.error('Form submission error:', error);
            }
        });
    });

    $('.owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
});