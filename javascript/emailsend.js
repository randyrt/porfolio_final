(function(){
    emailjs.init("ZgI5TYSPYNESKjLKs"); 
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

   
    var submitButton = this.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    emailjs.sendForm('service_higxj2g', 'template_gnnec0j', this)
        .then(function() {
            Swal.fire({
                title: 'Success !',
                text: 'Message sent successfully.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            document.getElementById('contactPopup').style.display = 'none'; 
        }, function(error) {
            Swal.fire({
                title: 'Error !',
                text: 'Check the fields',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            console.log(error);
            
        }).finally(function () {
          setTimeout(function() {
                submitButton.disabled = false;
            }, 2000);
        });
});
