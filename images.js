loadImages()
function loadImages(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            const resObj = JSON.parse(this.responseText)
            console.log(resObj)
            const resData = resObj.data;
            console.log(resData)
            let output='';
            for(let i=0; i<resData.length; i++){
                const image = resData[i];
                output = output +  `<div class='image-wrapper'><img src='${image.url}' class='absolute-center' /></div>`
            }
            document.getElementById('image-grid').innerHTML = output;
     
        }
    };
    xhttp.open("GET", "https://fakerapi.it/api/v1/images?_quantity=12&_type=kittens&_height=300", true);
    xhttp.send();

}