
# ReadBooks

This project aims to develop a web application that uses the [Open Library](https://openlibrary.org/) service to encourage reading.

The application will allow users to explore books from different categories and learn more about the ones that interest them most.

## Demo
![](https://komarev.com/ghpvc/?username=MatteoGranata&color=e2b6ff&style=flat-square)

[CLICK HERE](https://readbookshelf.netlify.app/)

![App Screenshot](https://i.postimg.cc/V6YNbcP3/Screen-Homepage-Read-Books.png)
## functionality

The application will present the following features:

- Search by category: Users will be able to enter a book category (for example, "fantasy") into a text field similar to Google's.

- Book list retrieval: By clicking a search button, the application will contact the Open Library API for the specified category and retrieve a list of relevant books.

- Viewing titles and authors: The application will display a list of book titles along with their respective authors.

- Book description view: By clicking on a book, the application will retrieve the full description of the book from the Open Library API and display it to the user.
## Run Locally

Clone the project

```bash
  git clone https://github.com/MatteoGranata/ReadBooks.git
```

Go to the project directory

```bash
  cd ReadBooks
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Built with

**Client:** webpack 

**Server:** Node

**Libraries** [animejs](https://animejs.com/), [axios](https://www.npmjs.com/package/axios), [letterizejs](https://github.com/WojciechKrakowiak/letterize)




## Authors

- [@MatteoGranata](https://github.com/MatteoGranata)

