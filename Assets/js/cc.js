function convert()
{
    
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var text = from+'_'+to;
    //alert(text);
    $.ajax({
        url: 'https://free.currencyconverterapi.com/api/v6/convert?q=' + text +'&compact=ultra&apiKey=01c64d154f4aaea991ad',  
        success:function(response){
            document.getElementById("result").innerHTML = parseFloat(response[text]) * document.getElementById("userinp").value;
        }
    });
}