const addBtn = document.querySelector('#btn'),
      nameDo = document.querySelector('#inName'),
      descrDo = document.querySelector('#inDescr'),
      list = document.querySelector('.todolist-wrapper');
let   toDoList = [];
 // Поиск данных в локальном хранилизе и записывание его в массив
addEventListener('DOMContentLoaded', () => {
    toDoList = JSON.parse(localStorage.getItem('1') || []);
    getDoList();
});
 // Формирование списка задач на странице из созданного массива объектов
function getDoList() {
    list.innerHTML='';
    toDoList.forEach((element) => {
        const elementList = document.createElement('div');
        elementList.classList.add('list__item');
        elementList.innerHTML = `<div class="wrapper"><div class="item-title">${element.name}</div><a class="item-delete"><div></div><div></div></a></div>`;
        if (element.descr.length > 0) { 
            elementList.innerHTML += `<div class="descr_todo">${element.descr}</div>`
        }
        list.append(elementList);
    });
    deleteElement();    
    localStorage.setItem('1', JSON.stringify(toDoList));
}
 // Добавление задачи на лист по нажатию
function addToListOnEnter(e) {
    if(e.keyCode == 13){
        console.log(e.keyCode);
        e.preventDefault();
        submit();
    }
}
nameDo.addEventListener('keydown', addToListOnEnter);
descrDo.addEventListener('keydown', addToListOnEnter);

 // Ввод объекта в массив задач
function submit() {
    if (nameDo.value) {
        toDoList.push({name: nameDo.value, descr: descrDo.value});
    } else if (!nameDo.value) {
        alert('Введите имя задачи');
    }
    getDoList();
    nameDo.value = '';
    descrDo.value = '';
}
 // Привязка функции ввода объекта в массив задач по нажатию лкм по кнопке
addBtn.addEventListener('click', submit);
 // Функция удаления элемента
function deleteElement() {
    if (list.innerHTML == '') {
        list.innerHTML = `<div class="listnull">Список пуст...</div>`;
    }
    document.querySelectorAll('.item-delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
        toDoList.splice(i, 1);
        getDoList();
        });
    }); 
}

