const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username, password)

    if(authenticated){
        window.location.href = "logout.html"
    }else{
        alert("Its wrong please login !!")
    }
})


function authentication(username, password){
    if(username === "shanto" && password === "12345"){
        return true
    }else{
        return false
    }
}