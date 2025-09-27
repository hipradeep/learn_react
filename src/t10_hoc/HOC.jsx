import React from "react";

// Mock Database
const DB = {
  books: [
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "1984", author: "George Orwell" },
    { title: "Clean Code", author: "Robert C. Martin" }
  ],
  songs: [
    { title: "Bohemian Rhapsody", album: "A Night at the Opera" },
    { title: "Imagine", album: "Imagine" },
    { title: "Stairway to Heaven", album: "Led Zeppelin IV" }
  ]
};

// ---------------- Base Components ----------------
function Books({ books }) {
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book, i) => (
          <li key={i}>
            Title: {book.title} / Author: {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Songs({ songs }) {
  return (
    <div>
      <h1>Songs</h1>
      <ul>
        {songs.map((song, i) => (
          <li key={i}>
            Title: {song.title} / Album: {song.album}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------------- HOC ----------------
const withHOC = (Component, getData) => {
  return (props) => (
    <div className={props.theme}>
      <Component {...getData(props.name)} />
    </div>
  );
};


// ---------------- HOC-Wrapped Components ----------------
const BooksHOC = withHOC(Books, (name) => ({ [name]: DB[name] }));
const SongsHOC = withHOC(Songs, (name) => ({ [name]: DB[name] }));


// ---------------- Components ----------------
const BooksComponent = () => {
  return <BooksHOC name="books" theme="books-theme" />;
};

const SongsComponent = () => {
  return <SongsHOC name="songs" theme="songs-theme" />;
};

// ---------------- Combined Example Component ----------------
const HocExample = () => {
  return (
    <div>
      <BooksHOC name="books" theme="books-theme" />
      <SongsHOC name="songs" theme="songs-theme" />
    </div>
  );
};

export default HocExample;