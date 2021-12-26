document.addEventListener('DOMContentLoaded', ()=> {
    let character = document.querySelector('.character');
    let bottom = 0;
    let gravity = 0.9;
    let isJumping = false;
    let isGoingLeft = false;
    let left = 0;
    let isGoingRight = false;    
    let leftTimerId;
    let rightTimerId;
    
    function jump() {
        if (isJumping) return;
        isJumping = true;                     
        let timerUpId = setInterval(function() {
            if (bottom > 250) {                
                clearInterval(timerUpId);
                let timerDownId = setInterval( function() {
                    if (bottom <= 0) {
                        clearInterval(timerDownId);
                        isJumping = false;
                        return;
                    }

                    bottom -= 5;
                    bottom = bottom * gravity;
                    character.style.bottom = bottom + 'px';
                }, 30)
            }            
            bottom += 30;
            character.style.bottom = bottom + 'px';
        }, 20)
        
    }

    function slideLeft() {
        if (isGoingLeft) return;
        isGoingRight = false;
        clearInterval(rightTimerId);
        isGoingLeft = true;
        leftTimerId = setInterval( function() {
            left -= 5;
            character.style.left = left + 'px';
        }, 20)
        
    }

    function slideRight() {
        if (isGoingRight) return;
        isGoingLeft = false;
        clearInterval(leftTimerId);
        isGoingRight = true;
        rightTimerId = setInterval( function() {
            left += 5;
            character.style.left = left + 'px';
        }, 20)
        
    }
    
    //assign functions to keycodes

    function control(e) {
        if (e.keyCode === 38) {
            jump();
        } else if (e.keyCode === 37) {
            slideLeft();
        } else if (e.keyCode === 39) {
            slideRight();
        }
    }
    document.addEventListener('keydown', control)
})