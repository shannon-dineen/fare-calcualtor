
$(document).ready(function(){
    console.log("document is ready");

    $("#calculator").change(function () {
        console.log("The form has been changed");

    });$.getJSON("./fares.json", function(data){

        var info = $.map(data.info, function(i){
        });
        var zones = $.map(data.zones, function(i){
        });
        var name = zones[0].name;
        var zone =zones[1].type;

        var fares = $.map(data.zones[2].fares, function(i){
        })
        var type = fares[0].type;
        var purchase =fares[1].purchase;
        var trips =fares[2].trip;
        var price =fares[3].price;


        //showing user input in the console
        function zoneInput() {
            var zone_select = document.getElementById("zone-select").value;
        }
        zoneInput();
        console.log("zone_select");
    })
})