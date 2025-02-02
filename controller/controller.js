const allmodels = require('../models/model');
const {nanoid} = require('nanoid');

async function urlpost(req, res) {
    url = req.body.url
    if(!url){
        return res.json({msg:'oye url peyoo peyjec...'})
    }
    console.log(url)
    id = nanoid(6)
    newurl = await allmodels.create({
        urlgenerated : url,
        shortid : id,
    })
    newurl.requests.push({ timestamp: Date.now() })
    await newurl.save()
    return res.json({msg:`You'r shord id is here: ${id}`})
}

async function shorturl(req, res) {
    shortid = req.params.id
    the_url = await allmodels.findOne({'shortid':shortid})
    console.log(the_url.urlgenerated)
    if(the_url){
        return res.redirect('https://'+the_url.urlgenerated)
    }else{return res.json({msg:'not good'})}
}

module.exports = {
    urlpost,
    shorturl,
}