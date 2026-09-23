$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        event.preventDefault();
        submitForm();
    }
});

function submitForm(){
    var name = $("#name").val();
    var email = $("#email").val();
    var msg_subject = $("#subject").val() || "General Inquiry";
    var message = $("#message").val();

    if (typeof swal === "function") {
        swal("Message Sent!", "Thank you for contacting Phoenix Labels. We will get back to you shortly.", "success");
    } else {
        alert("Thank you for contacting Phoenix Labels. We will get back to you shortly.");
    }

    formSuccess();
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!");
}

function formError(){
    $("#contactForm").removeClass().addClass("shake animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    var msgClasses = valid ? "h3 text-center tada animated text-success" : "h3 text-center text-danger";
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}