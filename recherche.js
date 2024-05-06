document.getElementById( "googleSearch" ).addEventListener("click", function () {
    const query =document.getElementById("SearchBox").value;
    if (query)
    {
        const googleSearchUrl = `https://www.google.com/search?q=${ encodeURIComponent(query)}`;
        chrome.tabs.create( { url: googleSearchUrl });
    }
});

document.getElementById( "wikipediaSearch" ).addEventListener("click", function (){
    const query =document.getElementById("SearchBox").value;
    if (query)
    {
        const wikipediaSearchUrl = `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent ( query)}`;
        chrome.tabs.create( { url: wikipediaSearchUrl});
    }
});

document.getElementById("qwantSearch").addEventListener("click", function (){
    const query = document.getElementById("SearchBox").value;
    if (query) {
        const qwantSearchUrl = `https://www.qwant.com/?q=${encodeURIComponent(query)}`;
        chrome.tabs.create({ url: qwantSearchUrl });
    }
});
document.getElementById("ecosiaSearch").addEventListener("click", function (){
    const query = document.getElementById("SearchBox").value;
    if (query) {
        const ecosiaSearchUrl = `https://www.ecosia.org/search?q=${encodeURIComponent(query)}`;
        chrome.tabs.create({ url: ecosiaSearchUrl });
    }
});

document.getElementById("youcareSearch").addEventListener("click", function (){
    const query = document.getElementById("SearchBox").value;
    if (query) {
        const youcareSearchUrl = `https://www.youcare.world/all?q=${encodeURIComponent(query)}`;
        chrome.tabs.create({ url: youcareSearchUrl });
    }
});




