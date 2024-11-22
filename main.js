// var api = https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example;

let imgbox = document.getElementById("imgbox")
let qr = document.getElementById("qr")
let input = document.getElementById("input")

function Generate(){
    if(input.value.length>0){
        qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        imgbox.classList.add("show-img");
    }
    else{
        input.classList.add("err");
        setTimeout(()=>{
            input.classList.remove("err");
        }, 1000)
    }
}