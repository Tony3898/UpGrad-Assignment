function add()
{
    var inp = $("#userinp").val();
    $.ajax({
        url: 'https://restcountries.eu/rest/v2/all',  
        success:function(response){
            for(i=0;i<response.length;i++)
                {
                    console.log(response[i]);
                    if(response[i].name === inp)
                        {
                            $("#countryname").text(response[i].name);
                            $("#capital").text("Capital: "+response[i].capital);
                            
                            $("#curr").text("Currencies: "+response[i].currencies[0].name);
                            
                            $("#population").text("Population: "+response[i].population);
                            
                            $("#tz").text("Time Zone: "+response[i].timezones[0]);
                            $("#flag").attr("src",response[i].flag);
                        }
                }
        }
    });
}