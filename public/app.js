const cafeTable = document.querySelector('#cafe-table');
const form = document.querySelector("#add-cafe-form");
// create element & render 
function rendercofe(doc) {
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let tr = document.createElement("tr");
    tr.setAttribute('data-id', doc.id);
    td1.textContent = doc.data().name;
    td2.textContent = doc.data().money;
    td3.textContent = doc.data().hot;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    // delete 
    let cross = document.createElement('div');
    cross.textContent = 'x';
    tr.appendChild(cross);
    cross.addEventListener('click', (test) => {
        test.stopPropagation();
        let id = test.target.parentElement.getAttribute('data-id');
        console.log(id);
        db.collection('Cafe').doc(id).delete();
    });
    //

    cafeTable.appendChild(tr);
}

// getting data 
db.collection('Cafe').get().then(data => {
    data.docs.forEach(doc => {
        rendercofe(doc);
    });
});
// 

// add data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('Cafe').add({
        name: form.name.value,
        money: form.money.value,
        hot: form.hot.value
    });
    form.name.value = '';
    form.money.value = '';
    form.hot.value = '';
});
//