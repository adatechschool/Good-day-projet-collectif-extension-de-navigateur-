// document.addEventListener('DOMContentLoaded', function () {
//     var blockBtn = document.getElementById('blockBtn');
//     var unblockBtn = document.getElementById('unblockBtn');
//     var blockedSitesList = document.getElementById('blockedSitesList');

//     blockBtn.addEventListener('click', function () {
//         var site = document.getElementById('site').value.trim();
//         if (site !== '') {
//             // Ajoutez votre logique pour bloquer le site ici
//             var listItem = document.createElement('li');
//             listItem.textContent = 'Bloqué : ' + site;
//             blockedSitesList.appendChild(listItem);
//         }
//     });

//     unblockBtn.addEventListener('click', function () {
//         var site = document.getElementById('unblockSite').value.trim();
//         if (site !== '') {
//             // Ajoutez votre logique pour débloquer le site ici
//             var listItem = document.createElement('li');
//             listItem.textContent = 'Débloqué : ' + site;
//             blockedSitesList.appendChild(listItem);
//         }
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    var blockBtn = document.getElementById('blockBtn');
    var unblockBtn = document.getElementById('unblockBtn');
    var blockedSitesList = document.getElementById('blockedSitesList');

    blockBtn.addEventListener('click', function () {
        var site = document.getElementById('site').value.trim();
        if (site !== '') {
            var listItem = document.createElement('li');
            listItem.textContent = 'Bloqué : ' + site;
            blockedSitesList.appendChild(listItem);
        }
    });

    unblockBtn.addEventListener('click', function () {
        var site = document.getElementById('unblockSite').value.trim();
        if (site !== '') {
            // Supprimer le site de la liste bloquée s'il existe
            var blockedSites = blockedSitesList.querySelectorAll('li');
            for (var i = 0; i < blockedSites.length; i++) {
                if (blockedSites[i].textContent.includes(site)) {
                    blockedSitesList.removeChild(blockedSites[i]);
                }
            }
        }
    });

    // Fonction pour vérifier si un site est bloqué
    function isBlocked(site) {
        var blockedSites = blockedSitesList.querySelectorAll('li');
        for (var i = 0; i < blockedSites.length; i++) {
            var blockedSite = blockedSites[i].textContent.split(':')[1].trim(); // Récupérer le site bloqué
            if (site.includes(blockedSite)) {
                return true;
            }
        }
        return false;
    }

    // Bloquer le site si nécessaire lorsqu'une nouvelle URL est chargée
    window.addEventListener('load', function () {
        var currentURL = window.location.href;
        if (isBlocked(currentURL)) {
            window.location.href = 'about:blank'; // rediriger vers une page blanche ou une page d'erreur
        }
    });

});