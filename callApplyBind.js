const indigo = {
  airline: "Indigo",
  flightCode: "6E",
  bookings: [],
  book: function (flightNum, pName) {
    console.log(
      `${pName} booked seat on ${this.airline} ${this.flightCode}-${flightNum}`
    );
    this.bookings.push({
      flight: `${this.flightCode}-${flightNum}`,
      passenger: pName,
    });
  },
};

indigo.book(123, "Bijay Singh");
console.log(indigo.bookings);

const airIndia = {
  airline: "Air India",
  flightCode: "AI",
  bookings: [],
};

const bookingFunc = indigo.book;
// bookingFunc(321, "Preetam");

// call, apply and bind
bookingFunc.call(airIndia, 321, "Preetam Singh");
console.log(airIndia.bookings);

// bookingFunc.apply(airIndia, [321, "Preetam Singh"]);
// console.log(airIndia.bookings);

// const copyFunc = bookingFunc.bind(airIndia, 321, "Preetam Singh");
// copyFunc();
// console.log(airIndia.bookings);
