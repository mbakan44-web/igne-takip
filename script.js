// Mesaj Listesi
const messages = [
    "💧 Bugün yeterince su içmeyi unutma!",
    "✨ Harika bir gün dilerim, her şey yolunda gidecek.",
    "🚫 Bugün polenler yoğun olabilir, dikkatli ol.",
    "🍎 Sağlıklı beslenmek vücudunu güçlendirir.",
    "🧴 Elleri sık sık yıkamak mikroplardan korur.",
    "🌈 Gülümsemek en güzel ilaçtır!",
    "🚶‍♂️ Kısa bir yürüyüş sana çok iyi gelebilir.",
    "🧸 Kızın için en iyisini yapıyorsun, unutma.",
    "☀️ Güneşli havalarda güneş kremi kullanmayı ihmal etme.",
    "🥗 Sebze ağırlıklı beslenmek enerji verir.",
    "😴 Düzenli uyku bağışıklık sistemini destekler.",
    "📚 Bugün kızına bir masal okumaya ne dersin?",
    "💖 Kendine zaman ayırmayı unutma, sen değerlisin.",
    "🧼 Temiz hava her zaman iyi gelir, odayı havalandır.",
    "🧘‍♀️ Derin bir nefes al ve rahatla.",
    "🍯 Bir kaşık bal boğazı yumuşatır.",
    "🥛 Kalsiyum kemik gelişimi için çok önemlidir.",
    "🍓 Mevsim meyveleri en sağlıklı atıştırmalıktır.",
    "🦋 Değişim yavaş yavaş gerçekleşir, sabırlı ol.",
    "🌸 Bahar aylarında alerjilere karşı tedbirli ol.",
    "🎨 Birlikte resim yapmak hayal gücünü geliştirir.",
    "🎶 Müzik dinlemek ruhu dinlendirir.",
    "🚲 Açık havada hareket etmek zinde tutar.",
    "🏠 Evinizdeki huzur en büyük hazinedir.",
    "🧠 Yeni bir şeyler öğrenmek zihni genç tutar.",
    "🍵 Bitki çayları sakinleştirici etki yapar.",
    "🦷 Diş fırçalamayı eğlenceli bir oyuna dönüştür.",
    "🌻 Her zorluktan sonra bir kolaylık vardır.",
    "🧡 Sevgi paylaştıkça çoğalır.",
    "💪 Güçlü bir bağışıklık için C vitamini şart.",
    "🥤 Şekerli içeceklerden uzak durmaya çalış.",
    "🧶 Hobilerinle ilgilenmek stresi azaltır.",
    "🧸 Kızının en sevdiği oyuncağıyla oyun kur.",
    "🥧 Ev yapımı yiyecekler her zaman daha sağlıklıdır.",
    "🚿 Ilık bir duş kasları rahatlatır.",
    "🛹 Hareketli yaşam sağlıklı bir kalbin anahtarıdır.",
    "🪁 Gökyüzüne bakmak ufku açar.",
    "🎈 Küçük mutlulukların peşinden git.",
    "🧄 Sarımsak doğal bir antibiyotiktir.",
    "🧅 Soğan bağışıklığı güçlendiren mucizevi bir besindir.",
    "🥜 Kuruyemişler zihin gelişimi için faydalıdır.",
    "🥦 Brokoli tam bir vitamin deposudur.",
    "🥕 Havuç göz sağlığı için vazgeçilmezdir.",
    "🥑 Avokado sağlıklı yağlar içerir.",
    "🥚 Yumurta en kaliteli protein kaynağıdır.",
    "🐟 Haftada bir balık yemek beyin için iyidir.",
    "🌾 Tam tahıllı ürünler tokluk hissi verir.",
    "🍬 Paketli gıdaların içeriğine dikkat et.",
    "🥛 Yoğurt sindirim sistemi için dosttur.",
    "🧀 Peynir kemikleri güçlendiren kalsiyumdur.",
    "🧤 Soğuk havalarda ellerini ve boynunu koru.",
    "🧣 Atkı takmak boğaz ağrısını önler.",
    "☔ Yağmurlu günlerde sıcacık bir çorba iç.",
    "⚡ Enerjini yüksek tutmak için olumlu düşün.",
    "🌟 Bugün senin parladığın gün olsun.",
    "🤝 Yardımlaşmak dünyayı güzelleştirir.",
    "🕊️ İç huzurunu korumaya odaklan.",
    "🕰️ Zamanı verimli kullanmak stresi önler.",
    "📱 Ekran süresini kısıtlamak gözleri dinlendirir.",
    "🌳 Doğa ile iç içe olmak negatif enerjiyi atar.",
    "🐚 Deniz havası ciğerlere iyi gelir.",
    "⛰️ Temiz dağ havası zihni berraklaştırır.",
    "🏕️ Doğada vakit geçirmek ruhu tazeler.",
    "🎢 Hayat iniş ve çıkışlarla doludur, tadını çıkar.",
    "🎡 Eğlenmek için her zaman bir neden bulabilirsin.",
    "🎁 Beklenmedik sürprizler günü güzelleştirir.",
    "🕯️ Loş bir ortamda dinlenmek uykuyu getirir.",
    "🛌 Yatağa girmeden önce tüm teknolojik cihazları bırak.",
    "🥛 Yatmadan önce içilen ılık süt rahatlatır.",
    "💤 Kaliteli bir uyku için oda karanlık olmalı.",
    "⏰ Sabah erken kalkmak güne enerjik başlatır.",
    "🍳 Kahvaltı günün en önemli öğünüdür.",
    "☕ Bir fincan kahve odaklanmayı artırır.",
    "🍃 Nane çayı mideyi rahatlatır.",
    "🍋 Limonlu su vücudu toksinlerden arındırır.",
    "🥥 Hindistan cevizi yağı cildi besler.",
    "🥨 Ara öğünlerde sağlıklı seçimler yap.",
    "🍫 Bitter çikolata mutluluk hormonu salgılatır.",
    "🍿 Film izlerken mısırı yağsız patlatmayı dene.",
    "🍧 Dondurma yerken aşırıya kaçmamaya dikkat.",
    "🍇 Üzüm kan yapıcı özelliğe sahiptir.",
    "🍈 Kavun yaz aylarında harika bir ferahlatıcıdır.",
    "🍉 Karpuz vücudun su ihtiyacını karşılar.",
    "🍑 Şeftali lifli yapısıyla sindirime yardımcıdır.",
    "🍒 Kiraz antioksidan kaynağıdır.",
    "🍍 Ananas ödem atmaya yardımcı olur.",
    "🥝 Kivi C vitamini bombasıdır.",
    "🍅 Domates cildi güneşin etkilerinden korur.",
    "🥔 Patatesi haşlanmış olarak tüketmek daha iyidir.",
    "🍆 Patlıcan lif açısından zengindir.",
    "🥒 Salatalık ferahlatıcı ve düşük kalorilidir.",
    "🫑 Biberler bağışıklığı destekleyen vitaminler içerir.",
    "🌿 Maydanoz vücudu arındırır.",
    "☘️ Taze otlar yemeklere lezzet ve sağlık katar.",
    "🥣 Kışın mercimek çorbası içmek şifadır.",
    "🥢 Farklı kültürlerin mutfaklarını dene.",
    "🥧 Anne eli değmiş gibi lezzetli ve sağlıklı yemekler yap.",
    "🥘 Tencere yemekleri her zaman daha besleyicidir.",
    "🥡 Dışarıdan yemek yerine evde hazırlamayı seç.",
    "🥤 Taze sıkılmış meyve suları enerji verir.",
    "🍹 Alkolsüz ve şekersiz kokteyller hazırla.",
    "🍦 Evde meyveli yoğurt yaparak dondurmaya alternatif üret.",
    "🧁 Şeker miktarını azaltarak tatlılar yap.",
    "🍭 Şekerlemeler yerine kuru meyveleri tercih et.",
    "🍬 Bayram tadında her günü kutla.",
    "💖 Sen harika bir ebeveynsin, kendine güven.",
    "🌈 Yarın bugün olduğundan daha güzel olacak."
];

