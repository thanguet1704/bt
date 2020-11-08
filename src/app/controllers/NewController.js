class NewsController{

    //get/
    index(req, res){
        res.send('news');
    }

    //[GET] /search
    show(req, res){
        res.send('New Details');
    }
}

module.exports = new NewsController;