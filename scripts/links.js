const baseURL = "https://eehatch.github.io/wdd230/";
const linksURL = "https://eehatch.github.io/wdd230/data/links.json";

const lists = document.querySelector("#links");

async function getLinks(){
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

getLinks();

const displayLinks = (lessons) => {
    lessons.forEach((weeks) => {
        let card = document.createElement('div');
        let week = document.createElement('a');
        let links = document.createElement( 'a' );

        week.textContent =  `Week ${weeks.lesson}: `; 
    });

    card.appendChild(week);
    card.appendChild(links);
    card.appendChild(card);
}