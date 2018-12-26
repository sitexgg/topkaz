<?php 


echo "<h1>Contact</h1><hr>";
echo "Home Edition <hr>";
echo "<a href=\"/\">Index</a>";
?>
<form action="/contact" method="POST">
	<input type="text" name="text">
	<button type="submit">Send</button>
</form>