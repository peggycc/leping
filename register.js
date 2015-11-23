
$(function(){
	$("#send").click(function(){
		if($('#male').is(':checked')){
			var sex=$("#male").val();
		}else if($('#female').is(':checked')){
			var sex=$("#female").val();
		}else{
			var sex="";
		}
		
		if($('#user_id').val()!="" && $('#user_id').val()!="" && $('#user_pw').val() && sex!=""&&$("#user_email").val()!="" && $("#city").val()!="" && $("#school_name").val()!="" && $("#teacher_name").val()!=""){
			$.ajax( {
				url: 'login_data.php',
				type: 'POST',
				data: {
				id: $('#user_id').val(),	
				pw: $('#user_pw').val(),
				gender:sex,
				email:$("#user_email").val(),
 				city:$("#city").val(),
				area:$("#area").val(),
				school:$("#school_name").val(),
				supervisor:$("#teacher_name").val()
				},
				error: function(xhr) {
				alert('Ajax request 發生錯誤');
				},
				success: function(userid) {
				alert(userid);
				}
			});
		}else{
			alert("請輸入資料");
		}
	});
});


