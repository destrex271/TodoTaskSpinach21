
const btn = document.querySelector(".button")
const field = document.querySelector(".textField")
const list = document.querySelector("#list")

console.log("Hello")

// Api Call

const key = "UuB0Zfa5enuVL_JmlIHgZK8YwyMT1lUiPvg7tWxAumA"
const apiEndpoint = `https://api.unsplash.com//photos/random/?client_id=${key}`

fetch(apiEndpoint)
.then(async (response)=>{
    const res = await response.json()
    const y = res["urls"]["full"]
    document.body.style.backgroundImage = `url(${y})`
})
.catch(()=>console.log("Error"))

// ----------

const addItem = val => {
    list.innerHTML += `<li class="item col-sm-4 col-md-4 col-lg-4 col-xl-4">
    <div class="">${val}</div>
    <div class="del">
        <i class="fa fa-trash btn" style="color:red;font-size:25px;" aria-hidden="true"></i>
        <i class="fa fa-plus btn" style="color:yellow;font-size:25px;" aria-hidden="true"></i>
    </div>
    </li>`
}

let data = localStorage.getItem("data") || ""
if(data){
    const tl = data.split(",")
    console.log(tl)
    tl.forEach(elem => {
        addItem(elem)
    });
}

btn.addEventListener("click",e=>{
    e.preventDefault()
    val = field.value
    data += `,${val}`
    addItem(val)
    field.value = ""
    localStorage.setItem("data",data)
})