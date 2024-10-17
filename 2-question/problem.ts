export class Theater{
    private seats :boolean[] ;
    private totalseats:number;

    constructor(totalseats:number){
        this.totalseats=totalseats;
        this.seats=new Array(totalseats).fill(false);
    }
    //Mathod to display how many seats are available
    displaySeats():void{
        console.log("Seats Avalability Information");
        this.seats.forEach((seat,index)=>{
            const status=seat? "N":"A";
            process.stdout.write(`Seat ${index+1} : ${status} \n`);
        });
        console.log();
    }
    //method to book seats
    bookSeats(seatNumbers:number[]):string{
        for(let seatNumber of seatNumbers){
            if(seatNumber < 1 || seatNumber > this.totalseats){
                return `Seat ${seatNumber} does not exists`;
            }
            if(this.seats[seatNumber-1]){
                return `Seat ${seatNumber} is already occupied `;
            }
            this.seats[seatNumber-1]=true;
        }
        return 'Seats booked successfully'
    }
    //method to cancel seats
    cancelSeats(seatNumbers:number[]):string{
        for(let seatNumber of seatNumbers){
            if(seatNumber<1 || seatNumber>this.totalseats){
                return `Seat ${seatNumber} does not exist`;
            }
            if(!this.seats[seatNumber-1]){
                return `Seat ${seatNumber} is not booked yet`;
            }
            this.seats[seatNumber-1]=false;
        }
        return 'Seat canceled successfully';
    }
}