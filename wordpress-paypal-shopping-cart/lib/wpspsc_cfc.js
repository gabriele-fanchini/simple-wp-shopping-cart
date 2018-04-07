function join_cf()
{
	var custom_initial = document.getElementById('customInitial').value;
	var user_mail = document.getElementById('userMail').value;
	var cf = document.getElementById('cf').value;
  	var dataTratment = document.getElementById('orderPrivacy').value;
	document.getElementById('custom').value = encodeURIComponent(custom_initial+"&userMail="+user_mail+"&cf="+cf+"&dataTratment="+dataTratment);
  	//document.getElementById('custom').value = encodeURIComponent(custom_initial+"userMail="+user_mail);
	//alert(document.getElementById('custom').value);
}



