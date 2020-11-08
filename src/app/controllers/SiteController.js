class SiteController{

    //get/news
    home(req, res){
        res.send('news');
    }

    //[GET] /news:slug
    search(req, res){
        res.render('search');
    }
}

module.exports = new SiteController;