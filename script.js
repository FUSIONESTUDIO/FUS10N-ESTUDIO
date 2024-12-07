window.onload = function() {
  const dateElement = document.getElementById('date-message');
  
  // Esperamos 2 segundos para que aparezca la fecha
  setTimeout(function() {
    dateElement.style.opacity = 1; // Hacemos visible la fecha
  }, 2000); // 2 segundos después del inicio
}
