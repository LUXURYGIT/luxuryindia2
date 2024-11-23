function emailsend() {
    let username = document.getElementById("name").value;
    let email = document.getElementById("emailid").value;
    let contact =  document.getElementById("contactno").value;
    let textmsg = document.getElementById("message").value;
    let  messagebody = "Name:" + username +
    "<br/> Email Id: " +  email +
    "<br/> Contact No:" + contact ;
    "<br/> Message :"  +  textmsg;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "luxurybag.india@gmail.com",
        Password : "C79FE4EF1B12E1D72485DA27901A416A5163",
        To : "luxurybag.india@gmail.com",
        From :"luxurybag.india@gmail.com",
        Subject : "Subject",
        Body : messagebody
        }).then(
      message => { 
        if(message == 'OK')
        {
            swal({
                title: "great",
                text: "sucessfully sent your request",
                icon: "success",
              });
        }
              else{
                swal({
                    title: "error!",
                    text: "please fill a form",
                    icon: "error",
                  });
              }
        }
    );
}