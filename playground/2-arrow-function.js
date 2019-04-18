// const square = function(x) {
//   return x * x;
// };
const square = x => x * x;
console.log(square(3));

//importance of arrow
const event = {
  name: "birthday party",
  guestList: ["shivam", "aniket", "bb"],
  printGuestlist() {
    console.log("Guest lIst for " + this.name);
    this.guestList.forEach(guest => {
      console.log(guest + " is attending " + this.name);
    });
  }
};
event.printGuestlist();
