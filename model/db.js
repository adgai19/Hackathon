const Mongoose=require('mongoose');

require('mongoose-double')(Mongoose);
var SchemaTypes = Mongoose.Schema.Types;
const dbschema=Mongoose.Schema(
        
        {
        location:{
                latitude:SchemaTypes.Double,
                longitude:SchemaTypes.Double
        },
        imagepath:String,
        locality:String
});
module.exports=Mongoose.model("db",dbschema);

