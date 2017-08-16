
			var i = localStorage.getItem("khush");
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
 				document.getElementById("demo").innerHTML = "<b>Product Description: </b>" +  myimg[i].product_description; 
 				document.getElementById("shipping").innerHTML = "<b>Shipping Details: </b>" + myimg[i].shipping_details; 
 				document.getElementById("reviews").innerHTML = "<b>Customer Reviews: </b>" + myimg[i].customer_reviews; 
			}

			function myfunction() {
				var fn = document.getElementById('fname').value;
				var ln = document.getElementById('lname').value;
				var c = document.getElementById('country').value;
				document.getElementById('country').innerHTML = c;
				var s = document.getElementById('state').value;
				var e = document.getElementById('email').value;

				document.getElementById('view_form').innerHTML = "Name: " + fn + " " + ln + "<br>" + "Country: " +  c + "<br>" + "State" + s + "<br>" + "Email: " + e;
				
				if(fn=="" || ln=="" || c== "" || s== "" || e==""){
					alert("Please fill all the inputs");
				} else {
					document.getElementById("fname").value = "";
					document.getElementById("lname").value = "";
					document.getElementById("country").value = "";
					document.getElementById("state").value = "";
					document.getElementById("email").value = "";
					document.forms["myform"].style.visibility = "hidden";
					document.getElementById("edit").style.visibility = "visible";
					
				}
			}