	function del(arg)
	{	
		list = document.getElementById('ft_list');
		li = document.getElementById('li');
		console.log(li);
		list.removeChild(arg);
	}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function add() {
	var list;
	var message;
	var div;
	var lien;
	var fin_lien;


	message = prompt('Please enter a note');
	if(!message)
		return;
	m2 = message.replace(/ /g,'').replace(/\W/g,'') + getRandomInt(1,200000000);
	list = document.getElementById('ft_list');
	div = document.createElement("div");
	message = document.createTextNode(message);
	div.appendChild(message);
	div.style.listStyleType = "circle";
	div.style.marginLeft = "25px";
	div.style.fontFamily = "Times New Roman, Times, serif";
	div.style.fontSize = "20px";
	div.style.fontStyle = "bold";
	div.id = m2;
	m3 = "del("+ m2 + ")"

	div.setAttribute("onclick",m3);
	list.insertBefore(div,list.childNodes[0]);
	console.log(list);
}
		
	document.getElementById("add").addEventListener("click",add);

