import { Injectable } from '@nestjs/common';
import { find } from 'rxjs';

@Injectable()
export class LibraryService {
  private books = [ 
    {
      id: 1,
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
    },
    { 
      id: 2,
      title: 'Harry Potter and the Sorcerers Stone',
      author: 'J.K. Rowling',
    },
    { 
      id: 3,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
    },
  ];

  
    findAll() {
      return this.books;
    }
    findOne(id: number) {
      return this.books.find(book => book.id === id);
    }
    create(book) {
      const newBook = { 
        id: this.books.length + 1,
        ...book,
      };
      this.books.push(newBook); 
      return newBook;
      }

      update(id: number, book) {
        const index = this.books.findIndex(book => book.id === id);
        if (index >= 0) {
          this.books[index] = {
            id,
            ...book,
          };
          return this.books[index];
        }
        return null;
    }
    delete(id: number) {
      const index = this.books.findIndex(book => book.id === id);
      if (index >= 0) {
        this.books.splice(index, 1);
      }

  }
}
