
function hasOneDayPassed() {
    const currentTime = new Date().getTime(); 
    const lastShownTime = localStorage.getItem('welcomeAlertTime'); 

    if (!lastShownTime) {
        return true;
    }
    
    const timeDifference = currentTime - lastShownTime;
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000; 

    return timeDifference > oneDayInMilliseconds;
}

if (hasOneDayPassed()) {
    window.onload = function () {
        Swal.fire({
            title: 'Welcome to my web site !',
            text: 'I\'m delighted to welcome you here.',
            timer: 3000,
            timerProgressBar: true,
            position: 'top',
            customClass: {
                popup: 'custom-swal-width custom-swal-height'
            }
        });

        localStorage.setItem('welcomeAlertShown', 'true');
        localStorage.setItem('welcomeAlertTime', new Date().getTime()); 
    };
}
   
