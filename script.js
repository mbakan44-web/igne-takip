// Configuration
const INTERVAL_DAYS = 28;
const MAX_YEAR = 2030;

// State
let startDate = localStorage.getItem('igne_start_date') || null;

// DOM Elements
const daysLeftEl = document.getElementById('days-left');
const nextDateStrEl = document.getElementById('next-date-str');
const mondayWarningEl = document.getElementById('monday-warning');
const yearSelect = document.getElementById('year-select');
const calendarGrid = document.getElementById('calendar-grid');
const upcomingList = document.getElementById('upcoming-list');
const settingsBtn = document.getElementById('settings-btn');
const settingsModal = document.getElementById('settings-modal');
const startDateInput = document.getElementById('start-date-input');
const saveSettingsBtn = document.getElementById('save-settings');
const closeSettingsBtn = document.getElementById('close-settings');
const alarmOverlay = document.getElementById('alarm-overlay');
const dismissAlarmBtn = document.getElementById('dismiss-alarm');

// Initialize
function init() {
    populateYearSelect();
    if (startDate) {
        updateUI();
    } else {
        settingsModal.classList.remove('hidden');
    }
}

function populateYearSelect() {
    const currentYear = new Date().getFullYear();
    for (let y = currentYear; y <= MAX_YEAR; y++) {
        const opt = document.createElement('option');
        opt.value = y;
        opt.textContent = y;
        yearSelect.appendChild(opt);
    }
    yearSelect.value = currentYear;
}

// Logic
function getNextInjection(start) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let current = new Date(start);
    current.setHours(0, 0, 0, 0);

    // If start date is in the future, first injection is the start date
    if (current > today) return current;

    // Calculate cycles
    while (current < today) {
        current.setDate(current.getDate() + INTERVAL_DAYS);
    }
    return current;
}

function getAllInjections(start, endYear) {
    const dates = [];
    let current = new Date(start);
    current.setHours(0, 0, 0, 0);
    const end = new Date(endYear, 11, 31);

    while (current <= end) {
        dates.push(new Date(current));
        current.setDate(current.getDate() + INTERVAL_DAYS);
    }
    return dates;
}

function updateUI() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const nextDate = getNextInjection(startDate);
    const diffTime = nextDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Update Status Card
    daysLeftEl.textContent = diffDays;
    nextDateStrEl.textContent = nextDate.toLocaleDateString('tr-TR');

    // Monday Check (Every Monday)
    const isMonday = today.getDay() === 1; // 1 is Monday
    if (isMonday) {
        mondayWarningEl.classList.remove('hidden');
    } else {
        mondayWarningEl.classList.add('hidden');
    }

    // Alarm Check (Injection Day)
    if (diffDays === 0) {
        alarmOverlay.classList.remove('hidden');
    }

    renderCalendar();
    renderUpcoming();
}

function renderCalendar() {
    calendarGrid.innerHTML = '';
    const selectedYear = parseInt(yearSelect.value);
    const injections = getAllInjections(startDate, MAX_YEAR);
    
    // Monthly view logic or just list of injection months?
    // For simplicity and user request "2030 takvimi", we show a list of injections for that year
    const yearInjections = injections.filter(d => d.getFullYear() === selectedYear);

    if (yearInjections.length === 0) {
        calendarGrid.innerHTML = '<p style="grid-column: span 7; text-align: center; opacity: 0.5;">Bu yıl için kayıt yok.</p>';
        return;
    }

    yearInjections.forEach(date => {
        const dayEl = document.createElement('div');
        dayEl.className = 'calendar-day injection';
        const monthName = date.toLocaleDateString('tr-TR', { month: 'short' });
        dayEl.innerHTML = `<span>${date.getDate()}</span><small>${monthName}</small>`;
        calendarGrid.appendChild(dayEl);
    });
}

function renderUpcoming() {
    upcomingList.innerHTML = '';
    const injections = getAllInjections(startDate, MAX_YEAR);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcoming = injections.filter(d => d >= today).slice(0, 5);

    upcoming.forEach(date => {
        const item = document.createElement('div');
        item.className = 'list-item';
        const dayName = date.toLocaleDateString('tr-TR', { weekday: 'long' });
        item.innerHTML = `
            <div class="date-box">
                <span class="date-main">${date.toLocaleDateString('tr-TR')}</span>
                <span class="date-sub">${dayName}</span>
            </div>
            <span class="tag pink">İğne Günü</span>
        `;
        upcomingList.appendChild(item);
    });
}

// Events
settingsBtn.onclick = () => settingsModal.classList.remove('hidden');
closeSettingsBtn.onclick = () => settingsModal.classList.add('hidden');

saveSettingsBtn.onclick = () => {
    const val = startDateInput.value;
    if (val) {
        startDate = val;
        localStorage.setItem('igne_start_date', val);
        settingsModal.classList.add('hidden');
        updateUI();
    }
};

dismissAlarmBtn.onclick = () => {
    alarmOverlay.classList.add('hidden');
    // Optional: Auto-update to next cycle by saving today + 28 as new reference?
    // No, keep original ref to maintain the strictly 28-day chain.
};

yearSelect.onchange = renderCalendar;

// Start the app
init();
