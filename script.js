var form = document.getElementById("captador");
    
    async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.classList.add('enviado')
        status.innerHTML = "ENVIADO!";
        form.reset()
    }).catch(error => {
        status.classList.add('erro')
        status.innerHTML = "ERRO."
      });
    }
    form.addEventListener("submit", handleSubmit)