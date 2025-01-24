// 'use strict';

const table = document.querySelector("table")
const input = document.querySelector("input")
const dark = document.querySelector("#btn")
const send = document.querySelector("#btn-send")
let arr = []

function err() { }

if (arr.length == 1) {
    let are = JSON.parse(localStorage.getItem("data"))
    are.forEach(element => {
        arr.push(` ${element} `)
    });

} else {
    arr.push("error")
    
    err()
}



// if (are.lenght == 0 || !are) {

// }else{
// }

function adds() {
    table.innerHTML = ''
    arr.forEach((Item) => {
        // localStorage.setItem("data", arr)

        let tr = document.createElement("tr")
        let checked = document.createElement("td")
        let inp = document.createElement("input")
        let text = document.createElement("td")
        let ii = document.createElement("td")
        let pen = document.createElement("i")
        let trash = document.createElement("i")

        inp.type = 'checkbox'
        checked.appendChild(inp)
        text.innerHTML = Item

        text.style.color = "var(--my-black)"
        checked.classList.add('checked')
        pen.classList.add('fa-pen')
        pen.classList.add('fa-solid')
        trash.classList.add('fa-solid')
        trash.classList.add('fa-trash')
        text.classList.add("id")
        ii.classList.add('ii')
        ii.appendChild(pen)
        ii.appendChild(trash)

        tr.appendChild(checked)
        tr.appendChild(text)
        tr.appendChild(ii)

        table.appendChild(tr)
    })
}
adds()

send.addEventListener('click', () => {
    if (input.value.trim() != "") {
        arr.push(input.value.trim())
        adds()
        localStorage.setItem('data', JSON.stringify(arr))
    }

    input.value = ''
})

const root = document.documentElement

dark.addEventListener("click", () => {
    document.body.classList.toggle("dod");
})
