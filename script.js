function handleSubmit() {
  let formdom = document.getElementById("formcontainer");
  formdom.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("formdom", formdom);

    let name = document.getElementById("name").value;
    let mail = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let property_value = document.getElementById("name")


    // console.log(name,mail,password);

    let value = {
        "Name":name,
        "Email":mail,
        "Password":password
    }

    console.log("value",value);

  });
}
