// let addB = document.getElementById('addToDo');
// let con = document.getElementById('toDoContainer');
// let input = document.getElementById('inputField');

// addB.addEventListener('click', function() {
//     var paragraph = document.createElement('p');
//     var bt = document.createElement('button');

//     paragraph.classList.add('paragraph-styling');
//     bt.classList.add('button-styling');

//     paragraph.innerText = input.value;
//     bt.innerText = "edit";

//     con.appendChild(paragraph);
//     con.appendChild(bt);

//     input.value = "";

//     bt2.addEventListener('click', function() {
//         paragraph.style.textDecoration = "line-through";
//     });

//     paragraph.addEventListener('dblclick', function() {
//         con.removeChild(paragraph);
//         con.removeChild(bt);
//     });

//     bt.addEventListener('click', function() {
//         let newInput = document.createElement('input');
//         newInput.type = 'text';
//         newInput.value = paragraph.innerText;

//         let saveBtn = document.createElement('button');
//         saveBtn.innerText = "Save";

//         con.replaceChild(newInput, paragraph);
//         con.replaceChild(saveBtn, bt);

//         saveBtn.addEventListener('click', function() {
//             paragraph.innerText = newInput.value;
//             con.replaceChild(paragraph, newInput);
//             con.replaceChild(bt, saveBtn); 
//         });
//     });
// });



















let addB = document.getElementById('addToDo');
let con = document.getElementById('toDoContainer');
let input = document.getElementById('inputField');

addB.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    var bt = document.createElement('button');
    var bt2 = document.createElement('button');

    paragraph.classList.add('paragraph-styling');
    bt.classList.add('button-styling');
    bt2.classList.add('button-styling');

    paragraph.innerText = input.value;
    bt.innerText = "edit";
    bt2.innerText = "done";

    con.appendChild(paragraph);
    con.appendChild(bt);
    con.appendChild(bt2);

    input.value = "";

    bt2.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
        con.removeChild(bt);
        con.removeChild(bt2);
    });

    paragraph.addEventListener('dblclick', function() {
        con.removeChild(paragraph);
        con.removeChild(bt);
        con.removeChild(bt2);
    });

    bt.addEventListener('click', function() {
        let newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.value = paragraph.innerText;

        let saveBtn = document.createElement('button');
        saveBtn.innerText = "Save";

        con.replaceChild(newInput, paragraph);
        con.replaceChild(saveBtn, bt);

        saveBtn.addEventListener('click', function() {
            paragraph.innerText = newInput.value;
            con.replaceChild(paragraph, newInput);
            con.replaceChild(bt, saveBtn); 
        });
    });
});



















