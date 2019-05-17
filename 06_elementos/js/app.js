function main() {
    document.querySelector('#btn-info').addEventListener('click', mostrar)
    document.querySelector('#btn-cerrar').addEventListener('click', cerrar)

    function mostrar() {
        document.querySelector('#dlg-sample').open = true
    }
    function cerrar () {
        document.querySelector('#dlg-sample').open = false
    }
}

function main2() {
    let modal =  document.querySelector('#dlg-sample')

    document.querySelector('#btn-info')
       .addEventListener('click', onClick)
    document.querySelector('#btn-cerrar')
       .addEventListener('click', onClick)


    function onClick() {
       if (!modal.open) {
          modal.open = false
        }
       modal.open = !modal.open
    }
}

document.addEventListener('DOMContentLoaded', main2)