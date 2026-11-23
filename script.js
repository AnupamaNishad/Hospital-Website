// Janani Hospital - All Functions
function bookAppointment(event) {
    event.preventDefault();
    let name = document.getElementById("name");
    let phone = document.getElementById("phone");
    
    if(!name || !phone || name.value == "" || phone.value == ""){
        alert("Please fill Name and Mobile Number!");
        return;
    }
    alert("Thank You " + name.value + "! Your appointment at Janani Hospital is confirmed. We will call you on " + phone.value);
}

function sendMessage(event){
    event.preventDefault();
    alert("Message Sent Successfully! Team will contact you soon.");
}

console.log("Janani Hospital JS Loaded");