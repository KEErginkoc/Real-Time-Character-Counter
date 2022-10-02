const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingEl = document.getElementById("remaining")

textareaEl.addEventListener("keyup", ()=>{
    updateCounter()
})

updateCounter()

function updateCounter(){
    totalCounterEl.innerText = textareaEl.value.length;
    remainingEl.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}
