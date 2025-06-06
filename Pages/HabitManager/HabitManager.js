const openModalBtn = document.querySelector('.HabitAdd__btn');
const modalOverlay = document.getElementById('habitModal');
const closeModalBtn = document.querySelector('.Close__Modal__Btn');
const HabitContent = document.querySelector(".Habit__content");
const AddHabit__btn = document.querySelector(".AddHabit__btn");
const HabitInput = document.querySelector(".HabitInput");

let user = JSON.parse(localStorage.getItem("loginUser")) || {}; // Get user from local storage
const oneDay = 24 * 60 * 60 * 1000;
// Validate habit input
const AddHabit__Verification = (habit) => {
    if (habit.trim() === "") {
        HabitInput.style.borderColor = "red";
        return false;
    }
    HabitInput.style.borderColor = ""; // Reset border if valid
    return true;
};
const CheckHabit = () => {
    const now = Date.now();
    let updated = false; 

    user.habit.forEach((habit) => {
        const timeSinceLastCheck  = now - habit.lastChecked;
        if (timeSinceLastCheck >= oneDay) {
            habit.incompleted += 1;
            habit.lastChecked = now;
            updated = true;
        }
    });

    if (updated) {
        localStorage.setItem("loginUser", JSON.stringify(user));
        localStorage.setItem(user.email, JSON.stringify(user));
    }
};

// Display all habits
const displayHabit = () => {
    CheckHabit()
    HabitContent.innerHTML = ""; // Clear existing habits

    if (user.habit && user.habit.length > 0) {
        user.habit.forEach((item) => {
            const habitDiv = document.createElement("div");
            habitDiv.className = "Habit";
            habitDiv.innerHTML = `
                <p>${item.habitName}</p>
                <div class="HabitBtn"> 
                    <button type="button" class="Btn CompleteBtn" data-habit-name="${item.habitName}">Complete</button>
                    <button type="button" class="Btn DeleteBtn" data-habit-name="${item.habitName}">Delete</button>
                </div>
            `;
            HabitContent.appendChild(habitDiv);
        });
    }
};

// Open modal
openModalBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'grid';
});

// Close modal
closeModalBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});

// Close modal if clicked outside
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
    }
});

// Add new habit
AddHabit__btn.addEventListener("click", (e) => {
    e.preventDefault();
    const HabitInputValue = HabitInput.value.trim();
    const isValid = AddHabit__Verification(HabitInputValue);
    if (!isValid) return;
    const now = new Date()
    const habitInfo = {
        habitName: HabitInputValue,
        createdAt: now.toLocaleString(),
        completed: 0,
        incompleted: 0,
        lastChecked : Date.now()
    };

    user = JSON.parse(localStorage.getItem("loginUser")) || {};
    if (!user.habit) {
        user.habit = [];
    }

    const alreadyExists = user.habit.some(
        (habit) => habit.habitName.toLowerCase() === HabitInputValue.toLowerCase()
    );

    if (alreadyExists) {
        alert("This habit already exists!");
    } else {
        user.habit.push(habitInfo);
        localStorage.setItem("loginUser", JSON.stringify(user));
        localStorage.setItem(user.email, JSON.stringify(user));
        displayHabit();
        HabitInput.value = "";
        modalOverlay.style.display = 'none';
       
    }
});



HabitContent.addEventListener("click", (e) => {
    if (e.target.classList.contains("DeleteBtn")) {
        const clickedHabit = e.target.dataset.habitName;
        user.habit= user.habit.filter((habitData) => habitData.habitName !== clickedHabit)

        localStorage.setItem("loginUser" , JSON.stringify(user))
        localStorage.setItem(user.email , JSON.stringify(user))
      displayHabit(); 
    }
});
HabitContent.addEventListener("click"  , (e) => {
    if (e.target.classList.contains("CompleteBtn")) {
        const clickedHabit = e.target.dataset.habitName;
        const completedHabit = user.habit.find(habitiItem => habitiItem.habitName === clickedHabit)
        if (completedHabit) {
            completedHabit.completed += 1 ;
            completedHabit.lastChecked = Date.now();
             localStorage.setItem("loginUser" , JSON.stringify(user))
             localStorage.setItem(user.email , JSON.stringify(user))
             alert(`Congratulation on completing your Task Habit`) 
            displayHabit();
        }
    

    }
})
// Initial display
displayHabit();
