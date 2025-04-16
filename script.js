document.getElementById("selectg-1").addEventListener('click', function() {
    const soundClick = document.getElementById('sound-click')
    soundClick.play();
})
document.getElementById("selectg-2").addEventListener('click', function() {
    const soundClick = document.getElementById('sound-click')
    soundClick.play();
})
document.getElementById("selectg-3").addEventListener('click', function() {
    const soundClick = document.getElementById('sound-click')
    soundClick.play();
})
document.getElementById("selectg-4").addEventListener('click', function() {
    const soundClick = document.getElementById('sound-click')
    soundClick.play();
})

function selectGame1(params) {
    setTimeout(() => {
        window.location.href="guess_the_music.html" 
    }, 2500);
    
}
function selectGame2(params) {
    setTimeout(() => {
        window.location.href="guess_t_character.html" 
    }, 2500);
    
}
function selectGame3(params) {
    setTimeout(() => {       
        window.location.href="guess_the_quote.html"
    }, 2500);
    
}
function selectGame4(params) {
    setTimeout(() => {
        window.location.href="guess_t_place.html" 
    }, 2500);
    
}

