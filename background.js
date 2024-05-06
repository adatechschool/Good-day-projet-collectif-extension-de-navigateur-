
//fetch de l'Api unsplash pour recuperer une image
function getRandomImage() {
    // Remplacez "YOUR_ACCESS_KEY" par votre clé d'accès à l'API Unsplash
    var accessKey = 'Zn7WSdPyRExR6bWblabkMgVThpGRk57Jn9THLis9Hvg';
    var url = 'https://api.unsplash.com/photos/random?client_id=' + accessKey;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        var imageUrl = data.urls.regular;
        //pour mettre l'image en tant que background
        setBackgroundImage(imageUrl);
    })
    .catch(error => console.log('Erreur : ', error));
}

// définition de l'image en tant que background de la page
function setBackgroundImage(url) {
    document.body.style.backgroundImage = 'url(' + url + ')';
}


getRandomImage();
