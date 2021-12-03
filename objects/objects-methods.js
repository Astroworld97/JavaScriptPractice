//A method is an object property whose value is a function.

let restaurant = {
    nombre: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) { //method
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount += partySize
    },
    removeParty: function (partySize) {
        this.guestCount -= partySize
    }
}

//seatParty
//removeParty

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))



