var siteNameInput = document.getElementById("siteNameInput");
var siteUrlInput = document.getElementById("siteUrlInput");
var bookList = [];

if (localStorage.getItem("bookMarks") != null) {
    proudctList = JSON.parse(localStorage.getItem("bookMarks"));
    displayData()
}

function addBookMark() {
    var siteName = siteNameInput.value;
    var siteUrl = siteUrlInput.value;

    var site = {
        webName: siteName,
        webUrl: siteUrl
    }

    bookList.push(site)
    localStorage.setItem("bookMarks", JSON.stringify(bookList))
    displayData();
    clearForm();
}

function displayData () {
    dataContainer = "";
    for (i = 0; i < bookList.length; i++) {
        dataContainer += `
        <tr>
            <td>${i+1}</td>
            <td>${bookList[i].webName}</td>
            <td><button  onclick='window.location.href ="${bookList[i].webUrl}"' " class="btn visit-btn">Visit <i class="fa-solid fa-eye-low-vision"></i></button></td>
            <td><button onclick="deleteElment(${i})" class="btn btn-outline-danger">Deleat <i class="fa-solid fa-trash"></i></button></td>
        </tr>
        `
    }
    document.getElementById("tableBody").innerHTML = dataContainer;
}

function deleteElment (index) {
    bookList.splice(index, 1);
    console.log(bookList)
    displayData()
    localStorage.setItem("bookMarks", JSON.stringify(bookList))
}

function clearForm () {
    siteName = siteNameInput.value = "";
    siteUrl = siteUrlInput.value = "";
}