let btn = document.querySelector("#load-btn")

btn.addEventListener("click", async function(){
    let response = await axios.get("file1.txt")
    let response2 = await axios.get("file2.txt")
    let dataResponse = response.data
    let dataResponse2 = response2.data
    document.querySelector("#content").innerHTML = dataResponse + dataResponse2
    console.log(dataResponse,dataResponse2)
}) // end of eventlistener

// async function loadData(){
//         let response = await axios.get("file1.txt")
//         let response2 = await axios.get("file2.txt")
//         console.log(response.data,response2.data)
// }
// loadData()