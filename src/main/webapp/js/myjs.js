$(document).ready(function(){
	
	console.log("Yes");
			
	$("#btn1").click(function(){
		console.log("click");
		$("#container").hide();
	});
	$("#btn2").click(function(){
		$("#container").show();
	});
	$("#btn3").click(function(){
		$("#container").fadeOut(2000, function(){
			alert("gone...");
		});
	});
	$("#btn4").click(function(){
		$("#container").fadeToggle(function(){
			alert("Toggled..."); 
		});
	});
	$("#btn5").click(function(){
		$("#container").fadeTo(250, 0.5, function(){
			alert("faded");
		});
	});
	$("#btn6").click(function(){
		$("#container").slideUp();
	});
	$("#btn7").click(function(){
		$("#container").slideDown();
	});
	$("#btn8").click(function(){
		$("#container").slideToggle();
	});
	
	
	$("#btn9").click(function(){
		$("#container").animate({width: "200", height: "200"},200, function(){
			alert("width and height changed.")
		});
	});
	$("#btn10").click(function(){
		let v = $("#f").val();
		console.log("Value is " + v);
		
		$("#f").val("Your value is captured");
		let c = $("#content").text();
		console.log(c);
		
		$("#content").html("<h1>Your text is captured.</h1>");
		let s = $('.image').attr('src');
		console.log(s);
	});
	
	
	
	
});

	