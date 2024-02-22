

const newCat = "https://media1.tenor.com/m/mJ_Og97j5WwAAAAC/chipi-chapa.gif"


async function postData(url = "https://apolodoca.github.io/put_ledson"){
	  const response = await fetch(url, {
	  	method: "PUT",
  		headers: {
        "Content-Type": "application/json",
      	},
      	body: newCat,
    	});
	if(response.data.sucess){


document.getElementById("imageid").src="../template/save.png";
}




	
}
