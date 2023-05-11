document.addEventListener('DOMContentLoaded', function(){
    const list =  document.querySelector('#movie-list ul');
    const forms = document.forms;

    // delete movs kkkkkkkkkk iiiiiii ,,,,,, ''''
    list.addEventListener('click', (e)=>{
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li)
        }
    })

    const addForm = forms['add-movie'];
    addForm.addEventListener('submit',  function (e) {
        e.preventDefault();

        // create element
        const value = addForm.querySelector('input[type="text"]').value;
        const li = document.createElement('li');
        const moviename = document.createElement('span');
        const deletebtn = document.createElement('span');

        moviename.textContent = value;
        deletebtn.textContent = 'delete';

        moviename.classList.add('name');
        deletebtn.classList.add('delete');

        li.appendChild(moviename);
        li.appendChild(deletebtn);

        list.appendChild(li)

        addForm.querySelector('input[type="text"]').value = ' ';
    })
})