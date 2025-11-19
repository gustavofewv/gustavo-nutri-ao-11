const tabela = document.querySelector("table");

tabela.addEventListener('dblclick', function(event){
   let alvoEvento = event.target;
   let paiAlvo = alvoEvento.parentNode.remove();

   event.target.parentNode.classlist.add("fadeOut");

   setTimeout (function(){
    event.target.parentNode.remove();
   }, 500);

   paiAlvo.remove();
});
