let image = document.getElementById("image")
let content=document.getElementById("content")
let button = document.getElementById("createbutton")
let refreshbutton = document.getElementById("refresh")
button.onclick=()=>{
    if(content.value=="") return

    let linkQR = "https://api.qrserver.com/v1/create-qr-code/";

    image.src= linkQR+"?size=500x500&data="+content.value
}

refreshbutton.onclick =()=>{
    content.value=""
    image.src="https://iconicentertainment.in/wp-content/uploads/2013/11/dummy-image-square.jpg"
}