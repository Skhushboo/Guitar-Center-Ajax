		var i = 0;
		var khush;
		var myimg ;
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if(xhttp.readyState == 4 && xhttp.status ==200) {
						var myobj = JSON.parse(xhttp.responseText);
						myimg = myobj.allProducts;
						myFun();		
				}
			};

			xhttp.open("GET","guitardata.json",true);
			xhttp.send();
			function myFun() {
				document.getElementById("one").src =  myimg[i].image_path;
 				document.getElementById("demo").innerHTML = "Product Description: " +  myimg[i].product_description; 
 				document.getElementById("shipping").innerHTML = "Shipping Details: " + myimg[i].shipping_details; 
 				document.getElementById("reviews").innerHTML = "Customer Reviews: " + myimg[i].customer_reviews; 
			}

			function next() {
				if(i<myimg.length){
				i++;
				myFun();
				localStorage.setItem("khush",i);
				}
			}

			function previous() {
				if(i!=0){
				i--;
				myFun();
				localStorage.setItem("khush",i);
			}
			}