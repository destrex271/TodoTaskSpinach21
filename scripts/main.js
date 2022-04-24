
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

let data = localStorage.getItem("data") || []
if(typeof data == 'string') data = data.split(',')
let item = 0

list.addEventListener('click',(e)=>{
    const id = e.target.id
    console.log(e.target)
    if(id.includes("del-")){
        const y = parseInt(id.split("-")[1])
        data.splice(y,1)
        list.removeChild(document.getElementById(`${y}`))
        localStorage.setItem("data",data.toString())
    }
    else if(id.includes("upd-")){
        const y = parseInt(id.split("-")[1])
        const response = prompt("New Value for Item?")
        if(response.length != 0){
            data[parseInt(y)] = response
            localStorage.setItem("data",data.toString())
            document.location.reload()
        }else{
            alert("Empty Values not allowed!")
        }
    }
})

const addItem = (val) => {
    console.log(item)
    list.innerHTML += `<li class="item col-sm-4 col-md-4 col-lg-4 col-xl-4" id=${item}>
    <div class="">${val}</div>
    <div class="del">
        <button  class='w-25 p-0' style="background:transparent;border:none;display:inline;"><i class="fa fa-trash btn" id='del-${item}' style="color:red;font-size:25px;" aria-hidden="true"></i></button>
        <i class="fa fa-plus btn" style="color:yellow;font-size:25px;" id='upd-${item}' aria-hidden="true"></i>
    </div>
    </li>`
    item++;
}

if(data){
    data.forEach(elem => {
        if(elem.length != 0)
            addItem(elem)
    });
}

btn.addEventListener("click",e=>{
    e.preventDefault()
    val = field.value
    data.push(val)
    addItem(val)
    field.value = ""
    localStorage.setItem("data",data.toString())
})