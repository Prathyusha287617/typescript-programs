"use strict";
// main.ts
Object.defineProperty(exports, "__esModule", { value: true });
const problem_1 = require("./problem");
const library = new problem_1.Library();
// Create authors
const author1 = new problem_1.Author(1, "J.K. Rowling", "jkrowling@example.com");
const author2 = new problem_1.Author(2, "George R.R. Martin", "grrm@example.com");
// Add authors to the library
library.addAuthor(author1);
library.addAuthor(author2);
// Create books
const book1 = new problem_1.Book(1, "Harry Potter and the Sorcerer's Stone", [author1], 5);
const book2 = new problem_1.Book(2, "A Game of Thrones", [author2], 3);
// Add books to the library
library.addBook(book1);
library.addBook(book2);
// Create members
const member1 = new problem_1.Member(1, "Alice", "alice@example.com");
const member2 = new problem_1.Member(2, "Bob", "bob@example.com");
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
