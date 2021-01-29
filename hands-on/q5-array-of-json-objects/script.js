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
        let search = document.querySelector(".input")
        console.log(search)
        for ( let d of data1){
            console.log(d)
            if (search.value == d.userId){
                console.log(search.value)
                document.querySelector("#result").innerHTML = `
                <p>First Name: "${d.firstName}"</p>
                <p>Last Name: "${d.lastName}"</p>
                `
            }
        }
    })
})