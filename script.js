var ImageGallery;

// A Javascript function being used to perform image slider.
function load_gallery() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_image = document.getElementById('image');
  element_image.setAttribute("src", ImageGallery[0]);
}


ImageGallery = ['https://www.welcometosheffield.co.uk/media/weclorwi/radisson-7-v2-small.jpg?anchor=center&mode=crop&quality=100&width=640&height=320&rnd=133645778875470000', 'https://www.welcometosheffield.co.uk/media/nofbcb2x/cam-street-collective-4.jpg?center=0.58944793850454225,0.50838574423480087&mode=crop&quality=100&width=640&height=320&rnd=133609244536570000', 'https://www.welcometosheffield.co.uk/media/nofbcb2x/cam-street-collective-4.jpg?center=0.58944793850454225,0.50838574423480087&mode=crop&quality=100&width=640&height=320&rnd=133609244536570000', 'https://www.welcometosheffield.co.uk/media/npfbyoja/khyati.jpg?anchor=center&mode=crop&quality=100&width=800&height=640&rnd=132924221403700000', 'https://www.welcometosheffield.co.uk/media/wicp2tle/5dd843b9bfbf2_charles-street-hero.jpg?anchor=center&mode=crop&width=640&height=391&format=webp&quality=100&rnd=132902801678970000'];
load_gallery();


document.getElementById('nxtBtn').addEventListener('click', (event) => {
  ImageGallery.push(ImageGallery[0]);
  ImageGallery.shift();
  load_gallery();

});

document.getElementById('prvBtn').addEventListener('click', (event) => {
  ImageGallery.push(ImageGallery[0]);
  ImageGallery.shift();
  load_gallery();

});