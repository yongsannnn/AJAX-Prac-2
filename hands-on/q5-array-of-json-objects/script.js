let btn = document.querySelector("#load-users-btn");
btn.addEventListener('click', function () {
    axios.get("users.json").then(function (response) {
        let data = response.data
        let data1 = data.users

        let divElement = document.querySelector("#all-users")

        for (let n of data1) {
            divElement.innerHTML += `
    <p>${n.firstName}</p>
    <p>${n.lastName}</p>
    <p>${n.emailAddress}</p>`
        }
    })
})


let btn2 = document.querySelector(".search-id");
btn2.addEventListener("click", function(){
    axios.get("users.json").then(function(response){
        let data = response.data
        let data1 = data.users
        let search = document.querySelector(".input").value
        

    })
})