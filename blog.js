const contactform=document.getElementById("contact-form");
contactform.addEventListener("submit",(event)=>{
    event.preventDefault();

    const Name=document.getElementById("Name").value;
    const Email=document.getElementById("Email").value;
    const number=document.getElementById("number").value;
    const textarea=document.getElementById("textarea").value;

    if(Name == "" || Email == "" || number == "" || textarea ==""){

        alert("something was wrong");
        return;

    }else{
        alert("Your response is submited. think you!");
        contactform.reset();
    }
})