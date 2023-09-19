import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL:"https://grocery-mobile-app-1fde3-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

const app = initializeApp(appSettings)
let getGroceryDatabase = getDatabase(app)
let nameDatabase = ref(getGroceryDatabase, "grocery-list")
addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    inputFieldEl.value = ""
    push(nameDatabase, inputValue)
    
})