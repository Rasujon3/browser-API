console.log("I am here");

// alert("Ma is coming!!");

const maComing = () => {
  alert("Ammu is coming,open the book");
};

const askPicnic = () => {
  const response = confirm("Are you going to picnic?");
  console.log(response);
  if (response == true) {
    alert("amk fee bkash kor");
  } else {
    console.log("DGM!! mor!!!");
  }
};

const askName = () => {
  const name = prompt("What is your name?");
  if (name) {
    console.log(name);
  } else {
    // console.log(name);
  }
};
