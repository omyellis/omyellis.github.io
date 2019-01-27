// Variabelen voor micro interacties op detailpagina's.
var likeButton = document.getElementById('iconlike');

var shareButton = document.getElementById('iconshare');

likeButton.addEventListener('click', function(){
    likeButton.src = "./img/buttons/like-on.png"
});

shareButton.addEventListener('click', function(){
   shareButton.src = "./img/buttons/share-on.png"
});
