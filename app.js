const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }




// // Get the modal
// var modal2 = document.getElementById("myModal2");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg2");
// var modalImg2 = document.getElementById("img02");
// var captionText2 = document.getElementById("caption2");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close2")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }



// // Get the modal
// var modal3 = document.getElementById("myModal3");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg3");
// var modalImg3 = document.getElementById("img03");
// var captionText3 = document.getElementById("caption3");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close3")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }



// // Get the modal
// var modal4 = document.getElementById("myModal4");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg4");
// var modalImg4 = document.getElementById("img04");
// var captionText4 = document.getElementById("caption4");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close4")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }


// // Get the modal
// var modal5 = document.getElementById("myModal5");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg5");
// var modalImg5 = document.getElementById("img05");
// var captionText5 = document.getElementById("caption5");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close5")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }


// // Get the modal
// var modal6 = document.getElementById("myModal6");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg6");
// var modalImg6 = document.getElementById("img06");
// var captionText6 = document.getElementById("caption6");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close6")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }









var myVideo = document.getElementById("video1"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 








const videoPlayer = document.querySelector ('.video-player')
const video = videoPlayer.querySelector('.video-t')
const playButton = videoPlayer.querySelector('#play-pouse-button')


//play and pause button

playButton.addEventListener('click' , (e) =>{
  if (video.paused) {
    video.play ( )
    videoPlayer.classList.add('playing')
  }  else {
    video.pause( )
    videoPlayer.classList.remove('playing')
  }
}
);




//  DISCOVERY BLOCK
discoverImagePath = 'assets/imgs/discover-images/'

discoverSlider = [
  {
    imgUrl: 'plane.jpeg',
    title: 'flight booking',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente quia corrupti non quae?'
  },
  {
    imgUrl: '2.jpg',
    title: 'flight booking',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente quia corrupti non quae?'
  },
  {
    imgUrl: '3.jpg',
    title: 'flight booking',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente quia corrupti non quae?'
  },
  {
    imgUrl: '4.jpg',
    title: 'flight booking',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente quia corrupti non quae?'
  },
  {
    imgUrl: '5.jfif',
    title: 'flight booking',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente quia corrupti non quae?'
  },
  {
    imgUrl: '6.jpg',
    title: 'flight booking',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente quia corrupti non quae?'
  }
];

function setDiscoveryBlock() {
  let output = '';
  for(let i=0; i<discoverSlider.length; i++){
    const slide = discoverSlider[i];
    output = output + `
    <div class='discover-card' onclick="openModal(${i})">
        <div class='discver-card-image-wrapper'>
            <img  src='${discoverImagePath}/${slide.imgUrl}' alt='${slide.title}' class='absolute-center{'>
        </div>
        <h4>${slide.title}</h4>
        <p>${slide.description}</p>
    </div>
    `
  }
  document.getElementById('dicovery-content').innerHTML = output;
}

setDiscoveryBlock()

function openModal(index){
  console.log(index)
  const slide = discoverSlider[index];
  const output = `
      <div class='modal-image-wrapper'>
        <div class='relative full-height overflow-hidden'>
            <img src='${discoverImagePath}/${slide.imgUrl}' class='absolute-center' />
        </div>
    </div>
    <div class='modan-caption'>
    <h3 class='text-center'>${slide.title}</h3>
    <p  class='text-center'>${slide.description}</p>
    </div>
    `;
    
    document.getElementById('discover-modal-content').innerHTML = output;
    document.getElementById('discovery-modal').style.display = 'block'

  }

  function closeModal(){
    console.log('close')
    document.getElementById('discovery-modal').style.display = 'none'
  }

  function subscribeNewslatter(){
    const email = document.getElementById('email-input').value;
    console.log(email)
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(email.match(mailformat)){
    alert('success')
  }
  else{
    console.log('fail')
      const subscriptionWrapper = document.getElementById('news-letter-wrapper');
      subscriptionWrapper.classList.add('invalid')
    }
  }

  function removeValidator(){
    const subscriptionWrapper = document.getElementById('news-letter-wrapper');
      subscriptionWrapper.classList.remove('invalid')
  }


  // get addresses from API

  loadAddress();

  function loadAddress() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      
      if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(this.responseText)
        const address = response.data[0]
        const output = `
        <div>${address.street}, ${address.zipcode}</div>
        <div>${address.city}, ${address.country}</div>`
       document.getElementById("address").innerHTML = output;
       setMap( address.latitude, address.longitude)
      }
    };

    xhttp.open("GET", "https://fakerapi.it/api/v1/addresses?_quantity=1", true);
    xhttp.send();
  }

  function setMap(latitude, longitude){
    const output = `<iframe  class='map-iframe' src='https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&amp;output=embed'></iframe> `;
    document.getElementById("map-wrapper").innerHTML = output;
  }