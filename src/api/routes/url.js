// import *as express from 'express'
import validUrl from 'valid-url'
import generateShortUrl from './../models/generateHash'
import postUrl from './../models/postRequest'
const express= require("express")
const router = express.Router();




// @route     POST /api/url/shorten
// @desc      Create short URL
router.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = "http://localhost:5000";

  

  //generate 7 bit hash
  const urlCode = generateShortUrl(longUrl)

  // Check long url
  if (validUrl.isUri(longUrl)) {
    try {
      //let url = await Url.findOne({ longUrl });
      //checking if a url already exists

      

      // if (url) {
      //   res.json(url);
      // } else {
        const shortUrl = baseUrl + '/' + urlCode;

        const data = {
          longUrl:longUrl,
          shortUrl:shortUrl,
          urlCode:urlCode,
          creation_date:new Date(),
          creator_email:"",
          creator_id:"",
          expiry_date:"",
          visit_counts:0,
          countries:{
            "usa":0,"ind":0
          }
          
        };

        postUrl(data)

        

        //res.json("success");
      //}
    } catch (err) {
      console.error(err);
      res.status(500).json('Server error');
    }
  } else {
    res.status(401).json('Invalid long url');
  }
});

module.exports = router;
