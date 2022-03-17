<?php
$to = "<555652@list.ru>";
$name = $_POST['name'];
$email = $_POST['email'];
$bigtext = $_POST['bigtext'];
$message = '
<html>
<body>
<center>
<table border=1 cellpadding=6 cellspacing=0 width=90% bordercolor="#DBDBDB">
 <tr><td colspan=2 align=center bgcolor="#E4E4E4"><b>Информация</b></td></tr>
 <tr>
  <td><b>От кого</b></td>
  <td>'.$name.'</td>
 </tr>
 <tr>
  <td><b>Почта</b></td>
  <td>'.$email.'</td>
 </tr>
 <tr>
  <td><b>Сообщение</b></td>
  <td>'.$bigtext.'</td>
 </tr>
</table>
</center>
</body>
</html>';
$headers  = "Content-type: text/html; charset=utf-8\r\n";
$result = mail($to, $subject, $message, $headers);
