function main() {
    // Select elements
    const inputElement = document.querySelector(".addt");
    const addBtn = document.querySelector(".add-btn");
    const foodList = document.querySelector(".food-list");
    let clearElement;
    let foods = JSON.parse(localStorage.getItem("foods")) || [];
    // Add items to localStorage
    function addItems() {
        if (!inputElement.value.trim()) return;
        foods = JSON.parse(localStorage.getItem("foods")) || [];
        foods.push(inputElement.value.trim());
        localStorage.setItem("foods", JSON.stringify(foods));
        inputElement.value = ""; // Clear input
        creatElement(foods)
    }
    creatElement(foods)
    function creatElement(item , index) {
        foodList.innerHTML='';
        item.forEach((item , index) => {
                    const li = document.createElement("li");
        const p = document.createElement("p");
        const btn = document.createElement("button");
        const img = document.createElement("img");
            clearElement = btn;
        // class
        li.classList.add("card");
        btn.classList.add("btn")
        btn.classList.add("clear-btn")
        //attrbute
        img.setAttribute("src","./images/icons8-delete.svg")
        //
        li.append(p);
        btn.append(img);
        li.append(btn);
        foodList.append(li)
        //
        p.innerText= item;


        clearElement.addEventListener("click",()=>{
            foods.splice(index , 1)
            localStorage.setItem( "foods" ,JSON.stringify(foods))
            creatElement(foods)
        })
        });

    }

    // Event listeners
    addBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Correct method name
        addItems();
    });
    inputElement.addEventListener("keypress", (e)=>{
        if(e.key === "Enter") {
            addItems()
        }
    })
}

document.addEventListener("DOMContentLoaded", main);