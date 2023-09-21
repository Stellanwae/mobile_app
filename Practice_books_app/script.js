import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
appSettings = {
    databaseURL: "https://mobile-grocery-app-40457-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const booksInDatabase = ref(database, "books")
let booksEl = document.getElementById("books")

onValue(booksInDatabase, function(snapshot) {
    let booksArray = Object.values(snapshot.val())
    for (let i = 0; i < booksArray.length(); i++) {
        let currentBooks = booksArray[i]
        renderBooks(currentBooks)
    }
    
})

function renderBooks(book) {
    booksEl.innerHTML += `<li>${book}</li>`
}