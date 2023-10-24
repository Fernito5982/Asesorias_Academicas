const BtnGuardar = document.querySelector('#Guardar');

BtnGuardar.addEventListener('click', MostrarAlerta) 

function MostrarAlerta() {
    Swal.fire({
        title: 'Guardado',
        text: 'Tu asesoria esta en proceso de asignación',
        icon: 'success',
        confirmButtonText: 'Ok'
    })
}


