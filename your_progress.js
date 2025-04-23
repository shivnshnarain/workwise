document.addEventListener('DOMContentLoaded', function() {
   
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        document.getElementById('userName').textContent = userEmail.split('@')[0];
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);
    loadUserData();
    loadPunchData();
    function renderMiniCalendar() {
        const calendarEl = document.getElementById('miniCalendar');
        calendarEl.innerHTML = '';
    
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        days.forEach(day => {
            const dayEl = document.createElement('div');
            dayEl.className = 'calendar-day header';
            dayEl.textContent = day;
            calendarEl.appendChild(dayEl);
        });
    
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
        const nationalHolidays = [4, 14]; 
    
        for (let i = 0; i < firstDay; i++) {
            const emptyEl = document.createElement('div');
            emptyEl.className = 'calendar-day inactive';
            calendarEl.appendChild(emptyEl);
        }
    
        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(currentYear, currentMonth, i);
            const dayOfWeek = date.getDay();
            const dayEl = document.createElement('div');
            dayEl.className = 'calendar-day';
            dayEl.textContent = i;
    
            if (dayOfWeek === 0) {
                dayEl.classList.add('sunday');
            } else if (nationalHolidays.includes(i)) {
                dayEl.classList.add('holiday');
            } else if (i <= now.getDate()) {
                if (Math.random() > 0.7) {
                    dayEl.classList.add('absent');
                } else {
                    dayEl.classList.add('worked');
                }
            }
    
            calendarEl.appendChild(dayEl);
        }
    }
    checkAlerts();
    document.getElementById('logoutBtn').addEventListener('click', function() {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('userEmail');
        window.location.href = 'login.html';
    });
});
