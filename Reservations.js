class Reservations{
    constructor(name,email,phoneNumber){
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.id = Reservations.lastId;
        Reservations.lastId++;
    }
}
Reservations.lastId = 0;
module.exports = Reservations;