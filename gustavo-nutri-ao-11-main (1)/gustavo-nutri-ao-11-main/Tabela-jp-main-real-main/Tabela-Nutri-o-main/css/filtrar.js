    const campoFiltro = document.querySelector("filrar-tabela");

    campoFiltro.addEventListener('input', function(){
        this.value;
        
        const pacientes = document.querySelectorAll(".paciente");

        if(this.value.length > 0){

        for(let i = 0; i < pacientes.length; i++){
            let paciente = pacientes[i];
            let tdNome = paciente.querySelector(".info-nome");
            let nome = tdNome.textContent;

            if(nome != this.value){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
        
        }else{
            for(
                let i = 0; i < pacientes.length; i++){
                    
                    pacientes.classList.remove("invisivel");
                }
        }

    });