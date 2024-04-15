import axios from 'axios';
import anime from 'animejs/lib/anime.es.js';
import '../css/style.css'; // Assuming CSS file is in the same directory
import imgNotFound from '../img/imgNotFound.jpg';

const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');
const descriptionsDiv = document.getElementById('description'); // Assuming separate element for descriptions
const errorElement = document.getElementById('error')


//
//
//
//
//
//
//
//                      ADDED ANIMATION FOR INPUT
//
//
//
//
//
//
//
//
//

searchButton.addEventListener('click', async () => {

    const searchTerm = searchInput.value.toLowerCase().trim();

    const imgOnload = document.createElement("div")
    imgOnload.classList.add("loader")
    resultsDiv.appendChild(imgOnload);

    errorElement.textContent = ''

    try {
        imgOnload.style.display = 'block'

        const response = await axios.get(`https://openlibrary.org/subjects/${searchTerm}.json?limit=20`);
        displayResults(response.data.works);

        if (response.data.works.length == 0) {
            displayError("No results found, try again!");
        } else {
            resultsDiv.scrollIntoView({ behavior: "smooth" });
        }
    } catch (error) {
        console.error('Error fetching results:', error);
        displayError(error);

    } finally {
        imgOnload.style.display = 'none'
    }
});

function displayResults(works) {
    resultsDiv.innerHTML = ''; // Clear results before displaying new ones
    resultsDiv.classList.add('results')

    works.forEach(work => {
        const card = document.createElement('div');
        card.classList.add('card');
        const imgOnload = document.createElement("div")
        imgOnload.classList.add("img-loader")
        const cover = document.createElement('img');
        cover.classList.add('cover')
///        
///        
///        
///        
///           ADDED ANIMATION FOR CARD
///        
///        
///        
///        
        try {
            const coverID = work.cover_id;
            cover.onload = function () {
                imgOnload.style.display = 'none'
            }
            if (!coverID) {
                cover.src = imgNotFound
            } else {
                cover.src = `https://covers.openlibrary.org/b/id/${coverID}.jpg`;
            }
        } catch (err) {
            cover.src = imgNotFound; // Replace with appropriate default image path
            console.error('Image not found:', work.title);
        }
        card.appendChild(cover);
        card.appendChild(imgOnload);

        const title = document.createElement('h1');
        title.classList.add('title');
        title.textContent = work.title;
        card.appendChild(title);

        const authors = document.createElement('p');
        authors.classList.add('authors')
        authors.textContent = work.authors[0].name || 'Unknown Author'; // Handle missing author data
        card.appendChild(authors);

        card.addEventListener('click', async () => {
            const key = work.key.replace('/works/', '');
            console.log(work)

            try {

                const descriptionResponse = await axios.get(`https://openlibrary.org/works/${key}.json`);
                const description = descriptionResponse.data.description?.value || descriptionResponse.data.description || 'No description available.';

                descriptionsDiv.classList.add('description-div');
                descriptionsDiv.innerHTML = description;

                document.body.addEventListener('click', () => { // Clear description on click outside
                    descriptionsDiv.textContent = '';
                    descriptionsDiv.classList.remove(...descriptionsDiv.classList); // Remove all classes

                });
            } catch (error) {
                console.error('Error fetching description:', error);
                descriptionsDiv.textContent = ('Description unavailable.', error);
            }
        });

        resultsDiv.appendChild(card);
    });
}

function displayError(message) { // Added error display function
    errorElement.classList.add('error')
    errorElement.innerHTML = message;
    resultsDiv.classList.remove('results')
    resultsDiv.innerHTML = ''
    resultsDiv.appendChild(errorElement);
}


