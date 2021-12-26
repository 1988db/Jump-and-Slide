document.addEventListener('DOMContentLoaded', ()=> {
    let character = document.querySelector('.character');
    let bottom = 0;
    
    function jump() {
        let timerUpId = setInterval(function() {
            if (bottom > 250) {
                clearInterval(timerUpId);
                let timerDownId = setInterval( function() {
                    if (bottom < 0) {
                        clearInterval(timerDownId);
                    }

                    bottom -= 5;
                    character.style.bottom = bottom + 'px';
                }, 20)
            }

            bottom += 30;
            character.style.bottom = bottom + 'px';
        }, 20)
        
    }
    
    //assign functions to keycodes

    function control(e) {
        if (e.keyCode === 38) {
            jump();
        }
    }
    document.addEventListener('keydown', control)
})