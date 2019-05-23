function add()
{
    $("#matchlistli").empty();
    var from = new Date(document.getElementById("userinpfrom").value);
    var to = new Date(document.getElementById("userinpto").value);
    console.log(from);
    console.log(to);
    $.ajax({
        url: 'https://cricapi.com/api/matchCalendar?apikey=WqAPDPEm4mgOErU2eQaQSV8gIq22',  
        success:function(response){
            //console.log(response.data.length);
            for(var i=0;i<response.data.length;i++)
                {
                    //console.log(response.data[i].date);
                    if(new Date(response.data[i].date).getMonth() >= from.getMonth() && new Date(response.data[i].date).getMonth()<=to.getMonth() )
                        {
                            var li = response.data[i].name + " on " +  response.data[i].date;
                            console.log(li);
                            $("#matchlistli").append("<li>" + li + "</li>");
                        }
                }
        }
    });
    
}