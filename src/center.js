const taskList = []


function Task(title, dueDate, priority, category, description) {
    this.title = title
    this.dueDate = dueDate
    this.priority = priority
    this.category = category
    this.description = description
}

function getValue() {
    const titleInputSelect = document.getElementById('titleInput')
    const title = titleInputSelect.value.trim()
    // console.log(titleInputValue)

    const duedateInputSelect = document.getElementById('dueDateInput')
    const dueDate = duedateInputSelect.value.trim()
    // console.log(dueDateInputValue)

    const priorityInputSelect = document.getElementById('priorityInput')
    const priority = priorityInputSelect.value

    // console.log(priorityInputValue)

    const categoryInputSelect = document.getElementById('categoryInput')
    const category = categoryInputSelect.value.trim()
    // console.log(categoryInputValue)

    const descriptionInputSelect = document.getElementById('descriptionInput')
    const description = descriptionInputSelect.value.trim()
    // console.log(descriptionInputValue)

    const newTask = new Task(title, dueDate, priority, category, description)
    taskList.push(newTask)
    // console.log(taskList)
    return taskList

}


function presentToScreen(taskList) {
    const unOrdered = document.createElement('ul')
    unOrdered.className = 'unOrdered'
    const centerDiv = document.querySelector('.container')
    // centerDiv.textContent = ''
    const head = document.createElement('h1')
    head.textContent = 'Personal Tasks'
    head.id = 'head'
    centerDiv.append(head)

    if (!unOrdered) {
        unOrdered = document.createElement('ul');
        centerDiv.appendChild(unOrdered);
    } else {
        // If there's an existing ul element, clear its content
        unOrdered.innerHTML = '';
    }


    for (let i = 0; i < taskList.length; i++) {
        // console.log(taskList[i])
        // const task = taskList[i];


        let listItem = document.createElement('li')
        listItem.className = 'listItem'

        switch (taskList[i].priority.toLowerCase()) {
            case 'low':
                listItem.style.backgroundColor = 'transparent'; // Set background color for low priority
                break;
            case 'medium':
                listItem.style.backgroundColor = 'lightyellow'; // Set background color for medium priority
                break;
            case 'high':
                listItem.style.backgroundColor = 'lightcoral'; // Set background color for high priority
                break;
            default:
                listItem.style.backgroundColor = 'transparent'; // Default background color
        }

        const titleDivhead = document.createElement("h2");
        titleDivhead.classList.add("titleDivhead")
        titleDivhead.textContent = 'Title'
        titleDivhead.id = 'titleDivhead'


        const titleDiv = document.createElement("h2");
        titleDiv.classList.add("titleH2")
        titleDiv.textContent = taskList[i].title;
        titleDiv.setAttribute("contenteditable", "true"); // Make titleDiv editable
        titleDiv.addEventListener("blur", function () {
            taskList[i].title = titleDiv.textContent; // Update library data when editing is finished
        });
        // displayDiv.appendChild(titleDiv);

        const descDivHead = document.createElement("h2");
        descDivHead.classList.add("descDivHead")
        descDivHead.textContent = 'Description'
        descDivHead.id = 'descDivHead'

        const descDiv = document.createElement("p");
        descDiv.classList.add("descDiv")
        descDiv.textContent = taskList[i].description.split('\n')[0];;
        descDiv.setAttribute("contenteditable", "true")
        descDiv.addEventListener("blur", () => {
            taskList[i].description = descDiv.textContent
        })

        const dateDivTitle = document.createElement("h3");
        dateDivTitle.classList.add("dateDivTitle")
        dateDivTitle.textContent = 'Due on'

        const dateDiv = document.createElement("span");
        dateDiv.classList.add("dateDiv")
        dateDiv.textContent = taskList[i].dueDate;
        dateDiv.setAttribute("contenteditable", "true")
        dateDiv.addEventListener("blur", () => {
            taskList[i].dueDate = dateDiv.textContent
        })

        const dateUp = document.createElement("div")
        dateUp.append(dateDivTitle, dateDiv)
        dateUp.className = 'dateUp'

        // const deleteBtn = document.createElement('button')
        // deleteBtn.textContent = 'delete'
        // deleteBtn.className =

        // new
        const deleteBtn = document.createElement("button")
        deleteBtn.className = 'delete'
        deleteBtn.innerHTML = ''

        const editBtn = document.createElement("button")
        editBtn.className = 'edit'
        editBtn.innerHTML = 'edit'
        // start


        const trashSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        trashSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        trashSvg.setAttribute("viewBox", "0 0 24 24");
        trashSvg.setAttribute("height", "30px"); // Set height
        trashSvg.setAttribute("width", "30px"); // 
        trashSvg.setAttribute("backgroundColor", "steelBlue")
        trashSvg.style.marginLeft = "5px";
        const trashSvg2 = document.createElementNS("http://www.w3.org/2000/svg", "title");
        trashSvg2.textContent = ' delete';
        trashSvg.appendChild(trashSvg2);

        // Create a path element within the SVG
        const svgPathTrash = document.createElementNS("http://www.w3.org/2000/svg", "path");
        svgPathTrash.setAttribute("d", "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z");
        svgPathTrash.style.fill = "#003049";
        trashSvg.appendChild(svgPathTrash);

        deleteBtn.style.display = "flex"; // Use flexbox for layout
        deleteBtn.style.alignItems = "center";

        deleteBtn.append(trashSvg)

        const buttons = document.createElement('div')
        buttons.className = 'buttons'
        buttons.append(deleteBtn, editBtn)
        listItem.append(titleDivhead, titleDiv, descDivHead, descDiv, dateUp, buttons)
        unOrdered.append(listItem)
        console.log(listItem)
        centerDiv.append(unOrdered)

        deleteBtn.addEventListener('click', (e) => {


        })
    }
    // console.log(unOrdered);


}





// function handleCenterDiv() {
//     const taskDiv = document.createElement('div')
//     const taskTitle = document.createElement('div')
//     const taskDescription = document.createElement('div')
//     const taskPriority = document.createElement('div')
//     const taskCategory = document.createElement('div')
//     const taskdate = document.createElement('div')


// }

export { Task, getValue, presentToScreen, taskList }