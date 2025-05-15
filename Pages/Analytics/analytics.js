const Text_analytics = document.querySelector(".Text_analytics")




const user = JSON.parse(localStorage.getItem("loginUser"))

const displayAnalytics = () => {
    user.habit.forEach(element => {
      const Analytics = document.createElement("div");
      Analytics.className= "analytic__Card"
      Analytics.innerHTML = `
            <h3>username : ${user.username}</h3>
            <p>your Task : ${element.habitName}</p>
            <p>for ${element.incompleted + element.completed} days you have : ${element.incompleted} uncomplete and ${element.completed} complete</p>
            <p> Last CheckUp is : ${new Date(element.lastChecked).toLocaleString()} </p>
      `
        Text_analytics.appendChild(Analytics)
    });
    
}


displayAnalytics()