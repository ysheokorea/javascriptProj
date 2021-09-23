const editBTN = document.querySelector('.edit');
const delBTN = document.querySelector('.trash');
const main = document.querySelector('.main');
const textArea = document.querySelector('textarea');
const addBTN = document.querySelector('.add');

delBTN.addEventListener('click', ()=>{
    note.remove();
});
editBTN.addEventListener('click', ()=>{
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
});

textArea.addEventListener('input', (e)=>{
    const { value } = e.target;
    main.innerHTML = marked(value);
})

addBTN.addEventListener('click', ()=>{
    addNewNote();
})


function addNewNote(){
    const note = document.createElement('div');
    note.classList.add('notes');
    note.innerHTML=`
    <div class="notes">
            <div class="tools">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="trash"><i class="fas fa-trash-alt"></i></button>
                <button class="add"><i class="fas fa-plus"></i></button>
            </div>
            <div class="main hidden"></div>  
            <textarea></textarea>
        </div>
    `;
    const editBTN = note.querySelector('.edit');
    const delBTN = note.querySelector('.trash');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');
    const addBTN = note.querySelector('.add');

    delBTN.addEventListener('click', ()=>{
        note.remove();
    });
    editBTN.addEventListener('click', ()=>{
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });
    
    textArea.addEventListener('input', (e)=>{
        const { value } = e.target;
        main.innerHTML = marked(value);
    })
    addBTN.addEventListener('click', ()=>{
        addNewNote();
    })
       
    document.querySelector('.content-container').appendChild(note);
}
