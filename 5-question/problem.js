"use strict";
//Design a typescript application for library management system , the system need to represent various entities bookname,authors and number of members
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = exports.Member = exports.Book = exports.Author = void 0;
class Author {
    constructor(authorId, name, email) {
        this.authorId = authorId;
        this.name = name;
        this.email = email;
    }
}
exports.Author = Author;
class Book {
    constructor(bookId, bookName, authors, noOfCopiesAvailable) {
        this.bookId = bookId;
        this.bookName = bookName;
        this.authors = authors;
        this.noOfCopiesAvailable = noOfCopiesAvailable;
    }
}
exports.Book = Book;
class Member {
    constructor(memberId, memberName, memberEmail, borrowedBooks = []) {
        this.memberId = memberId;
        this.memberName = memberName;
        this.memberEmail = memberEmail;
        this.borrowedBooks = borrowedBooks;
    }
    borrowBook(book) {
        if (book.noOfCopiesAvailable > 0) {
            book.noOfCopiesAvailable--;
            this.borrowedBooks.push(book);
            return `${this.memberName} borrowed "${book.bookName}"`;
        }
        else {
            return `${book.bookName} is currently unavailable`;
        }
    }
    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index > -1) {
            book.noOfCopiesAvailable++;
            this.borrowedBooks.splice(index, 1);
            return `${this.memberName} returned "${book.bookName}"`;
        }
        else {
            return `${this.memberName} did not borrow "${book.bookName}".`;
        }
    }
}
exports.Member = Member;
// library.ts (continued)
class Library {
    constructor() {
        this.books = [];
        this.authors = [];
        this.members = [];
    }
    addAuthor(author) {
        this.authors.push(author);
    }
    addBook(book) {
        this.books.push(book);
    }
    addMember(member) {
        this.members.push(member);
    }
    listBooks() {
        console.log("Available Books:");
        this.books.forEach(book => {
            console.log(`Title: "${book.bookName}", Authors: ${book.authors.map(author => author.name).join(", ")}, Available Copies: ${book.noOfCopiesAvailable}`);
        });
    }
    listMembers() {
        console.log("Library Members:");
        this.members.forEach(member => {
            console.log(`Name: ${member.memberName}, Email: ${member.memberEmail}, Borrowed Books: ${member.borrowedBooks.map(b => b.bookName).join(", ")}`);
        });
    }
}
exports.Library = Library;
