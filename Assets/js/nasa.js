function showImg()
{
    var inp = $("#userinp1").val();
    //alert(inp);
    $.ajax({
        url: 'https://images-api.nasa.gov/search?q='+inp,
        success:function(response){
            //onsole.log(response.collection.items.length);
            /*$("#imageNasa").attr("src",response.collection.items[0].href);*/
            //console.log(response.collection.items[].links[0].href);
            $("#imageNasa1").attr("src",response.collection.items[1].links[0].href);
            $("#imageNasa2").attr("src",response.collection.items[2].links[0].href);
            $("#imageNasa3").attr("src",response.collection.items[3].links[0].href);
            $("#imageNasa4").attr("src",response.collection.items[4].links[0].href);
            $("#imageNasa5").attr("src",response.collection.items[5].links[0].href);
            $("#imageNasa6").attr("src",response.collection.items[6].links[0].href);
        }
    });
}

