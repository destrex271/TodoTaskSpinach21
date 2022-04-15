
const btn = document.querySelector(".button")
const field = document.querySelector(".textField")
const list = document.querySelector("#list")

console.log("Hello")

btn.addEventListener("click",e=>{
    e.preventDefault()
    val = field.value
    list.innerHTML += `<li class="item">
    <div class="hd">${val}</div>
    <div class="del">
        <button class="btn btn-del">
            <i class="fa fa-trash" style="color:red;font-size:25px;" aria-hidden="true"></i>
        </button>
        <button class="btn btn-upd">
            <i class="fa fa-plus " style="color:yellow;font-size:25px;" aria-hidden="true"></i>
        </button>
    </div>
    </li>`
    field.value = ""
})