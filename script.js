<script> 
document.getElementById("clickButton").addEventListener("click", function () 
{ 
  
document.getElementById("message").innerText = "Button clicked!"; 
}); 
 
document.getElementById("textInput").addEventListener("input", function (event) { 
document.getElementById("inputDisplay").innerText = "You typed: " + event.target.value; 
}); 

document.getElementById("hoverBox").addEventListener("mouseover", function () 
{ 
this.style.backgroundColor = "orange"; 
}); 

document.getElementById("hoverBox").addEventListener("mouseout", function () 
{ 
this.style.backgroundColor = "lightblue"; 
}); 
</script> 
</body> 
</html>
