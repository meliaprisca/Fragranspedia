console.log("Selamat Anda berhasil menggunakan JavaScript pada Website")
//alert("Terimakasih.");
const firstName = prompt("Siapa nama depanmu?");
const lastName = prompt("Siapa nama belakangmu?");
 
const user = {
   name: {
       first: firstName,
       last: lastName,
   }
};

alert("Hallo " + user.name.first + " " + user.name.last + ", selamat datang di Fragranspedia");


//Manipulasi DOM
let spices = document.querySelector("#spices");
spices.setAttribute("src", "https://www.thespruceeats.com/thmb/WCYqdC9ReCS5nElSSoWY6kVkVUQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-554929245-5c0fddf44cedfd000132f91f.jpg");
