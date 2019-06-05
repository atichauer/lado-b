function limpaCampos() {
    event.preventDefault();
    var frm = document.formImovel;
    alert("Limpando os Campos para você"); 
    frm.proprietario.value = "";
    frm.matricula.value = 0;
}
