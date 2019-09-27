const Mongoose=require('mongoose');
require('mongoose-double')(Mongoose);
var SchemaTypes = Mongoose.Schema.Types;
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
//----------------------------------------
// Image API
var imageCapture;

function onGetUserMediaButtonClick() {
  navigator.mediaDevices.getUserMedia({video: true})
  .then(mediaStream => {
    document.querySelector('video').srcObject = mediaStream;

    const track = mediaStream.getVideoTracks()[0];
    imageCapture = new ImageCapture(track);
  })
  .catch(error => console.log(error));
}

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
//-----------END OF API INITIALISATION--------------------------

//the Above Latitude and logitude are calucated put them in the below object elemetns
const dbschema=Mongoose.Schema(
    {
        location:{
            latitude:SchemaTypes.Double,
            logitude:SchemaTypes.Double
        },
        imagepath:String,
        locality:String
})
module.exports=Mongoose.model("db",dbschema);