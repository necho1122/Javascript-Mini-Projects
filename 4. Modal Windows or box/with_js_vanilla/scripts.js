const openDialog = document.querySelectorAll('.open_dialog');

const dialog = document.querySelector('#dialog_form');

openDialog.forEach(button=>{
    button.addEventListener('click',()=>{
        dialog.showModal();
    });
});

dialog.addEventListener('close', () =>
    alert(dialog.returnValue+' your request')
);