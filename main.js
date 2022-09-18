let dog = document.querySelector(".dog");
let cat = document.querySelector(".cat");
let btn_dog = document.querySelector(".btn-dog");
let btn_cat = document.querySelector(".btn-cat");

// Create function to get api link

function getData() {

    let myrequst = new XMLHttpRequest();

    myrequst.onreadystatechange = function() {
        if(myrequst.status === 200 && myrequst.readyState === 4) {
            let data = JSON.parse(myrequst.response);
            if(data.url.includes(".mp4")) getData();
            dog.innerHTML = `<img src="${data.url}"</img>`;
        }

    }

    myrequst.open("Get" , "https://random.dog/woof.json");
    myrequst.send();

};
btn_dog.onclick = getData;

// Another Way

function getAnotherData() {

    fetch("https://random.dog/woof.json")
    .then(resolved => resolved.json())
    .then(data => {

        if(data.url.includes(".mp4")) getData();
        cat.innerHTML = `<img src="${data.url}"</img>`;

    });

};
btn_cat.onclick = getAnotherData;