let request = new XMLHttpRequest()
let dataUrl = "https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json"
let data = undefined

request.open("get", dataUrl, true)
request.send()
request.onload = function(){
    data = JSON.parse(this.responseText).result.results

    for (i = 0; i < 8; i++){
        let stitle = data[i].stitle
        let picUrl = "https:" + data[i].file.split("https:")[1]

        let newItems = document.createElement("li")

        let picContainer = document.createElement("div")
        picContainer.setAttribute("class", "picContainer")

        let itemPic = document.createElement("img")
        itemPic.setAttribute("src", picUrl)

        let itemDesc = document.createElement("span")
        itemDesc.textContent = stitle

        let itemList = document.getElementById("itemList")

        itemList.appendChild(newItems)
        newItems.appendChild(picContainer)
        picContainer.appendChild(itemPic)
        newItems.appendChild(itemDesc)
    }
}

let current = 8
let maxItems = 8

function loadmore(){
    let count = Object.keys(data).length

    if (current + maxItems >= count){
        for (i = 0; i < count - current; i++){
            let stitle = data[i + current].stitle
            let picUrl = "https:" + data[i + current].file.split("https:")[1]

            let newItems = document.createElement("li")

            let picContainer = document.createElement("div")
            picContainer.setAttribute("class", "picContainer")

            let itemPic = document.createElement("img")
            itemPic.setAttribute("src", picUrl)

            let itemDesc = document.createElement("span")
            itemDesc.textContent = stitle

            let itemList = document.getElementById("itemList")

            itemList.appendChild(newItems)
            newItems.appendChild(picContainer)
            picContainer.appendChild(itemPic)
            newItems.appendChild(itemDesc)
        }

        let btn = document.getElementById("loadmore")
        btn.style.display = "none"
    }

    else if (current + maxItems < count){
        for (i = 0; i < maxItems; i++){
            let stitle = data[i + current].stitle
            let picUrl = "https:" + data[i + current].file.split("https:")[1]

            let newItems = document.createElement("li")

            let picContainer = document.createElement("div")
            picContainer.setAttribute("class", "picContainer")

            let itemPic = document.createElement("img")
            itemPic.setAttribute("src", picUrl)

            let itemDesc = document.createElement("span")
            itemDesc.textContent = stitle

            let itemList = document.getElementById("itemList")

            itemList.appendChild(newItems)
            newItems.appendChild(picContainer)
            picContainer.appendChild(itemPic)
            newItems.appendChild(itemDesc)
        }
    }
    current += 8
}

