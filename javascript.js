function search(){
	let searchtext = document.getElementById("search").value.toUpperCase();
	let roomlist = document.getElementById("room-list");
	let room = roomlist.getElementsByClassName("room")

	for (var i = 0; i<room.length; i++){
		let room_name = room[i].getElementsByClassName("room-name")[0];

		if (room_name){
			let room_name_value = room_name.textContent || room_name.innerHTML;

			if (room_name_value.toUpperCase().indexOf(searchtext)>-1){
				room[i].style.display = "";
			}else{
				room[i].style.display ="none"
			}

		}
	}
}

