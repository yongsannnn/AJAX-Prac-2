let btn = document.querySelector("#load-image-btn");
let wordElement = document.querySelector("#text")
let imgElement = document.querySelector("#artwork")

btn.addEventListener("click", async function(){
    let response = await axios.get("artwork.json")
    wordElement.innerHTML = response.data.title;
    imgElement.innerHTML = `<img src="${response.data.image_url}"></img>`
})