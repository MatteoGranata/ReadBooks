import axios from 'axios';
import anime from 'animejs/lib/anime.es.js';
import Letterize from 'letterizejs';
import '../css/style.css';
import imgNotFound from '../img/imgNotFound.jpg';

const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');
const descriptionContainer = document.getElementById('descriptionContainer');
const descriptionsDiv = document.getElementById('description');
const errorElement = document.getElementById('error');

// animations for input
anime({
  targets: '.search-input',
  translateX: [100, 0],
  duration: 1200,
  opacity: [0, 1],
  delay: (el, i) => {
    return 300 + 100 * i;
  },
});
anime({
  targets: '.search-button',
  translateX: [100, 0],
  duration: 1200,
  opacity: [0, 1],
  delay: (el, i) => {
    return 300 + 100 * i;
  },
});

searchInput.addEventListener('keyup',(e) => {
  if (e.key === 'Enter') {
    sendInput()
  }
})

searchButton.addEventListener('click', () => {
  sendInput()
});

async function sendInput() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const imgOnload = document.createElement('div'); // loader for the results
  imgOnload.classList.add('loader');
  resultsDiv.appendChild(imgOnload);

  try {
    imgOnload.style.display = 'block';
    const response = await axios.get(`https://openlibrary.org/subjects/${searchTerm}.json?limit=20`);
    displayResults(response.data.works);
    console.log(response.data);
    if (response.data.works.length === 0) {
      displayError('No results found. Please try again.'); // error handler, 134 
    } else {
      resultsDiv.scrollIntoView({ behavior: 'smooth' });
    }
  } catch (error) {
    displayError('');
  } finally {
    imgOnload.style.display = 'none'; // remove loader if result = true
  }
}

function displayResults(works) {
  resultsDiv.innerHTML = '';
  resultsDiv.classList.add('results');

  works.forEach((work) => { // creates elements for each result for inserting images, titles, authors and descriptions
    const card = document.createElement('div');
    card.classList.add('card');
    const imgOnload = document.createElement('div'); // loader for image
    imgOnload.classList.add('img-loader');
    const cover = document.createElement('img');
    cover.classList.add('cover');

    anime({  // animation for card
      targets: '.card',
      translateX: [100, 0],
      duration: 1200,
      opacity: [0, 1],
      delay: (el, i) => {
        return 300 + 100 * i;
      },
    });

    try {
      const coverID = work.cover_id;
      cover.onload = function () {
        imgOnload.style.display = 'none';
      };
      if (!coverID) {
        cover.src = imgNotFound;
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
    authors.classList.add('authors');
    authors.textContent = work.authors[0].name || 'Unknown Author'; // Handle missing author data
    card.appendChild(authors);

    card.addEventListener('click', async () => { // creates the description when you click on the card
      const key = work.key.replace('/works/', '');
      console.log(work);
      try {
        const descriptionResponse = await axios.get(`https://openlibrary.org/works/${key}.json`);
        const description =             // check if the description is available
          descriptionResponse.data.description?.value ||
          descriptionResponse.data.description ||
          'No description available.';

        descriptionContainer.classList.add('container-description-div');
        descriptionsDiv.classList.add('description-div');
        descriptionsDiv.innerHTML = description;

        descriptionContainer.addEventListener('click', () => {
          // Clear description on click outside
          descriptionsDiv.textContent = '';
          descriptionContainer.classList.remove(...descriptionContainer.classList);
          descriptionsDiv.classList.remove(...descriptionsDiv.classList);
        })
      } catch (error) {
        console.error('Error fetching description:', error);
        descriptionsDiv.textContent = ('Description unavailable.', error);
      }
    });
    resultsDiv.appendChild(card);
  });
}

function displayError(message) {
  // Added error display function
  errorElement.classList.add('error');
  errorElement.innerHTML = message;
  resultsDiv.classList.remove('results');
  resultsDiv.innerHTML = '';
  resultsDiv.appendChild(errorElement);
}

// background animations

const containerTextAnimated = document.createElement('div');
const textRepeatBook = document.createElement('p');
const textRepeatFind = document.createElement('p');

containerTextAnimated.classList.add('container-animated');

textRepeatBook.textContent = 'BOOK-FIND-YOUR-NEXT-BOOK-FIND-YOUR-NEXT-BOOK-FIND';
textRepeatFind.textContent = 'FIND-BOOK-YOUR-BOOK-NEXT-FIND-BOOK-NEXT-FIND-BOOK';

for (var i = 0; i < 12; i++) {
  var copyBook = textRepeatBook.cloneNode(true);
  var copyFind = textRepeatFind.cloneNode(true);

  copyBook.classList.add('animate-me', 'lol');
  copyFind.classList.add('animate-me', 'lol');

  containerTextAnimated.appendChild(copyBook);
  containerTextAnimated.appendChild(copyFind);
  document.body.appendChild(containerTextAnimated);
}

const test = new Letterize({
  targets: '.animate-me',
});

const animation = anime.timeline({
  targets: test.listAll,
  delay: anime.stagger(150, {
    grid: [test.list[0].length, test.list.length],
    from: 'center',
  }),
  loop: true,
});

animation
  .add({
    scale: 0.8,
  })
  .add({
    rotate: '1turn',
  })
  .add({
    scale: 1,
  })
  .add({
    rotate: '1turn',
  });
