const Mongoose=require('mongoose');
require('mongoose-double')(Mongoose);
var SchemaTypes = Mongoose.Schema.Types;
var lat;
var log;
/* HTML Code for Location API
<button id = "find-me">Click Picture</button><br/>
<p id = "status"></p>
<a id = "map-link" target="_blank"></a>
*/
//----------------Location API----------------------
function geoFindMe() {

  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');

  mapLink.href = '';
  mapLink.textContent = '';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = 'Unable to retrieve your location';
  }

  if (!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}

document.querySelector('#find-me').addEventListener('click', geoFindMe);
//----------------------------------------
// Image API
var imageCapture;

function onGrabFrameButtonClick() {
  imageCapture.grabFrame()
  .then(imageBitmap => {
    const canvas = document.querySelector('#grabFrameCanvas');
    drawCanvas(canvas, imageBitmap);
  })
  .catch(error => console.log(error));
}

function onTakePhotoButtonClick() {
  imageCapture.takePhoto()
  .then(blob => createImageBitmap(blob))
  .then(imageBitmap => {
    const canvas = document.querySelector('#takePhotoCanvas');
    drawCanvas(canvas, imageBitmap);
  })
  .catch(error => console.log(error));
}
function drawCanvas(canvas, img) {
    canvas.width = getComputedStyle(canvas).width.split('px')[0];
    canvas.height = getComputedStyle(canvas).height.split('px')[0];
    let ratio  = Math.min(canvas.width / img.width, canvas.height / img.height);
    let x = (canvas.width - img.width * ratio) / 2;
    let y = (canvas.height - img.height * ratio) / 2;
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height,
        x, y, img.width * ratio, img.height * ratio);
  }
  
  document.querySelector('video').addEventListener('play', function() {
    document.querySelector('#grabFrameButton').disabled = false;
    document.querySelector('#takePhotoButton').disabled = false;
});

//-----------END OF API INITIALISATION--------------------------
//Transfer the above image bitmap and use the url as imagepath
//Don't Forget the Date Element to be given while Posting on MongoDB
//the Above Latitude and logitude are calucated put them in the below object elemetns
const dbschema=Mongoose.Schema(
    {
        location:{
            latitude:SchemaTypes.Double,
            logitude:SchemaTypes.Double,
        },
        imagepath:String,
       /* locality:String //Locality is found while geolocate don't require */
})
module.exports=Mongoose.model("db",dbschema);