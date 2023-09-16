document.getElementById("form").addEventListener('submit', function(e) {
    e.preventDefault()

    const prePayload = new FormData(form);
    const payload = new URLSearchParams(prePayload);

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: 'POST',
        body: payload,
    })
.then(response => {
    if (!response.ok) {
        throw new Error('Error en la solicitud');
    }
    return response.json();
})
.then(data => console.log('Respuesta del servidor:', data))
.catch(error => console.log('Error:',error))
})