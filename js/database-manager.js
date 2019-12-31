
// Инициализовать переменные из ui на сайте.
var bathroomCounter = 0; // Ванная.
var bedroomCounter = 0;  // Спальня.
var minPrice = 0;
var maxPrice = 0;

// Все комнаты.
var allRooms = [
	{
		roomId:1,
		bathroomCount:1,
		bedroomCount:2,
		price:100
	},
	{
		roomId:2,
		bathroomCount:1,
		bedroomCount:2,
		price:1000
	},
	{
		roomId:3,
		bathroomCount:1,
		bedroomCount:2,
		price:500
	},
	{
		roomId:4,
		bathroomCount:1,
		bedroomCount:2,
		price:150
	},
	{
		roomId:5,
		bathroomCount:2,
		bedroomCount:2,
		price:777
	},
	{
		roomId:6,
		bathroomCount:4,
		bedroomCount:5,
		price:10000
	},
	{
		roomId:7,
		bathroomCount:2,
		bedroomCount:3,
		price:800
	},
];

$(function(){
    $('button').bind('click', function(){
    	minPrice = $("#minPrice :selected").val();
    	maxPrice =  $("#maxPrice :selected").val();
		bathroomCounter = $("#bathroom :selected").val();
		bedroomCounter = $("#bedroom :selected").val();

        if($(this).hasClass("getRoomButton")){
        	$("#mainTable th").remove(); 
        	$("#mainTable tr").remove(); 
        	if(minPrice == 0 || maxPrice == 0){
        		$('#mainTable > tbody:last-child').append(
        				+'<tr>'
	        				+'<th>Выберите пограничную стоимость номера</th>'
					    +'</tr>');
        		return;
        	}
        	$('#mainTable > tbody:last-child').append(
        				+'<tr>'
	        				+'<th>Номер</th>'
	        				+'<th>Количество ванных комнат</th>'
						    +'<th>Количество спальных комнат</th>'
						    +'<th>Цена, $</th>'
					    +'</tr>');
        	for(var i = 0; i < allRooms.length;i++){
        		if(allRooms[i].price >= minPrice && allRooms[i].price <= maxPrice 
        			&& allRooms[i].bathroomCount >= bathroomCounter
        			&& allRooms[i].bedroomCount >= bedroomCounter){
	        		$('#mainTable > tbody:last-child').append(
	        			'<tr>'
	        				+'<th>'+allRooms[i].roomId+'</th>'
	        				+'<th>'+allRooms[i].bathroomCount+'</th>'
	        				+'<th>'+allRooms[i].bedroomCount+'</th>'
	        				+'<th>'+allRooms[i].price+'</th>'
	        			+'</tr>');
        		}
        	}
        }
    });
});
