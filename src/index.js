import logo from './imgs/logo.png'
import './css/index.css'


function handleImage() {
    const header = document.querySelector('.header')
    const img = document.createElement('img');
    img.src = logo;
    img.className = "logo"
    header.append(img)

}

handleImage()

function handleAddBtn() {


    const addBtnDiv = document.createElement('div');
    addBtnDiv.className = 'addBtnDiv'

    const addBtn = document.createElement('button');
    addBtn.innerHTML = 'Add a new Task+'
    addBtn.id = 'addBtn'

    addBtnDiv.append(addBtn)

    const containerDiv = document.querySelector('.container')
    containerDiv.append(addBtnDiv)

}

handleAddBtn()



function createModal() {
    // Create modal container
    const containerDiv = document.querySelector('.container')

    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');

    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    // Create title input
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('placeholder', 'Enter title');
    titleInput.classList.add('modal-input');

    // Create due date input
    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date:';
    const dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.classList.add('modal-input');

    // Create priority input
    const priorityLabel = document.createElement('label');
    priorityLabel.id = 'priorityLabel'
    priorityLabel.textContent = 'Priority:';
    const priorityInput = document.createElement('select');
    priorityInput.classList.add('modal-input');
    priorityInput.id = 'priorityInput'
    const priorityOptions = ['Low', 'Medium', 'High'];
    priorityOptions.forEach(option => {
        const priorityOption = document.createElement('option');
        priorityOption.textContent = option;
        priorityInput.appendChild(priorityOption);
    });

    // Create category input
    const categoryLabel = document.createElement('label');
    categoryLabel.textContent = 'Category:';
    const categoryInput = document.createElement('input');
    categoryInput.setAttribute('type', 'text');
    categoryInput.setAttribute('placeholder', 'Enter category');
    categoryInput.classList.add('modal-input');

    // Create description input
    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    const descriptionInput = document.createElement('textarea');
    descriptionInput.setAttribute('rows', '4');
    descriptionInput.setAttribute('contenteditable', 'true');
    descriptionInput.setAttribute('placeholder', 'Enter description');
    descriptionInput.classList.add('modal-input');
    descriptionInput.id = 'descriptionInput'

    // Create submit button
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.classList.add('modal-button');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.id = 'deleteButton'
    deleteButton.classList.add('modal-button');

    const clseBtn = document.createElement('button');
    clseBtn.textContent = 'X';
    clseBtn.id = 'clseBtn'
    clseBtn.classList.add('modal-button');

    // Append inputs and button to modal content
    modalContent.appendChild(titleLabel);
    modalContent.appendChild(titleInput);
    modalContent.appendChild(dueDateLabel);
    modalContent.appendChild(dueDateInput);
    modalContent.appendChild(priorityLabel);
    modalContent.appendChild(priorityInput);
    modalContent.appendChild(categoryLabel);
    modalContent.appendChild(categoryInput);
    modalContent.appendChild(descriptionLabel);
    modalContent.appendChild(descriptionInput);
    modalContent.appendChild(submitButton);
    modalContent.appendChild(deleteButton);
    modalContent.appendChild(clseBtn);

    // Append modal content to modal container
    modalContainer.appendChild(modalContent);

    // Append modal container to the document body
    containerDiv.append(modalContainer)

    // Close modal when clicking outside of it
    modalContainer.addEventListener('click', (event) => {
        if (event.target === modalContainer) {
            modalContainer.remove();
        }
    });

    clseBtn.addEventListener('click', (event) => {

        modalContainer.remove();

    });

    // Prevent modal content from closing modal when clicked
    modalContent.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Return reference to modal container
    return modalContainer;
}

// Example usage
// createModal();
let addBtn = document.querySelector('#addBtn')

addBtn.addEventListener('click', createModal)

