const Mongoose=require('mongoose');
require('mongoose-double')(Mongoose);
var SchemaTypes = Mongoose.Schema.Types;
/* HTML Code
<button id = "find-me">Click Picture</button><br/>
<p id = "status"></p>
<a id = "map-link" target="_blank"></a>
*/
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