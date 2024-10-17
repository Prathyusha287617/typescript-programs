import * as readline from 'readline';
import { Theater } from './problem';

const theater=new Theater(10);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function askForInputs(){
    console.log("\n Enter your selection \n 1.Display Seats \n 2.Book Seats \n 3.Cancel Seats \n 4.Exit");

    rl.question("Choose an option: ", (option) => {
        switch (option) {
          case '1':
            theater.displaySeats();
            askForInputs();
            break;
          case '2':
            rl.question("Enter seat numbers to book (comma-separated): ", (input) => {
              const seatsToBook = input.split(',').map(Number);
              console.log(theater.bookSeats(seatsToBook));
              askForInputs();
            });
            break;
          case '3':
            rl.question("Enter seat numbers to cancel (comma-separated): ", (input) => {
              const seatsToCancel = input.split(',').map(Number);
              console.log(theater.cancelSeats(seatsToCancel));
              askForInputs();
            });
            break;
          case '4':
            console.log("Exiting the application.");
            rl.close();
            break;
          default:
            console.log("Invalid option. Please try again.");
            askForInputs();
  }
});
}

askForInputs();

