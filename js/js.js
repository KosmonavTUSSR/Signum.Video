
	$('#feedform').submit(function(e){
	    e.preventDefault();
		var form_data = {
			'email':$("#emailp", $(this)).val(),
			'name':$("#namep", $(this)).val(),
			'bigtext':$("#bigtextp", $(this)).val(),
		};
        console.log(form_data)		
		$.ajax({
		  type: "POST",
		  url: "mail.php",
		  data: form_data,
		  success: function(){
		  	alert("Ваше сообщение отправлено");
		  	document.getElementById('feedform').reset()
		  },
		  error: function() {
		  	alert("Произошла какая то ошибка!");
		  }
		  
		});
		
	});
