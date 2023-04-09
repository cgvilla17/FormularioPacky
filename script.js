const formularioUsuarios = document.getElementById('cotizacion');

const usuarios = []

formularioUsuarios.addEventListener('submit', (event) => {
  event.preventDefault()

  usuarios.push({
    nombre: formularioUsuarios.nombre.value,
    apellido: formularioUsuarios.apellido.value,
    email: formularioUsuarios.email.value,
    tamaño: formularioUsuarios.tamaño.value,
    peso: formularioUsuarios.peso.value,
    provincia: formularioUsuarios.provincia.value,

  })
  nombre = document.getElementById('nombre').value;
  apellido = document.getElementById('apellido').value;
  email = document.getElementById('email').value;
  tamaño = document.getElementById('tamaño').value;
  peso = document.getElementById('peso').value;
  provincia = document.getElementById('provincia').value;
  costoEnvio = peso * 730; // Cálculo del costo de envío

  document.getElementById('usuariosRespuesta');

    usuariosRespuesta.textContent = ` Hola ${nombre} ${apellido}, Muchas gracias por tu consulta, el costo de envío de un paquete ${tamaño} que pesa ${peso} Kilogramos y se enviará a ${provincia} es de $${costoEnvio}.`;

  console.log(usuarios)

});

// 



 
  


