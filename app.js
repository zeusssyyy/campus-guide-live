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
                        { time: "09:00 AM - 11:00 AM", subject: "Gr1: OS Lab / Gr2: CA Lab", room: "Lab" },
                        { time: "11:00 AM - 12:00 PM", subject: "Library", room: "Library" },
                        { time: "01:00 PM - 02:00 PM", subject: "OS (PSD)", room: "Room A" },
                        { time: "02:00 PM - 03:00 PM", subject: "OOP (DJ)", room: "Room A" },
                        { time: "03:00 PM - 04:00 PM", subject: "DAA (PG)", room: "Room A" },
                        { time: "04:00 PM - 05:00 PM", subject: "Digital Elec (PPS)", room: "Room A" }
                    ],
                    thursday: [
                        { time: "09:00 AM - 10:00 AM", subject: "OS (PSD)", room: "Room A" },
                        { time: "10:00 AM - 11:00 AM", subject: "Discrete Maths (SG)", room: "Room A" },
                        { time: "11:00 AM - 12:00 PM", subject: "Digital Elec (PPS)", room: "Room A" },
                        { time: "01:00 PM - 02:00 PM", subject: "Discrete Maths (SG)", room: "Room A" },
                        { time: "02:00 PM - 04:00 PM", subject: "Gr1: DE Lab / Gr2: OS Lab", room: "Lab" },
                        { time: "04:00 PM - 05:00 PM", subject: "Library", room: "Library" }
                    ],
                    friday: [
                        { time: "09:00 AM - 10:00 AM", subject: "Discrete Maths (SG)", room: "Room A" },
                        { time: "10:00 AM - 11:00 AM", subject: "OOP (DJ)", room: "Room A" },
                        { time: "11:00 AM - 12:00 PM", subject: "OS (PSD)", room: "Room A" },
                        { time: "01:00 PM - 02:00 PM", subject: "OS (PSD)", room: "Room A" },
                        { time: "02:00 PM - 03:00 PM", subject: "OOP (DJ)", room: "Room A" },
                        { time: "03:00 PM - 04:00 PM", subject: "Digital Elec (PPS)", room: "Room A" },
                        { time: "04:00 PM - 05:00 PM", subject: "Mentoring", room: "Room A" }
                    ]
                },
                B: {
                    monday: [
                        { time: "09:00 AM - 10:00 AM", subject: "DAA", room: "Room B" },
                        { time: "10:00 AM - 11:00 AM", subject: "OS", room: "Room B" },
                        { time: "01:00 PM - 02:00 PM", subject: "OOP (RRC)", room: "Room B" },
                        { time: "02:00 PM - 04:00 PM", subject: "Gr3: CA Lab / Gr4: DE Lab", room: "Lab" },
                        { time: "04:00 PM - 05:00 PM", subject: "Life Skills", room: "Room B" }
                    ],
                    tuesday: [
                        { time: "09:00 AM - 11:00 AM", subject: "Gr3: OS Lab / Gr4: OOP Lab", room: "Lab" },
                        { time: "01:00 PM - 02:00 PM", subject: "Library", room: "Library" },
                        { time: "02:00 PM - 03:00 PM", subject: "Digital Elec (IN)", room: "Room B" },
                        { time: "03:00 PM - 04:00 PM", subject: "Remedial", room: "Room B" }
                    ],
                    wednesday: [
                        { time: "09:00 AM - 10:00 AM", subject: "Digital Elec", room: "Room B" },
                        { time: "10:00 AM - 11:00 AM", subject: "Discrete Maths", room: "Room B" },
                        { time: "11:00 AM - 12:00 PM", subject: "OS (DBS)", room: "Room B" },
                        { time: "01:00 PM - 02:00 PM", subject: "OOP (SDB)", room: "Room B" },
                        { time: "02:00 PM - 03:00 PM", subject: "Discrete Maths (AP)", room: "Room B" },
                        { time: "03:00 PM - 04:00 PM", subject: "OOP (RRC)", room: "Room B" },
                        { time: "04:00 PM - 05:00 PM", subject: "Mentoring", room: "Room B" }
                    ],
                    thursday: [
                        { time: "09:00 AM - 10:00 AM", subject: "Discrete Maths", room: "Room B" },
                        { time: "10:00 AM - 11:00 AM", subject: "OOP", room: "Room B" },
                        { time: "11:00 AM - 12:00 PM", subject: "OS (DBS)", room: "Room B" },
                        { time: "01:00 PM - 02:00 PM", subject: "OS (DBS)", room: "Room B" },
                        { time: "02:00 PM - 04:00 PM", subject: "Gr3: DE Lab / Gr4: OS Lab", room: "Lab" },
                        { time: "04:00 PM - 05:00 PM", subject: "Library", room: "Library" }
                    ],
                    friday: [
                        { time: "09:00 AM - 10:00 AM", subject: "DAA", room: "Room B" },
                        { time: "10:00 AM - 11:00 AM", subject: "Digital Elec", room: "Room B" },
                        { time: "11:00 AM - 12:00 PM", subject: "Discrete Maths (AP)", room: "Room B" },
                        { time: "01:00 PM - 02:00 PM", subject: "DAA (SCB)", room: "Room B" },
                        { time: "02:00 PM - 04:00 PM", subject: "Gr3: OOP Lab / Gr4: DAA Lab", room: "Lab" }
                    ]
                },
                C: {
                    monday: [
                        { time: "09:00 AM - 10:00 AM", subject: "Digital Elec", room: "Room C" },
                        { time: "10:00 AM - 11:00 AM", subject: "OS", room: "Room C" },
                        { time: "11:00 AM - 12:00 PM", subject: "Discrete Maths (SK)", room: "Room C" },
                        { time: "01:00 PM - 03:00 PM", subject: "Gr5: OS Lab / Gr6: DAA Lab", room: "Lab" },
                        { time: "03:00 PM - 04:00 PM", subject: "Life Skills", room: "Room C" }
                    ],
                    tuesday: [
                        { time: "09:00 AM - 10:00 AM", subject: "DAA", room: "Room C" },
                        { time: "10:00 AM - 11:00 AM", subject: "OS", room: "Room C" },
                        { time: "11:00 AM - 12:00 PM", subject: "DAA (SM)", room: "Room C" },
                        { time: "01:00 PM - 02:00 PM", subject: "Discrete Maths (SK)", room: "Room C" },
                        { time: "02:00 PM - 03:00 PM", subject: "OS (DS)", room: "Room C" },
                        { time: "03:00 PM - 04:00 PM", subject: "Discrete Maths (SD)", room: "Room C" },
                        { time: "04:00 PM - 05:00 PM", subject: "Digital Elec (DMG)", room: "Room C" }
                    ],
                    wednesday: [
                        { time: "09:00 AM - 11:00 AM", subject: "Gr5: CA Lab / Gr6: DE Lab", room: "Lab" },
                        { time: "11:00 AM - 12:00 PM", subject: "OOP (SDB)", room: "Room C" },
                        { time: "01:00 PM - 02:00 PM", subject: "Discrete Maths (SD)", room: "Room C" },
                        { time: "02:00 PM - 03:00 PM", subject: "Library", room: "Library" },
                        { time: "03:00 PM - 05:00 PM", subject: "Gr5: OOP Lab / Gr6: CA Lab", room: "Lab" }
                    ],
                    thursday: [
                        { time: "09:00 AM - 10:00 AM", subject: "Gr5: DE Lab / Gr6: OS Lab", room: "Lab" },
                        { time: "10:00 AM - 11:00 AM", subject: "Library", room: "Library" },
                        { time: "01:00 PM - 02:00 PM", subject: "OS (DS)", room: "Room C" },
                        { time: "02:00 PM - 03:00 PM", subject: "DAA (NGB)", room: "Room C" },
                        { time: "03:00 PM - 04:00 PM", subject: "OOP (SDB)", room: "Room C" },
                        { time: "04:00 PM - 05:00 PM", subject: "Digital Elec (DMG)", room: "Room C" }
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
});
