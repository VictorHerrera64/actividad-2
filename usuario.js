const usuarios = [];

function validarinfo(id, nombre, apellido, celular, correo) {
    if (id == "") return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Digite un ID'
      });
    for (const key in usuarios) {
        if (usuarios[key].id == id) return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El usuario ya existe'
          });
    }
    const regex = /^[0-9]*$/;
    const onlyNumbers = regex.test(id);
    if (!onlyNumbers)return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Digite solamente numeros'
      });
    if (nombre == "") return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Digite un nombre'
      });
    if (apellido == "") return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Digite un apellido'
      });
    if (celular == "") return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Digite un numero telefonico'
      });
    if (correo == "") return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Digite un correo electronico'
      });
    var usuarioNuevo = {
        id: id,
        nombre: nombre,
        apellido: apellido,
        celular: celular,
        correo: correo
    };
    usuarios.push(usuarioNuevo);
    Swal.fire(
        'Usuario creado!',
        'Presiona el boton para continuar!',
        'success'
      )
      
}

function obtenerUsuarios() {
    return usuarios;
}

