//add an eventListener to the from
const form = document.querySelector('#itemForm'); // select form
const itemInput = document.querySelector('#itemInput'); // select input box from form
const itemList = document.querySelector('.item-list'); // options for the items 
const feedback = document.querySelector('.feedback'); // answers from the list 
const clearButton = document.querySelector('#clear-list'); // buttong to delete items 

// Creating the list for the items 
let todoItems = [];

// This function will help us for things to do in with the items. 
const handleItem = function(itemName){

    const items = itemList.querySelectorAll('.item');
    // This is the loop for the things to work such as completing the event, edit or delete. 
    items.forEach(function(item){
        
        if(item.querySelector('.item-name').textContent === itemName){
            //complete event listener for the item in the list 
            item.querySelector('.complete-item').addEventListener('click', function(){
                item.querySelector('.item-name').classList.toggle('completed');
                this.classList.toggle('visibility');
            });
            //This is so the person can edit the items
            item.querySelector('.edit-item').addEventListener('click', function(){
                itemInput.value = itemName;
                itemList.removeChild(item);

                todoItems = todoItems.filter(function(item){
                    return item !== itemName;
                });
            });
            // this is to delte the item 
            item.querySelector('.delete-item').addEventListener('click', function(){
                debugger;
                itemList.removeChild(item);

                todoItems = todoItems.filter(function(item){
                    return item !== itemName;
                });

                
            })
        }
    })
}
// This function is to remove the items and we are going to call this function in the future 
const removeItem = function(item){
    console.log(item);
    const removeIndex = (todoItems.indexOf(item));
    console.log(removeIndex);
    todoItems.splice(removeIndex, 1);
}

// we are creating this function and it inserts the resulting nodes into the DOM tree at a specified position
const getList = function(todoItems){
    itemList.innerHTML = '';

        todoItems.forEach(function(item){
            itemList.insertAdjacentHTML('beforeend', `<div class="item my-3"><h5 class="item-name text-capitalize">${item}</h5><div class="item-icons"><a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a><a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a><a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a></div></div>` );

            handleItem(item);
        });
}

// we are using this function to create the local storage, meaning that 
// if there are not items the list will be empty, otherwise it will get append in todoItems
const getLocalStorage = function(){

    const todoStorage = localStorage.getItem('todoItems');
    if (todoStorage === 'undefined' || todoStorage === null){
        todoItems = [];
    } else {
        todoItems = JSON.parse(todoStorage);
        getList(todoItems);
    }
}
// we are converting the information to a JSON string listr
const setLocalStorage = function(todoItems){
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

// we are creating a local storage from the website
getLocalStorage();

//This is where we are adding the items in the list. 
form.addEventListener('submit', function(e){ 
    e.preventDefault();
    const itemName = itemInput.value;
    // This is just in case the person does not type the item correctly. 
    if (itemName.length === 0){
        feedback.innerHTML = 'Please Enter Valid Value';
        feedback.classList.add('showItem', 'alert-danger');
        setTimeout(
            function(){
                feedback.classList.remove('showItem');
                }, 3000);
    // this is where we are appending the items in the list
    } else {
        todoItems.push(itemName);
        setLocalStorage(todoItems);
        getList(todoItems);
    }
    
    itemInput.value = '';

    });

    //clear all items from the list with the button delete
clearButton.addEventListener('click', function(){
    todoItems = [];
    localStorage.clear();
    getList(todoItems);
})



  

