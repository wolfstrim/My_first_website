var count = 0;
document.getElementById("myButton").onclick = function() {
	count++;
	if (count % 2 == 0) { //проверка на четность
		document.getElemetnById("demoButton").innerHTML = "";
	} else {
		var img = document.createElement("img");
        img.src = "../image/my_photo1.jpg";
        img.width = 350; 
        img.height = 350;
        document.getElementById("demoButton").appendChild(img);
	}
}