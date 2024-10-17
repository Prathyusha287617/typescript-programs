"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theater = void 0;
var Theater = /** @class */ (function () {
    function Theater(totalseats) {
        this.totalseats = totalseats;
        this.seats = new Array(totalseats).fill(false);
    }
    //Mathod to display how many seats are available
    Theater.prototype.displaySeats = function () {
        console.log("Seats Avalability Information");
        this.seats.forEach(function (seat, index) {
            var status = seat ? "N" : "A";
            process.stdout.write("Seat ".concat(index + 1, " : ").concat(status, " \n"));
        });
        console.log();
    };
    //method to book seats
    Theater.prototype.bookSeats = function (seatNumbers) {
        for (var _i = 0, seatNumbers_1 = seatNumbers; _i < seatNumbers_1.length; _i++) {
            var seatNumber = seatNumbers_1[_i];
            if (seatNumber < 1 || seatNumber > this.totalseats) {
                return "Seat ".concat(seatNumber, " does not exists");
            }
            if (this.seats[seatNumber - 1]) {
                return "Seat ".concat(seatNumber, " is already occupied ");
            }
            this.seats[seatNumber - 1] = true;
        }
        return 'Seats booked successfully';
    };
    //method to cancel seats
    Theater.prototype.cancelSeats = function (seatNumbers) {
        for (var _i = 0, seatNumbers_2 = seatNumbers; _i < seatNumbers_2.length; _i++) {
            var seatNumber = seatNumbers_2[_i];
            if (seatNumber < 1 || seatNumber > this.totalseats) {
                return "Seat ".concat(seatNumber, " does not exist");
            }
            if (!this.seats[seatNumber - 1]) {
                return "Seat ".concat(seatNumber, " is not booked yet");
            }
            this.seats[seatNumber - 1] = false;
        }
        return 'Seat canceled successfully';
    };
    return Theater;
}());
exports.Theater = Theater;
