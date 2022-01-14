const tasksDOM = document.querySelector(".product")
const shoes = async() => {
    const{ data:{task},} =await axios.get("http://localhost:5000/api/v1/product")
    try{
        if(task.length < 1){
            tasksDOM.innerHTML = '<h5 class="empty-list"> No Tasks in your List</h5>'
            return;
        }
        const allTask = task.map((task) => {
            const{name, price, rating, createdAt, company} = task;
            return ` <div class="folder">
            <div class="see0">
                <p class="see1" id="nameSize">${name}</p>
                <div class="see2">
                    <div>${company}</div>
                    <div>${price}</div>
                </div>
                <div class="see3">
                    <div>${rating}</div>
                    <div>${createdAt}</div>
                </div>
            </div>
            <div class="see0">
                <p class="see1" id="nameSize">${name}</p>
                <div class="see2">
                    <div>${company}</div>
                    <div>${price}</div>
                </div>
                <div class="see3">
                    <div>${rating}</div>
                    <div>${createdAt}</div>
                </div>
            </div>
        </div>`
        }).join("");
        tasksDOM.innerHTML = allTask;
    } catch(error){
        tasksDOM.innerHTML = `<h5 class="empty-list">There was an error, please try again later ...${error}</h5>`
    }
}

shoes()