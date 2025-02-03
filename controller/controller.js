const allmodels = require('../models/model');
const {nanoid} = require('nanoid');

async function urlpost(req, res) {
    url = req.body.url
    if(!url){
        return res.json({msg:'oye url peyoo peyjec...'})
    }
    id = nanoid(6)
    // newurl = await allmodels.create({
    //     urlgenerated : url,
    //     shortid : id,
    // })
    // newurl.requests.push({ timestamp: Date.now() })
    // await newurl.save()

    allurls = await allmodels.find({})
    return res.render('index', {id:id, allurls:allurls})
}

async function shorturl(req, res) {
    console.log('haa edhr tk too phnch gya he...')
    shortid = req.params.id
    the_url = await allmodels.findOne({'shortid':shortid})
    if(the_url){
        the_url.requests.push({ timestamp: Date.now() })
        await the_url.save()
        return res.redirect('http://'+the_url.urlgenerated)
    }else{return res.json({msg:'not good'})}
}

module.exports = {
    urlpost,
    shorturl,
}