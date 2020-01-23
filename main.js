// Variabelen voor micro interacties op detailpagina's.
var likeButton = document.getElementById('iconlike');
var likeActive = false

var shareButton = document.getElementById('iconshare');

var popUp = document.querySelector('.popup');

var buttonFacebook = document.getElementById('buttonfacebook')

likeButton.addEventListener('click', function(){
    if (likeActive === false) {
        likeButton.classList.add('liked');
      likeButton.src = "./img/buttons/like-on.png"
        likeActive = true
    } else if (likeActive === true) {
        likeButton.classList.remove('liked');
        likeButton.src = "./img/buttons/like-off.png"
        likeActive = false
    }

});

shareButton.addEventListener('click', function(){
    shareButton.classList.add('shared');
    popUp.classList.toggle('popupshow');
   shareButton.src = "./img/buttons/share-on.png"
});

buttonFacebook.addEventListener('click', function(){
    popUp.style.transform = 'translate(-50%, -300%)';
    popUp.style.opacity = '0';
})
