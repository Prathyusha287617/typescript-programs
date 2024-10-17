// main.ts

import { Library, Author, Book, Member } from './problem';

const library = new Library();

// Create authors
const author1 = new Author(1, "J.K. Rowling", "jkrowling@example.com");
const author2 = new Author(2, "George R.R. Martin", "grrm@example.com");

// Add authors to the library
library.addAuthor(author1);
library.addAuthor(author2);

// Create books
const book1 = new Book(1, "Harry Potter and the Sorcerer's Stone", [author1], 5);
const book2 = new Book(2, "A Game of Thrones", [author2], 3);

// Add books to the library
library.addBook(book1);
library.addBook(book2);

// Create members
const member1 = new Member(1, "Alice", "alice@example.com");
const member2 = new Member(2, "Bob", "bob@example.com");

// Add members to the library
library.addMember(member1);
library.addMember(member2);

// List books and members
library.listBooks();
library.listMembers();

// Members borrow and return books
console.log(member1.borrowBook(book1));
console.log(member2.borrowBook(book2));
library.listMembers();

console.log(member1.returnBook(book1));
library.listMembers();
