var i=0;
//var img = [];
function next()
{
    $.ajax({
        url: 'https://pixabay.com/api/?key=12127371-0d43ab561c695d2e7349ca943&q=cute+dogs&image_type=photo',  
        success:function(response){
            var i = parseInt(Math.random()* 20)-1;
            console.log(i);
            console.log(response.hits[i].largeImageURL); $("#images").attr("src",response.hits[i].largeImageURL)
        }
    });
}
