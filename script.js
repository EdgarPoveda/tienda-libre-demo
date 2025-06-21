document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que se recargue la página

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Obtener los datos anteriores del localStorage
  let registros = JSON.parse(localStorage.getItem('loginDataCaptured')) || [];

  // Agregar el nuevo registro
  registros.push({ email, password });

  // Guardar nuevamente en localStorage
  localStorage.setItem('loginDataCaptured', JSON.stringify(registros));

  console.log('Nuevo registro guardado:', { email, password });
});
