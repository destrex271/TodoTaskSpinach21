
const btn = document.querySelector(".button")
const field = document.querySelector(".textField")
const list = document.querySelector("#list")

console.log("Hello")

btn.addEventListener("click",e=>{
    e.preventDefault()
    val = field.value
    list.innerHTML += `<li class="item col-sm-4 col-md-4 col-lg-4 col-xl-4">
    <div class="">${val}</div>
    <div class="del">
        <i class="fa fa-trash btn" style="color:red;font-size:25px;" aria-hidden="true"></i>
        <i class="fa fa-plus btn" style="color:yellow;font-size:25px;" aria-hidden="true"></i>
    </div>
    </li>`
    field.value = ""
})