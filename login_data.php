<?php
	$link = mysql_connect("localhost","root","ytwu57874") or exit( mysql_error() );
	mysql_select_db("user_data",$link) or die("db連線失敗");
	mysql_query("set names utf8");
	
	$user_id=$_POST['id'];
	$user_pw=$_POST['pw'];
	$user_gender=$_POST['gender'];
	$user_email=$_POST['email'];
 	$school_city=$_POST['city']; 
 	$school_area=$_POST['area']; 	
	$school_name=$_POST['school'];
	$user_supervisor=$_POST['supervisor'];
	
	$sql = "INSERT INTO `login_info`(`user_id`,`user_pw`,`gender`,`email`,`city`,`area`,`school`,`supervisor`) 
		VALUES ('".$user_id."','".$user_pw."','".$user_gender."','".$user_email."','".$school_city."', '".$school_area."', '".$school_name."','".$user_supervisor."');";
	mysql_query($sql, $link) or die('MySQL query error');
	echo "成功";
?>