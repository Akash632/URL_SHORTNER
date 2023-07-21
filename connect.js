const mongoose = require("mongoose");
mongoose.set("strictQuery",true);
async function connectToMongoDB() {
  try{
    await mongoose.connect("mongodb://127.0.0.1:27017/url_shortner");
    console.log('connect to MongoDB');
  }catch(err){
    console.log(err);
  }
}

module.exports = {
  connectToMongoDB,
};
