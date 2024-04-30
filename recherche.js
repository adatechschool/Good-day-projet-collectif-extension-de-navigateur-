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
