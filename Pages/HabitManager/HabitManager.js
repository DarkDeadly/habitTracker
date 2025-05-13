const openModalBtn = document.querySelector('.HabitAdd__btn');
const modalOverlay = document.getElementById('habitModal');
const closeModalBtn = document.querySelector('.Close__Modal__Btn');
const HabitContent = document.querySelector(".Habit__content");
const AddHabit__btn = document.querySelector(".AddHabit__btn");
const HabitInput = document.querySelector(".HabitInput");
let user = JSON.parse(localStorage.getItem("loginUser")) || {}; // Local storage value

const AddHabit__Verification = (habit) => {
    if (habit == "") {
        HabitInput.style.borderColor = "red";
        return false;
    }
    return true;
};

const displayHabit = () => {
    HabitContent.innerHTML = ""; // Clear existing habits before displaying new ones

    if (user.habit && user.habit.length > 0) {
        user.habit.forEach((item) => {
            const habitDiv = document.createElement("div");
            habitDiv.className = "Habit";
            habitDiv.innerHTML = `
                <p>${item.habitName}</p>
                <div class = "HabitBtn">
                <button type = "button" class = "Btn">Complete</button>
                <button type = "button" class = "Btn DeleteBtn">Delete</button>
                </div>
            `;
            HabitContent.appendChild(habitDiv);
        });
    }
};

openModalBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'grid';
});

closeModalBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});

// Close modal if clicked outside
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
    }
});

AddHabit__btn.addEventListener("click", (e) => {
    e.preventDefault();

    const HabitInputValue = HabitInput.value;

    const HabitVerif = AddHabit__Verification(HabitInputValue);
    if (HabitVerif) {
        const habitInfo = {
            habitName: HabitInputValue,
            createdAt: Date.now().toString(),
            completed: 0,
            incompleted: 0,
        };

        // Ensure user data is up to date
        user = JSON.parse(localStorage.getItem("loginUser")) || {};
        if (!user.habit) {
            user.habit = [];
        }

        const alreadyExists = user.habit.some(
            (habit) => habit.habitName.toLowerCase() === HabitInputValue.toLowerCase()
        );

        if (!alreadyExists) {
            user.habit.push(habitInfo); // Add the new habit
            // Save updated user data to local storage
            localStorage.setItem("loginUser", JSON.stringify(user));
            localStorage.setItem(user.email, JSON.stringify(user));

            displayHabit(); // Directly call to update the habit list
            HabitInput.value = ""; // Clear the input field after adding the habit
        } else {
            alert("This habit already exists!");
        }
    }
    modalOverlay.style.display = 'none';
});

// Initial call to display any existing habits
displayHabit();
