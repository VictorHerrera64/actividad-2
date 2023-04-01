function guardarUsuarios() {
    const id = document.getElementById('id').value,
        nombre = document.getElementById('name').value,
        apellido = document.getElementById('lastname').value,
        celular = document.getElementById('phone').value,
        correo = document.getElementById('email').value;

        validarinfo(id, nombre, apellido, celular, correo);
}


function listar() {
    const usuarios = obtenerUsuarios();
    if(usuarios.length == 0) return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No usuarios disponibles'
      });
    tbody = document.querySelector('#tablaUsuarios tbody');
    tbody.innerHTML = '';
    for (let i = 0; i < usuarios.length; i++) {
        let row = tbody.insertRow(i),
            idCelda = row.insertCell(0),
            nombreCelda = row.insertCell(1),
            apellidoCelda = row.insertCell(2),
            celularCelda = row.insertCell(3),
            correoCelda = row.insertCell(4);
        
        idCelda.innerHTML = usuarios[i].id;
        nombreCelda.innerHTML = usuarios[i].nombre;
        apellidoCelda.innerHTML = usuarios[i].apellido;
        celularCelda.innerHTML = usuarios[i].celular;
        correoCelda.innerHTML = usuarios[i].correo;

        tbody.appendChild(row);
    }

}


