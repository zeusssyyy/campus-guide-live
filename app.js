// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Interactive Map Logic ---
    const hotspots = document.querySelectorAll('.hotspot');
    const mapInfoPanel = document.getElementById('map-info');

    hotspots.forEach(spot => {
        spot.addEventListener('click', () => {
            // Remove active class from all
            hotspots.forEach(h => {
                h.style.borderColor = 'var(--accent-secondary)';
                h.querySelector('i').style.color = 'var(--accent-secondary)';
                h.style.background = 'var(--bg-glass)';
            });

            // Add active styles to clicked
            spot.style.borderColor = 'var(--accent-primary)';
            spot.querySelector('i').style.color = '#fff';
            spot.style.background = 'var(--accent-primary)';

            // Update info panel
            const title = spot.getAttribute('data-title');
            const desc = spot.getAttribute('data-desc');

            // Animate transition
            mapInfoPanel.style.opacity = 0;
            
            setTimeout(() => {
                mapInfoPanel.innerHTML = `
                    <h3 style="color: var(--accent-primary); font-size: 2.5rem;">${title}</h3>
                    <p style="font-size: 1.1rem;">${desc}</p>
                    <button class="btn btn-primary" style="margin-top: 20px;">Explore Virtual Tour</button>
                `;
                mapInfoPanel.style.opacity = 1;
                mapInfoPanel.style.transition = 'opacity 0.3s ease';
            }, 300);
        });
    });

    // --- Locations Filter Logic ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const locationCards = document.querySelectorAll('.location-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            // Filter cards
            locationCards.forEach(card => {
                if (filterValue === 'all' || card.classList.contains(filterValue)) {
                    card.style.display = 'block';
                    // Trigger reflow for animation
                    void card.offsetWidth;
                    card.style.opacity = 1;
                    card.style.transform = 'scale(1)';
                } else {
                    card.style.opacity = 0;
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // --- Turn-by-Turn Navigation Logic ---
    const navigationData = {
        'central': [
            { title: "Step 1", desc: "Enter through gate 9", img: "assets/routes/central/enter through gate 9.jpeg" },
            { title: "Step 2", desc: "Go straight after entering", img: "assets/routes/central/go straight after entering .jpeg" },
            { title: "Step 3", desc: "Go straight", img: "assets/routes/central/go straight (1).jpeg" },
            { title: "Step 4", desc: "Go straight", img: "assets/routes/central/go straight(2).jpeg" },
            { title: "Step 5", desc: "Go straight", img: "assets/routes/central/go straight(3).jpeg" },
            { title: "Step 6", desc: "Go straight crossing cme and go straight", img: "assets/routes/central/go straight crossing cme and go straight.jpeg" },
            { title: "Step 7", desc: "Go straight crossing the garden on your left", img: "assets/routes/central/go straight crossing the garden on your left.jpeg" },
            { title: "Step 8", desc: "Turn left after the upcoming speed breaker on the road", img: "assets/routes/central/turn left after the upcoming speed breaker on the road.jpeg" },
            { title: "Step 9", desc: "Go towards this building and on its left side and central building is in front of yu", img: "assets/routes/central/go towards this building and on its left side and central building is in front of yu.jpeg" }
        ],
        'cme': [
            { title: "Step 1", desc: "Gate 9", img: "assets/routes/cme/gate 9.jpeg" },
            { title: "Step 2", desc: "Path after crossing gate 9", img: "assets/routes/cme/path after crossing gate 9.jpeg" },
            { title: "Step 3", desc: "Cme will be on your left", img: "assets/routes/cme/cme will be on your left.jpeg" },
            { title: "Step 4", desc: "Cme will be on your left", img: "assets/routes/cme/cme will be on your leftt.jpeg" }
        ],
        'ict': [
            { title: "Step 1", desc: "Enter through gate 9", img: "assets/routes/ict/enter through gate 9.jpeg" },
            { title: "Step 2", desc: "Go straight after entering", img: "assets/routes/ict/go straight after entering .jpeg" },
            { title: "Step 3", desc: "Go straight", img: "assets/routes/ict/go straight (1).jpeg" },
            { title: "Step 4", desc: "Go straight", img: "assets/routes/ict/go straight(2).jpeg" },
            { title: "Step 5", desc: "Go straight", img: "assets/routes/ict/go straight(3).jpeg" },
            { title: "Step 6", desc: "Go straight crossing cme and go straight", img: "assets/routes/ict/go straight crossing cme and go straight.jpeg" },
            { title: "Step 7", desc: "Go straight crossing the garden on your left", img: "assets/routes/ict/go straight crossing the garden on your left.jpeg" },
            { title: "Step 8", desc: "Go straight crossing the building on your left", img: "assets/routes/ict/go straight crossing the building on your left.jpeg" },
            { title: "Step 9", desc: "Go straight crossing the second garden on your left", img: "assets/routes/ict/go straight crossing the second garden on your left.jpeg" },
            { title: "Step 10", desc: "Turn left from here", img: "assets/routes/ict/turn left from here.jpeg" },
            { title: "Step 11", desc: "Go straight from here", img: "assets/routes/ict/go straight from here.jpeg" },
            { title: "Step 12", desc: "Then after a few meters you will find the ict building on your right", img: "assets/routes/ict/then after a few meters you will find the ict building on your right.jpeg" }
        ],
        'library': [
            { title: "Step 1", desc: "Enter through gate 9", img: "assets/routes/library/enter through gate 9.jpeg" },
            { title: "Step 2", desc: "Go straight after entering", img: "assets/routes/library/go straight after entering .jpeg" },
            { title: "Step 3", desc: "Go straight", img: "assets/routes/library/go straight (1).jpeg" },
            { title: "Step 4", desc: "Go straight", img: "assets/routes/library/go straight(2).jpeg" },
            { title: "Step 5", desc: "Go straight", img: "assets/routes/library/go straight(3).jpeg" },
            { title: "Step 6", desc: "Go straight crossing cme and go straight", img: "assets/routes/library/go straight crossing cme and go straight.jpeg" },
            { title: "Step 7", desc: "Go straight crossing the garden on your left", img: "assets/routes/library/go straight crossing the garden on your left.jpeg" },
            { title: "Step 8", desc: "Go straight crossing the building on your left", img: "assets/routes/library/go straight crossing the building on your left.jpeg" },
            { title: "Step 9", desc: "Turn left after the upcoming speed breaker on the road", img: "assets/routes/library/turn left after the upcoming speed breaker on the road.jpeg" },
            { title: "Step 10", desc: "Go towards this building and on its left side youll find the entrance to the librarry", img: "assets/routes/library/go towards this building and on its left side youll find the entrance to the librarry.jpeg" },
            { title: "Step 11", desc: "This is the entrance to the library", img: "assets/routes/library/this is the entrance to the library.jpeg" },
            { title: "Step 12", desc: "Go down the stairs", img: "assets/routes/library/go down the stairs.jpeg" },
            { title: "Step 13", desc: "Keep your bags inside this baggage counter", img: "assets/routes/library/keep your bags inside this baggage counter .jpeg" },
            { title: "Step 14", desc: "And enjoy the knowledge", img: "assets/routes/library/and enjoy the knowledge .jpeg" }
        ],
        'canteen': [
            { title: "Step 1", desc: "Enter through gate 9", img: "assets/routes/canteen/enter through gate 9.jpeg" },
            { title: "Step 2", desc: "Go straight after entering", img: "assets/routes/canteen/go straight after entering .jpeg" },
            { title: "Step 3", desc: "Go straight", img: "assets/routes/canteen/go straight (1).jpeg" },
            { title: "Step 4", desc: "Go straight", img: "assets/routes/canteen/go straight(2).jpeg" },
            { title: "Step 5", desc: "Go straight", img: "assets/routes/canteen/go straight(3).jpeg" },
            { title: "Step 6", desc: "Go straight crossing cme and go straight", img: "assets/routes/canteen/go straight crossing cme and go straight.jpeg" },
            { title: "Step 7", desc: "Go straight crossing the garden on your left", img: "assets/routes/canteen/go straight crossing the garden on your left.jpeg" },
            { title: "Step 8", desc: "Go straight crossing the building on your left", img: "assets/routes/canteen/go straight crossing the building on your left.jpeg" },
            { title: "Step 9", desc: "Go straight crossing the second garden on your left", img: "assets/routes/canteen/go straight crossing the second garden on your left.jpeg" },
            { title: "Step 10", desc: "Keep going straight", img: "assets/routes/canteen/keep going straight.jpeg" },
            { title: "Step 11", desc: "Keep going straight crossing the heritage academy on your left", img: "assets/routes/canteen/keep going straight crossing the heritage academy on your left.jpeg" },
            { title: "Step 12", desc: "Keep going straight along the ground", img: "assets/routes/canteen/keep going straight along the ground.jpeg" },
            { title: "Step 13", desc: "Take a right from here", img: "assets/routes/canteen/take a right from here.jpeg" },
            { title: "Step 14", desc: "And take a left from here", img: "assets/routes/canteen/and take a left from here.jpeg" },
            { title: "Step 15", desc: "Go straight for a few meters and you will find the canteen on your right", img: "assets/routes/canteen/go straight for a few meters and you will find the canteen on your right.jpeg" }
        ]
    };


    const routeSelect = document.getElementById('route-select');
    const navViewer = document.getElementById('nav-viewer');
    const navPlaceholder = document.getElementById('nav-placeholder');
    
    const navImg = document.getElementById('nav-step-img');
    const navCounter = document.getElementById('nav-step-counter');
    const navTitle = document.getElementById('nav-step-title');
    const navDesc = document.getElementById('nav-step-desc');
    const navDots = document.getElementById('nav-progress-dots');
    
    const btnPrev = document.getElementById('nav-prev-btn');
    const btnNext = document.getElementById('nav-next-btn');

    let currentRoute = null;
    let currentStepIndex = 0;

    function renderNavStep() {
        if (!currentRoute) return;
        const steps = navigationData[currentRoute];
        const step = steps[currentStepIndex];

        // Animate image transition
        navImg.style.opacity = 0;
        setTimeout(() => {
            navImg.src = step.img;
            navImg.style.opacity = 1;
        }, 300);

        navTitle.textContent = step.title;
        navDesc.textContent = step.desc;
        navCounter.textContent = `Step ${currentStepIndex + 1} of ${steps.length}`;

        // Update Buttons
        btnPrev.disabled = currentStepIndex === 0;
        
        if (currentStepIndex === steps.length - 1) {
            btnNext.innerHTML = `<i class='bx bx-check-circle'></i> Finish`;
            btnNext.classList.remove('btn-primary');
            btnNext.classList.add('btn-secondary');
        } else {
            btnNext.innerHTML = `Next <i class='bx bx-right-arrow-alt'></i>`;
            btnNext.classList.remove('btn-secondary');
            btnNext.classList.add('btn-primary');
        }

        // Update Dots
        Array.from(navDots.children).forEach((dot, index) => {
            dot.classList.toggle('active', index === currentStepIndex);
        });
    }

    routeSelect.addEventListener('change', (e) => {
        currentRoute = e.target.value;
        currentStepIndex = 0;
        
        const steps = navigationData[currentRoute];
        
        // Generate Dots
        navDots.innerHTML = '';
        steps.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.className = 'nav-dot';
            if (i === 0) dot.classList.add('active');
            navDots.appendChild(dot);
        });

        navPlaceholder.style.display = 'none';
        navViewer.style.display = 'block';
        
        renderNavStep();
    });

    btnNext.addEventListener('click', () => {
        const steps = navigationData[currentRoute];
        if (currentStepIndex < steps.length - 1) {
            currentStepIndex++;
            renderNavStep();
        } else {
            // Finish state - reset
            routeSelect.value = '';
            currentRoute = null;
            navViewer.style.display = 'none';
            navPlaceholder.style.display = 'block';
            
            // Scroll to top of section
            document.getElementById('navigation').scrollIntoView({ behavior: 'smooth' });
        }
    });

    btnPrev.addEventListener('click', () => {
        if (currentStepIndex > 0) {
            currentStepIndex--;
            renderNavStep();
        }
    });

    // --- Dynamic Class Timings Logic ---
    const routinesData = {
        cse: {
            sections: ["A", "B", "C"],
            schedule: {
                A: {
                    monday: [
                        { time: "09:00 AM - 11:00 AM", subject: "Gr1: DAA Lab / Gr2: OOP Lab", room: "Lab" },
                        { time: "01:00 PM - 02:00 PM", subject: "OOP (DJ)", room: "Room A" },
                        { time: "02:00 PM - 03:00 PM", subject: "DAA (PG)", room: "Room A" },
                        { time: "03:00 PM - 04:00 PM", subject: "Discrete Maths (SG)", room: "Room A" },
                        { time: "04:00 PM - 05:00 PM", subject: "Life Skills", room: "Room A" }
                    ],
                    tuesday: [
                        { time: "09:00 AM - 11:00 AM", subject: "Gr1: OOP Lab / Gr2: DAA Lab", room: "Lab" },
                        { time: "01:00 PM - 02:00 PM", subject: "DAA (PG)", room: "Room A" },
                        { time: "02:00 PM - 04:00 PM", subject: "Gr1: CA Lab / Gr2: DE Lab", room: "Lab" }
                    ],
                    wednesday: [
                        { time: "09:00 AM - 11:00 AM", subject: "Gr1: COA(DSG) Lab / Gr2: CA Lab", room: "Lab" },
                        { time: "11:00 AM - 12:00 PM", subject: "Library", room: "Library" },
                        { time: "01:00 PM - 02:00 PM", subject: "COA(DSG)", room: "Room A" },
                        { time: "02:00 PM - 03:00 PM", subject: "OOP (DJ)", room: "Room A" },
                        { time: "03:00 PM - 04:00 PM", subject: "DAA (PG)", room: "Room A" },
                        { time: "04:00 PM - 05:00 PM", subject: "MP & MC(DMG)", room: "Room A" }
                    ],
                    thursday: [
                        { time: "09:00 AM - 10:00 AM", subject: "COA(DSG)", room: "Room A" },
                        { time: "10:00 AM - 11:00 AM", subject: "Discrete Maths (SG)", room: "Room A" },
                        { time: "11:00 AM - 12:00 PM", subject: "MP & MC(DMG)", room: "Room A" },
                        { time: "01:00 PM - 02:00 PM", subject: "Discrete Maths (SG)", room: "Room A" },
                        { time: "02:00 PM - 04:00 PM", subject: "Gr1: DE Lab / Gr2: COA(DSG) Lab", room: "Lab" },
                        { time: "04:00 PM - 05:00 PM", subject: "Library", room: "Library" }
                    ],
                    friday: [
                        { time: "09:00 AM - 10:00 AM", subject: "Discrete Maths (SG)", room: "Room A" },
                        { time: "10:00 AM - 11:00 AM", subject: "OOP (DJ)", room: "Room A" },
                        { time: "11:00 AM - 12:00 PM", subject: "COA(DSG)", room: "Room A" },
                        { time: "01:00 PM - 02:00 PM", subject: "COA(DSG)", room: "Room A" },
                        { time: "02:00 PM - 03:00 PM", subject: "OOP (DJ)", room: "Room A" },
                        { time: "03:00 PM - 04:00 PM", subject: "MP & MC(DMG)", room: "Room A" },
                        { time: "04:00 PM - 05:00 PM", subject: "Mentoring", room: "Room A" }
                    ]
                },
                B: {
                    monday: [
                        { time: "09:00 AM - 10:00 AM", subject: "DAA", room: "Room B" },
                        { time: "10:00 AM - 11:00 AM", subject: "COA(DSG)", room: "Room B" },
                        { time: "01:00 PM - 02:00 PM", subject: "OOP (RRC)", room: "Room B" },
                        { time: "02:00 PM - 04:00 PM", subject: "Gr3: CA Lab / Gr4: DE Lab", room: "Lab" },
                        { time: "04:00 PM - 05:00 PM", subject: "Life Skills", room: "Room B" }
                    ],
                    tuesday: [
                        { time: "09:00 AM - 11:00 AM", subject: "Gr3: COA(DSG) Lab / Gr4: OOP Lab", room: "Lab" },
                        { time: "01:00 PM - 02:00 PM", subject: "Library", room: "Library" },
                        { time: "02:00 PM - 03:00 PM", subject: "MP & MC(DMG)", room: "Room B" },
                        { time: "03:00 PM - 04:00 PM", subject: "Remedial", room: "Room B" }
                    ],
                    wednesday: [
                        { time: "09:00 AM - 10:00 AM", subject: "MP & MC(DMG)", room: "Room B" },
                        { time: "10:00 AM - 11:00 AM", subject: "Discrete Maths", room: "Room B" },
                        { time: "11:00 AM - 12:00 PM", subject: "COA(DSG)", room: "Room B" },
                        { time: "01:00 PM - 02:00 PM", subject: "OOP (SDB)", room: "Room B" },
                        { time: "02:00 PM - 03:00 PM", subject: "Discrete Maths (AP)", room: "Room B" },
                        { time: "03:00 PM - 04:00 PM", subject: "OOP (RRC)", room: "Room B" },
                        { time: "04:00 PM - 05:00 PM", subject: "Mentoring", room: "Room B" }
                    ],
                    thursday: [
                        { time: "09:00 AM - 10:00 AM", subject: "Discrete Maths", room: "Room B" },
                        { time: "10:00 AM - 11:00 AM", subject: "OOP", room: "Room B" },
                        { time: "11:00 AM - 12:00 PM", subject: "COA(DSG)", room: "Room B" },
                        { time: "01:00 PM - 02:00 PM", subject: "COA(DSG)", room: "Room B" },
                        { time: "02:00 PM - 04:00 PM", subject: "Gr3: DE Lab / Gr4: COA(DSG) Lab", room: "Lab" },
                        { time: "04:00 PM - 05:00 PM", subject: "Library", room: "Library" }
                    ],
                    friday: [
                        { time: "09:00 AM - 10:00 AM", subject: "DAA", room: "Room B" },
                        { time: "10:00 AM - 11:00 AM", subject: "MP & MC(DMG)", room: "Room B" },
                        { time: "11:00 AM - 12:00 PM", subject: "Discrete Maths (AP)", room: "Room B" },
                        { time: "01:00 PM - 02:00 PM", subject: "DAA (SCB)", room: "Room B" },
                        { time: "02:00 PM - 04:00 PM", subject: "Gr3: OOP Lab / Gr4: DAA Lab", room: "Lab" }
                    ]
                },
                C: {
                    monday: [
                        { time: "09:00 AM - 10:00 AM", subject: "MP & MC(DMG)", room: "Room C" },
                        { time: "10:00 AM - 11:00 AM", subject: "COA(DSG)", room: "Room C" },
                        { time: "11:00 AM - 12:00 PM", subject: "Discrete Maths (SK)", room: "Room C" },
                        { time: "01:00 PM - 03:00 PM", subject: "Gr5: COA(DSG) Lab / Gr6: DAA Lab", room: "Lab" },
                        { time: "03:00 PM - 04:00 PM", subject: "Life Skills", room: "Room C" }
                    ],
                    tuesday: [
                        { time: "09:00 AM - 10:00 AM", subject: "DAA", room: "Room C" },
                        { time: "10:00 AM - 11:00 AM", subject: "COA(DSG)", room: "Room C" },
                        { time: "11:00 AM - 12:00 PM", subject: "DAA (SM)", room: "Room C" },
                        { time: "01:00 PM - 02:00 PM", subject: "Discrete Maths (SK)", room: "Room C" },
                        { time: "02:00 PM - 03:00 PM", subject: "COA(DSG)", room: "Room C" },
                        { time: "03:00 PM - 04:00 PM", subject: "Discrete Maths (SD)", room: "Room C" },
                        { time: "04:00 PM - 05:00 PM", subject: "MP & MC(DMG)", room: "Room C" }
                    ],
                    wednesday: [
                        { time: "09:00 AM - 11:00 AM", subject: "Gr5: CA Lab / Gr6: DE Lab", room: "Lab" },
                        { time: "11:00 AM - 12:00 PM", subject: "OOP (SDB)", room: "Room C" },
                        { time: "01:00 PM - 02:00 PM", subject: "Discrete Maths (SD)", room: "Room C" },
                        { time: "02:00 PM - 03:00 PM", subject: "Library", room: "Library" },
                        { time: "03:00 PM - 05:00 PM", subject: "Gr5: OOP Lab / Gr6: CA Lab", room: "Lab" }
                    ],
                    thursday: [
                        { time: "09:00 AM - 10:00 AM", subject: "Gr5: DE Lab / Gr6: COA(DSG) Lab", room: "Lab" },
                        { time: "10:00 AM - 11:00 AM", subject: "Library", room: "Library" },
                        { time: "01:00 PM - 02:00 PM", subject: "COA(DSG)", room: "Room C" },
                        { time: "02:00 PM - 03:00 PM", subject: "DAA (NGB)", room: "Room C" },
                        { time: "03:00 PM - 04:00 PM", subject: "OOP (SDB)", room: "Room C" },
                        { time: "04:00 PM - 05:00 PM", subject: "MP & MC(DMG)", room: "Room C" }
                    ],
                    friday: [
                        { time: "09:00 AM - 11:00 AM", subject: "Gr5: DAA Lab / Gr6: OOP Lab", room: "Lab" },
                        { time: "01:00 PM - 02:00 PM", subject: "DAA (NGB)", room: "Room C" },
                        { time: "02:00 PM - 03:00 PM", subject: "OOP (SDB)", room: "Room C" },
                        { time: "03:00 PM - 04:00 PM", subject: "Mentoring", room: "Room C" },
                        { time: "04:00 PM - 05:00 PM", subject: "OOP (SDB)", room: "Room C" }
                    ]
                }
            }
        }
    };

    const deptSelect = document.getElementById('dept-select');
    const secSelect = document.getElementById('sec-select');
    const scheduleDisplay = document.getElementById('schedule-display');
    const schedulePlaceholder = document.getElementById('schedule-placeholder');
    const scheduleContentArea = document.getElementById('schedule-content-area');

    deptSelect.addEventListener('change', (e) => {
        const dept = e.target.value;
        secSelect.innerHTML = '<option value="" disabled selected>Select Section</option>';
        
        if (routinesData[dept]) {
            secSelect.disabled = false;
            routinesData[dept].sections.forEach(sec => {
                const opt = document.createElement('option');
                opt.value = sec;
                opt.textContent = `Section ${sec}`;
                secSelect.appendChild(opt);
            });
        } else {
            // Provide mock generic sections for other departments since we don't have all PDFs
            secSelect.disabled = false;
            ['A', 'B'].forEach(sec => {
                const opt = document.createElement('option');
                opt.value = sec;
                opt.textContent = `Section ${sec}`;
                secSelect.appendChild(opt);
            });
        }
        
        scheduleDisplay.style.display = 'none';
        schedulePlaceholder.style.display = 'block';
    });

    secSelect.addEventListener('change', () => {
        if (deptSelect.value && secSelect.value) {
            renderSchedule(deptSelect.value, secSelect.value);
            schedulePlaceholder.style.display = 'none';
            scheduleDisplay.style.display = 'block';
        }
    });

    function renderSchedule(dept, sec) {
        // Fallback to CSE schedule if department data isn't hardcoded above
        const deptData = routinesData[dept] ? routinesData[dept] : routinesData['cse'];
        const data = deptData.schedule[sec] ? deptData.schedule[sec] : routinesData['cse'].schedule['A'];
        
        scheduleContentArea.innerHTML = '';
        const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
        
        days.forEach((day, index) => {
            const pane = document.createElement('div');
            pane.className = `schedule-pane ${index === 0 ? 'active' : ''}`;
            pane.id = day;
            
            const daySchedule = data[day] || [];
            if (daySchedule.length === 0) {
                pane.innerHTML = `<div style="padding: 20px; text-align: center; color: var(--text-secondary);">No classes scheduled.</div>`;
            } else {
                daySchedule.forEach(item => {
                    pane.innerHTML += `
                        <div class="schedule-item">
                            <div class="time">${item.time}</div>
                            <div class="subject">${item.subject}</div>
                            <div class="room"><i class='bx bx-map'></i> ${item.room}</div>
                        </div>
                    `;
                });
            }
            scheduleContentArea.appendChild(pane);
        });

        // Reset tabs
        const tabBtns = document.querySelectorAll('#dynamic-tabs .tab-btn');
        tabBtns.forEach(b => b.classList.remove('active'));
        if (tabBtns.length > 0) tabBtns[0].classList.add('active');
    }

    // --- Dynamic Tabs Logic ---
    const dynamicTabsContainer = document.getElementById('dynamic-tabs');
    dynamicTabsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab-btn')) {
            // Remove active class
            dynamicTabsContainer.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.schedule-pane').forEach(p => p.classList.remove('active'));

            // Add active
            e.target.classList.add('active');
            const dayId = e.target.getAttribute('data-day');
            document.getElementById(dayId).classList.add('active');
        }
    });

    // --- Central Library Slideshow Logic ---
    const libSlides = document.querySelectorAll('.library-slide');
    const libDots = document.querySelectorAll('#library-slideshow .dot');
    const btnLibPrev = document.getElementById('lib-prev-btn');
    const btnLibNext = document.getElementById('lib-next-btn');
    let libCurrentSlide = 0;
    const totalLibSlides = libSlides.length;

    function updateLibSlide(index) {
        libSlides.forEach(s => s.classList.remove('active'));
        libDots.forEach(d => d.classList.remove('active'));
        
        libSlides[index].classList.add('active');
        libDots[index].classList.add('active');
    }

    function nextLibSlide() {
        libCurrentSlide = (libCurrentSlide + 1) % totalLibSlides;
        updateLibSlide(libCurrentSlide);
    }

    function prevLibSlide() {
        libCurrentSlide = (libCurrentSlide - 1 + totalLibSlides) % totalLibSlides;
        updateLibSlide(libCurrentSlide);
    }

    if (btnLibNext && btnLibPrev) {
        btnLibNext.addEventListener('click', nextLibSlide);
        btnLibPrev.addEventListener('click', prevLibSlide);

        libDots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const idx = parseInt(e.target.getAttribute('data-slide'));
                libCurrentSlide = idx;
                updateLibSlide(libCurrentSlide);
            });
        });

        // Optional: Auto slide every 5 seconds
        setInterval(nextLibSlide, 5000);
    }

    // --- Campus Slideshow Logic ---
    const camSlides = document.querySelectorAll('.campus-slide');
    const camDots = document.querySelectorAll('#campus-slideshow .dot');
    const btnCamPrev = document.getElementById('cam-prev-btn');
    const btnCamNext = document.getElementById('cam-next-btn');
    let camCurrentSlide = 0;
    const totalCamSlides = camSlides.length;

    function updateCamSlide(index) {
        camSlides.forEach(s => s.classList.remove('active'));
        camDots.forEach(d => d.classList.remove('active'));
        
        if (camSlides[index]) camSlides[index].classList.add('active');
        if (camDots[index]) camDots[index].classList.add('active');
    }

    function nextCamSlide() {
        if (totalCamSlides === 0) return;
        camCurrentSlide = (camCurrentSlide + 1) % totalCamSlides;
        updateCamSlide(camCurrentSlide);
    }

    function prevCamSlide() {
        if (totalCamSlides === 0) return;
        camCurrentSlide = (camCurrentSlide - 1 + totalCamSlides) % totalCamSlides;
        updateCamSlide(camCurrentSlide);
    }

    if (btnCamNext && btnCamPrev) {
        btnCamNext.addEventListener('click', nextCamSlide);
        btnCamPrev.addEventListener('click', prevCamSlide);

        camDots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const idx = parseInt(e.target.getAttribute('data-slide'));
                camCurrentSlide = idx;
                updateCamSlide(camCurrentSlide);
            });
        });

        // Optional: Auto slide every 5.5 seconds to offset from library
        setInterval(nextCamSlide, 5500);
    }

    // --- Canteen Slideshow Logic ---
    const cantSlides = document.querySelectorAll('.canteen-slide');
    const cantDots = document.querySelectorAll('#canteen-slideshow .dot');
    const btnCantPrev = document.getElementById('cant-prev-btn');
    const btnCantNext = document.getElementById('cant-next-btn');
    let cantCurrentSlide = 0;
    const totalCantSlides = cantSlides.length;

    function updateCantSlide(index) {
        cantSlides.forEach(s => s.classList.remove('active'));
        cantDots.forEach(d => d.classList.remove('active'));
        
        if (cantSlides[index]) cantSlides[index].classList.add('active');
        if (cantDots[index]) cantDots[index].classList.add('active');
    }

    function nextCantSlide() {
        if (totalCantSlides === 0) return;
        cantCurrentSlide = (cantCurrentSlide + 1) % totalCantSlides;
        updateCantSlide(cantCurrentSlide);
    }

    function prevCantSlide() {
        if (totalCantSlides === 0) return;
        cantCurrentSlide = (cantCurrentSlide - 1 + totalCantSlides) % totalCantSlides;
        updateCantSlide(cantCurrentSlide);
    }

    if (btnCantNext && btnCantPrev) {
        btnCantNext.addEventListener('click', nextCantSlide);
        btnCantPrev.addEventListener('click', prevCantSlide);

        cantDots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const idx = parseInt(e.target.getAttribute('data-slide'));
                cantCurrentSlide = idx;
                updateCantSlide(cantCurrentSlide);
            });
        });

        // Optional: Auto slide every 6 seconds to offset from others
        setInterval(nextCantSlide, 6000);
    }

    // --- Smooth Scrolling for Navigation Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- Floating Campus Chatbot Logic ---
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotChips = document.getElementById('chatbot-chips');

    // Toggle chatbot window
    chatbotToggle.addEventListener('click', () => {
        chatbotWindow.classList.toggle('active');
        if (chatbotWindow.classList.contains('active')) {
            chatbotInput.focus();
        }
    });

    chatbotClose.addEventListener('click', () => {
        chatbotWindow.classList.remove('active');
    });

    // Send message on click or Enter key
    chatbotSend.addEventListener('click', handleUserSend);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserSend();
        }
    });

    // Handle Quick Chips click
    chatbotChips.addEventListener('click', (e) => {
        const chip = e.target.closest('.chip-btn');
        if (chip) {
            const text = chip.getAttribute('data-input');
            chatbotInput.value = text;
            handleUserSend();
        }
    });

    // Handle bot button clicks
    chatbotMessages.addEventListener('click', (e) => {
        const btn = e.target.closest('.bot-btn');
        if (btn) {
            const action = btn.getAttribute('data-action');
            const target = btn.getAttribute('data-target');

            if (action === 'navigate') {
                // Set route selector
                if (routeSelect) {
                    routeSelect.value = target;
                    // Trigger change event to load route
                    routeSelect.dispatchEvent(new Event('change'));
                }
                
                // Scroll to navigation section
                scrollToSection('#navigation');
                chatbotWindow.classList.remove('active');
            } else if (action === 'scroll') {
                scrollToSection(target);
                chatbotWindow.classList.remove('active');
            }
        }
    });

    function handleUserSend() {
        const text = chatbotInput.value.trim();
        if (!text) return;

        appendMessage(text, 'user');
        chatbotInput.value = '';

        // Simulate bot reply with typing delay
        setTimeout(() => {
            getBotReply(text);
        }, 600);
    }

    function appendMessage(text, sender, buttons = []) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}`;
        
        let htmlContent = `<p>${text}</p>`;
        if (buttons.length > 0) {
            buttons.forEach(btn => {
                htmlContent += `<button class="bot-btn" data-action="${btn.action}" data-target="${btn.target}">${btn.text}</button>`;
            });
        }

        messageDiv.innerHTML = htmlContent;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function scrollToSection(selector) {
        const element = document.querySelector(selector);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }

    function getBotReply(input) {
        const cleanInput = input.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").trim();
        
        // Match Greetings
        if (cleanInput.match(/\b(hi|hello|hey|greetings|yo|sup|help)\b/)) {
            appendMessage("Hello! 😊 How can I help you navigate the HITK campus today? Choose a location or type where you want to go.", 'bot');
            return;
        }

        // Match Canteen
        if (cleanInput.includes('canteen') || cleanInput.includes('cafeteria') || cleanInput.includes('food') || cleanInput.includes('eat')) {
            const buttons = [
                { text: "🚀 Start Navigation", action: "navigate", target: "canteen" },
                { text: "📍 View on Map", action: "scroll", target: "#map" }
            ];
            appendMessage("I found the route to the **Main Cafeteria (Canteen)**! Would you like me to guide you there step-by-step from Gate 9?", 'bot', buttons);
            return;
        }

        // Match Library
        if (cleanInput.includes('library') || cleanInput.includes('book') || cleanInput.includes('read')) {
            const buttons = [
                { text: "🚀 Start Navigation", action: "navigate", target: "library" },
                { text: "📍 View on Map", action: "scroll", target: "#map" }
            ];
            appendMessage("I can direct you to the **Central Library**! Ready to start step-by-step visual navigation from Gate 9?", 'bot', buttons);
            return;
        }

        // Match CME
        if (cleanInput.includes('cme') || cleanInput.includes('mechanical') || cleanInput.includes('civil')) {
            const buttons = [
                { text: "🚀 Start Navigation", action: "navigate", target: "cme" },
                { text: "📍 View on Map", action: "scroll", target: "#map" }
            ];
            appendMessage("I found directions to the **CME Building** (Mechanical/Civil Engineering block). Would you like to navigate there?", 'bot', buttons);
            return;
        }

        // Match ICT
        if (cleanInput.includes('ict') || cleanInput.includes('computer science') || cleanInput.includes('information technology')) {
            const buttons = [
                { text: "🚀 Start Navigation", action: "navigate", target: "ict" },
                { text: "📍 View on Map", action: "scroll", target: "#map" }
            ];
            appendMessage("I have the path to the **ICT Building** (Information Technology & Computer Science labs). Start navigation?", 'bot', buttons);
            return;
        }

        // Match Central Building
        if (cleanInput.includes('central') || cleanInput.includes('admin') || cleanInput.includes('office')) {
            const buttons = [
                { text: "🚀 Start Navigation", action: "navigate", target: "central" },
                { text: "📍 View on Map", action: "scroll", target: "#map" }
            ];
            appendMessage("I found the route to the **Central Building** (Administrative Block). Start visual navigation from Gate 9?", 'bot', buttons);
            return;
        }

        // Match Map
        if (cleanInput.includes('map') || cleanInput.includes('satellite') || cleanInput.includes('locate') || cleanInput.includes('where is')) {
            scrollToSection('#map');
            appendMessage("Sure! Scrolling you to the **Interactive Campus Map** so you can view the layout from above. 🗺️", 'bot');
            return;
        }

        // Match Class Timings/Routine
        if (cleanInput.includes('routine') || cleanInput.includes('schedule') || cleanInput.includes('timing') || cleanInput.includes('class') || cleanInput.includes('time table')) {
            scrollToSection('#schedule');
            appendMessage("I've scrolled you to the **Class Timings** routine scheduler. Please choose your Department and Section to view details! 📅", 'bot');
            return;
        }

        // Default Response
        appendMessage("I'm not sure about that specific query. 😅 Try asking something like: 'Where is the canteen?', 'Take me to the library', or click one of the quick options below!", 'bot');
    }
});
