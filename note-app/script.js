const addBtn = document.getElementById('add');

const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){
    notes.forEach(note=>{
        addNewNote(note);
    })
}

addBtn.addEventListener('click', ()=>{
    addNewNote();
})

function addNewNote(text=''){
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
    <div class="note">
        <div class="tools">
            <button class='edit'><i class="far fa-edit"></i></button>
            <button class='delete'><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main hidden"></div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
    `;
    const delBtn = note.querySelector('.delete');
    const editBtn = note.querySelector('.edit');

    const main=note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    delBtn.addEventListener('click', ()=>{
        note.remove();
    })

    textArea.value = text;

    editBtn.addEventListener('click', ()=>{
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })

    textArea.addEventListener('input',(e)=>{
        const {value} = e.target;
        main.innerHTML = marked(value);
        updateLS();
    })

    document.body.appendChild(note);
}

function updateLS(){
    const notesText = document.querySelectorAll('textarea');
    const notes = [];

    notesText.forEach(note=>{
        notes.push(note.value);
    })
    localStorage.setItem('notes', JSON.stringify(notes));
}