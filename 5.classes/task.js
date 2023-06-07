"use strict"

class PrintEditionItem {
    constructor (name, releaseDate, pagesCount)     {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
      
      fix() {
              this.state = this.state * 1.5;
      }
      
      set state(num)    {
          if (num < 0) {
              this._state = 0
          }   else if (num >= 100) {
              this._state = 100
          }   else (this._state = num)            
      }
  
      get state()  {
          return this._state;
      }  
  }
  
  class Magazine extends PrintEditionItem {
      constructor(name, releaseDate, pagesCount)    {
          super(name, releaseDate, pagesCount);
          this.type = "magazine";
      }
  }
  
  class Book extends PrintEditionItem {
      constructor(author, name, releaseDate, pagesCount)  {
          super(name, releaseDate, pagesCount);
          this.type = "book";
          this.author = author;
      }
  }
  
  class NovelBook extends Book    {
      constructor(author, name, releaseDate, pagesCount)  {
          super(author, name, releaseDate, pagesCount);
          this.type = "novel";
      }
  }
  
  class FantasticBook extends Book    {
      constructor(author, name, releaseDate, pagesCount)  {
          super(author, name, releaseDate, pagesCount);
          this.type = "fantastic";
      }
  }
  
  class DetectiveBook extends Book    {
      constructor(author, name, releaseDate, pagesCount)  {
          super(author, name, releaseDate, pagesCount);
          this.type = "detective";
      }
  }

  // часть 2

  class Library   {
    constructor(name)    {
        this.name = String(name);
        this.books = [];
    }

    addBook(book)   {
        if (book.state > 30)   {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
      let newBook = null;
      for (let elem in this.books)  {
        if (this.books[elem][type] === value)  {
          newBook = this.books[elem];
        }
      }
      return newBook;
    }
          
      giveBookByName(bookName)  {
      let indexDeleteBook = this.books.findIndex(type => type.name === bookName);
        if (indexDeleteBook > -1) {
        return this.books.splice(indexDeleteBook, 1)[0]; 
       } else {
        return indexDeleteBook = null;
          }
      }
}

const library = new Library("Библиотека имени Ленина");
library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3