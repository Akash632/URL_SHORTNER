const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
  const {body} = req.body;
  
  if (!body) return res.status(400).json({ error: "url is required" });
  const shortID = shortid();
  console.log(shortID);

  await URL.create({
    shortId: shortID,
    redirectURL: body
  });

  return res.json({ id: shortID });
}

// async function handleGetAnalytics(req, res) {
//   const shortId = req.params.shortId;
//   const result = await URL.findOne({ shortId });
//   return res.json({
//     totalClicks: result.visitHistory.length,
//     analytics: result.visitHistory,
//   });
// }

const handleUpdateURL = async (req,res)=>{
  try{
    const {short_url}=req.params;
    const {requiredURL}=req.body;

    if (!requiredURL) return res.status(400).json({ error: "url is required" });
    const shortID = shortid();
    const result = await URL.findOneAndUpdate({shortId:shortID});

    res.status(200).send({
      success:true,
      message:"Updated successfully"
    })
  }
  catch(err){
    res.status(500).send({
      success:false,
      message:"Internal server error"
    })
  }
}

module.exports = {
  handleGenerateNewShortURL,
  handleUpdateURL
};
