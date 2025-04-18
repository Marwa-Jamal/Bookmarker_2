//HTML elements
var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var webContainer = document.getElementById("webContainer");
var collectionHTML = document.getElementsByClassName("DeleteRow");
var regexName = /^[A-Z][a-z]{3,}$/;
var regexURL = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;






//events
//variables
var userwebsites =JSON.parse(localStorage.getItem("website")) || [];
displayAllwebsite()
//functions
function submitINfo(){
    if(validData(regexURL,siteUrl)&&validData(regexName,siteName)){
    var websiteInfo ={
        websiteName : siteName.value,
        websiteUrl : siteUrl.value,
    };
    userwebsites.push(websiteInfo);
    localStorage.setItem("website", JSON.stringify(userwebsites))
    displayWebInfo(userwebsites.length-1);
    // for(var i=0; i<collectionHTML.length; i++){
    //     console.log(collectionHTML.item(i))
    //     collectionHTML.item(i).addEventListener("click", function(e){
    //         console.log("clicked");
    //         console.log(e.target);
    //         var clickedbtn = e.target;
    //         clickedbtn.parentElement.parentElement.remove();
    //     })
    // }
    clearInput();  
}else{
    Swal.fire({
        title: "Check Site Name and URL",
    
      });

 }
}


function displayWebInfo(index){
    var tableinfo = `
    <tr>
                <th>${index + 1}</th>
                <th>${userwebsites[index].websiteName}</th>
                <th><button type="button" class="btn btn-success"><a href="${userwebsites[index].websiteUrl}" class="text-white text-decoration-none"> Visit</a></button>
                </th>
                <th><button type="button" class="btn btn-danger DeleteRow" onclick="deletewebsite(${index})">Delete</button>
                </th>
    </tr>`

    webContainer.innerHTML += tableinfo;
}

function displayAllwebsite(){
    for(var i =0; i<userwebsites.length; i++){
        displayWebInfo(i);
    }
}

function clearInput(){
    siteName.value ="";
    siteUrl.value = "";
}

function deletewebsite(index){
    userwebsites.splice(index,1);
    localStorage.setItem("website", JSON.stringify(userwebsites));
    webContainer.innerHTML="";
    displayAllwebsite();
}


// function validName(){
//     if(regexName.test(siteName.value)){
//         console.log("correct")
//         siteName.classList.add("is-valid");
//         siteName.classList.remove("is-invalid");
//     }else{
//         console.log("incorrect")
//         siteName.classList.add("is-invalid");
//         siteName.classList.remove("is-valid");
//     }
// }
function validData(regex, element){
    if(regex.test(element.value)){
        console.log("correct")
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        element.nextElementSibling.style.display="none";
        return true;
        // if(element.value.includes("https://")){
        //     console.log("have https")
        // }else if(!element.value.includes("https://")){
        //   var URL="https://".concat(element.value);
        //   console.log(URL);
        // }
    }else{
        console.log("incorrect")
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        element.nextElementSibling.style.display="block";
        return false;
    }
}


// Events
// function dltRow(){
//     for(var i=0; i<collectionHTML.length; i++){
//         console.log(collectionHTML.item(i))
//         collectionHTML.item(i).addEventListener("click", function(e){
//             console.log("clicked");
//             console.log(e);
//             console.log(e.target);
//             var clickedbtn = e.target;
//             clickedbtn.parentElement.parentElement.remove();
//         })
// }
// }






