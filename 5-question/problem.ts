//Design a typescript application for library management system , the system need to represent various entities bookname,authors and number of members

export class Author{
    constructor(
        public authorId:number,
        public name:string,
        public email:string
    ){}
}

export class Book{
    constructor(
        public bookId:number,
        public bookName:string,
        public authors:Author[],
        public noOfCopiesAvailable:number
    ){}
}

export class Member{
    constructor(
        public memberId:number,
        public memberName:string,
        public memberEmail:string,
        public borrowedBooks:Book[]=[]
    ){}

    borrowBook(book : Book):string{
        if(book.noOfCopiesAvailable>0){
            book.noOfCopiesAvailable--;
            this.borrowedBooks.push(book);
            return `${this.memberName} borrowed "${book.bookName}"`;
        }else{
            return `${book.bookName} is currently unavailable`;
        }
    }

    returnBook(book : Book):string{
        const index=this.borrowedBooks.indexOf(book);
        if(index>-1){
            book.noOfCopiesAvailable++;
            this.borrowedBooks.splice(index,1);
            return `${this.memberName} returned "${book.bookName}"`;
        }else {
            return `${this.memberName} did not borrow "${book.bookName}".`;
        }
    }
}
// library.ts (continued)

export class Library {
    private books: Book[] = [];
    private authors: Author[] = [];
    private members: Member[] = [];

    addAuthor(author: Author): void {
        this.authors.push(author);
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    addMember(member: Member): void {
        this.members.push(member);
    }

    listBooks(): void {
        console.log("Available Books:");
        this.books.forEach(book => {
            console.log(`Title: "${book.bookName}", Authors: ${book.authors.map(author => author.name).join(", ")}, Available Copies: ${book.noOfCopiesAvailable}`);
        });
    }

    listMembers(): void {
        console.log("Library Members:");
        this.members.forEach(member => {
            console.log(`Name: ${member.memberName}, Email: ${member.memberEmail}, Borrowed Books: ${member.borrowedBooks.map(b => b.bookName).join(", ")}`);
        });
    }
}
