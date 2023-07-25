

export default function CheckInputs() {
    

    let error = false;
    const root = document.querySelector("[data-checkout]")
    let inputs = root.querySelectorAll("[data-input]")
    $("input_alert").innerHTML = "";

    inputs.forEach((input, n) => {

        if (!input.value.length) {
            error = true;
            addError(input)
        } else {
            removeError(input)

        }
    });

    // // Fields error
    if (error) { 
        $("input_alert").innerHTML += "- All fields must be added</br>"; 
    } else { 
        document.querySelector("[data-confirmation]").classList.add("active")
    // setTimeout(()=>{
    //     document.querySelector("[data-fader]").classList.add("active")
    // },10)
        
    }


    //  //Email
    //  let emailInput = document.querySelector("[data-input='client-email']")
    //  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //  if (!emailInput.value.match(mailformat) ) {
    //     error = true;
    //     $("input_alert").innerHTML += "- Incorrect email format</br>";
    //     addError(emailInput)
    //  } else {
    //     removeError(emailInput)
    //  }



    function addError(element) {
        element.classList.add("error");
    }
    function removeError(element) {
        element.classList.remove("error");
    }

    //Document Element -----------------------------
    function $(e) {
        return document.getElementById(e);
    }
    function $$(e) {
        return document.getElementsByClassName(e);
    }
    function $$$(e) {
        return document.querySelectorAll([e]);
    }

    return (<></>)
}