// Configuration
const INTERVAL_DAYS = 28;
const MAX_YEAR = 2030;

// Bildirim İzni ve Kaydı
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}

function sendNotification(title, body) {
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.ready.then(registration => {
            registration.showNotification(title, {
                body: body,
                icon: 'https://cdn-icons-png.flaticon.com/512/2966/2966327.png',
                vibrate: [200, 100, 200],
                tag: 'igne-takip-bildirim'
            });
        });
    }
}

// State
let startDate = localStorage.getItem('igne_start_date') || null;

// DOM Elements
const daysLeftEl = document.getElementById('days-left');
const nextDateStrEl = document.getElementById('next-date-str');
const tickerContent = document.getElementById('ticker-content');
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
    startTicker();
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

function startTicker() {
    let index = 0;
    const updateTicker = () => {
        tickerContent.style.animation = 'none';
        tickerContent.offsetHeight; // Trigger reflow
        tickerContent.style.animation = 'slideUp 0.5s ease-out';
        tickerContent.textContent = messages[index];
        index = (index + 1) % messages.length;
    };
    updateTicker();
    setInterval(updateTicker, 6000); // 6 saniyede bir değişir
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
        sendNotification("Haftalık Hatırlatma", "Bugün Pazartesi, kızınızın aşısını vurdurmayı unutmayın!");
    } else {
        mondayWarningEl.classList.add('hidden');
    }

    // Alarm Check (Injection Day)
    if (diffDays === 0) {
        alarmOverlay.classList.remove('hidden');
        sendNotification("ACİL: İĞNE GÜNÜ!", "Lütfen bugün kızınızın iğnesini yaptırmayı unutmayın.");
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

const enableNotificationsBtn = document.getElementById('enable-notifications');

// Events
settingsBtn.onclick = () => settingsModal.classList.remove('hidden');
closeSettingsBtn.onclick = () => settingsModal.classList.add('hidden');

enableNotificationsBtn.onclick = () => {
    if (!("Notification" in window)) {
        alert("Bu tarayıcı bildirimleri desteklemiyor.");
        return;
    }
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            alert("Bildirimler başarıyla etkinleştirildi!");
            sendNotification("Tebrikler!", "Bildirimler artık aktif. İğne günlerinde buradan uyarılacaksınız.");
        } else {
            alert("Bildirim izni reddedildi. Lütfen tarayıcı ayarlarından izin verin.");
        }
    });
};

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
