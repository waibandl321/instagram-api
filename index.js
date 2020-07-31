'use strict'
{
    let section = document.querySelector('section');

    let url = 'json/instagram.json';
    fetch(url).then(function(result) {
        return result.json();
    }).then(function(json) {
        console.log(json);
        displayResults(json);
    });
    

    function displayResults(json) {
        while(section.firstChild) {
            section.removeChild(section.firstChild);
        }

        let archives = json.data;
        console.log(archives.length);

        for(let i = 0; i < archives.length; i++) {

            console.log(archives[i]);

            let div = document.createElement('div');
            // let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let postDate = document.createElement('p');

            div.classList.add('item');
            // heading.textContent = archives[i].caption;
            link.href =archives[i].permalink;
            img.src = archives[i].media_url;
            postDate.textContent = archives[i].timestamp;
            console.log(postDate);

            section.appendChild(div);
            // div.appendChild(heading);
            div.appendChild(link);
            link.appendChild(img);
            div.appendChild(postDate);
        }
    }
}