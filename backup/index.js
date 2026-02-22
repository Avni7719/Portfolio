// Portfolio JavaScript
// This script dynamically builds common portfolio sections and adds interactivity.
// Edit the `DATA` object below to customize your content in plain English.

document.addEventListener('DOMContentLoaded', () => {
	const DATA = {
		profile: {
			name: 'Avni Gupta',
			title: 'Full‑Stack Developer',
			bio: "Welcome to my portfolio — I build web apps, learn quickly, and enjoy collaborating.",
		},

		// Technical skills grouped by category. level: 0-100
		skills: [
			{ category: 'Frontend', items: [{ name: 'HTML', level: 95 }, { name: 'CSS', level: 90 }, { name: 'JavaScript', level: 90 }, { name: 'React', level: 80 }] },
			{ category: 'Backend', items: [{ name: 'Node.js', level: 85 }, { name: 'Express', level: 80 }, { name: 'Python', level: 75 }] },
			{ category: 'DevOps', items: [{ name: 'Docker', level: 65 }, { name: 'Git', level: 85 }] }
		],

		// 'Chief friends' — interpreted here as people important to your journey (mentors, collaborators, or friends)
		friends: [
			{ name: 'Aisha Khan', role: 'Mentor', note: 'Guided me through my first open-source contribution.' },
			{ name: 'Ravi Patel', role: 'Project Partner', note: 'Co-built a note-taking app with offline sync.' }
		],

		certificates: [
			{ title: 'Front-End Web Developer', issuer: 'FreeCodeCamp', year: 2023 },
			{ title: 'JavaScript Algorithms', issuer: 'Coursera', year: 2022 }
		],

		schooling: [
			{ school: 'City High School', degree: 'High School Diploma', years: '2012–2016' },
			{ school: 'State University', degree: 'B.Sc. Computer Science', years: '2016–2020' }
		],

		projects: [
			{ title: 'Portfolio Site', desc: 'This site — simple, responsive, and handmade.', link: '#' },
			{ title: 'Chat App', desc: 'Realtime chat using WebSocket + Node.js.', link: '#' }
		]
	};

	// Create main sections and populate content
	function createSection(id, title) {
		if (document.getElementById(id)) return document.getElementById(id);
		const sec = document.createElement('section');
		sec.id = id;
		sec.style.padding = '60px 20px';
		sec.style.maxWidth = '1000px';
		sec.style.margin = '0 auto';
		const h = document.createElement('h2');
		h.textContent = title;
		h.style.borderBottom = '2px solid #eee';
		h.style.paddingBottom = '10px';
		sec.appendChild(h);
		document.body.insertBefore(sec, document.querySelector('footer'));
		return sec;
	}

	// Update hero/profile area
	function buildHero() {
		const hero = document.querySelector('.hero');
		if (!hero) return;
		hero.innerHTML = `
			<h1>Hello, I'm <span style="color:#00b3ff;">${DATA.profile.name}</span></h1>
			<p style="max-width:800px">${DATA.profile.title} — ${DATA.profile.bio}</p>
			<div style="margin-top:18px">
				<a id="downloadResume" href="#" style="background:#00b3ff;color:#fff;padding:8px 12px;border-radius:6px;text-decoration:none">Download Resume</a>
				<button id="themeToggle" style="margin-left:12px;padding:8px 12px;border-radius:6px">Toggle Theme</button>
			</div>
		`;

		// Resume: user can replace with actual file path
		const dl = document.getElementById('downloadResume');
		dl.addEventListener('click', (e) => {
			e.preventDefault();
			alert('Replace this alert with a link to your resume (e.g., PDF) in `index.js`.');
		});

		document.getElementById('themeToggle').addEventListener('click', toggleTheme);
	}

	// Build skills section
	function buildSkills() {
		const sec = createSection('skills', 'Skills');
		const container = document.createElement('div');
		container.style.display = 'grid';
		container.style.gridTemplateColumns = 'repeat(auto-fit,minmax(220px,1fr))';
		container.style.gap = '18px';

		DATA.skills.forEach(group => {
			const card = document.createElement('div');
			card.style.background = '#fff';
			card.style.padding = '14px';
			card.style.borderRadius = '8px';
			card.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)';
			const title = document.createElement('h3');
			title.textContent = group.category;
			title.style.marginTop = '0';
			card.appendChild(title);

			group.items.forEach(skill => {
				const row = document.createElement('div');
				row.style.marginBottom = '10px';
				const label = document.createElement('div');
				label.textContent = `${skill.name} (${skill.level}%)`;
				label.style.fontSize = '14px';
				const bar = document.createElement('div');
				bar.style.background = '#eee';
				bar.style.height = '10px';
				bar.style.borderRadius = '6px';
				const fill = document.createElement('div');
				fill.style.height = '100%';
				fill.style.width = '0%';
				fill.style.background = '#00b3ff';
				fill.style.borderRadius = '6px';
				fill.style.transition = 'width 800ms ease';
				bar.appendChild(fill);
				row.appendChild(label);
				row.appendChild(bar);
				card.appendChild(row);

				// animate on load
				requestAnimationFrame(() => { fill.style.width = skill.level + '%'; });
			});

			container.appendChild(card);
		});

		sec.appendChild(container);
	}

	// Build friends/mentors section
	function buildFriends() {
		const sec = createSection('friends', 'People Who Helped');
		const list = document.createElement('div');
		list.style.display = 'grid';
		list.style.gridTemplateColumns = 'repeat(auto-fit,minmax(240px,1fr))';
		list.style.gap = '12px';

		DATA.friends.forEach(p => {
			const card = document.createElement('div');
			card.style.background = '#fff';
			card.style.padding = '12px';
			card.style.borderRadius = '8px';
			const h = document.createElement('strong');
			h.textContent = p.name + ' — ' + p.role;
			const note = document.createElement('div');
			note.textContent = p.note;
			note.style.marginTop = '6px';
			card.appendChild(h);
			card.appendChild(note);
			list.appendChild(card);
		});

		sec.appendChild(list);
	}

	// Build certificates (simple grid). Clicking shows detail modal.
	function buildCertificates() {
		const sec = createSection('certificates', 'Certificates');
		const grid = document.createElement('div');
		grid.style.display = 'grid';
		grid.style.gridTemplateColumns = 'repeat(auto-fit,minmax(220px,1fr))';
		grid.style.gap = '12px';

		DATA.certificates.forEach((c, i) => {
			const card = document.createElement('div');
			card.style.background = '#fff';
			card.style.padding = '12px';
			card.style.borderRadius = '8px';
			card.style.cursor = 'pointer';
			card.addEventListener('click', () => showModal(`<h3>${c.title}</h3><div>${c.issuer} — ${c.year}</div>`));
			const title = document.createElement('div');
			title.textContent = c.title;
			title.style.fontWeight = '600';
			const issuer = document.createElement('div');
			issuer.textContent = `${c.issuer} • ${c.year}`;
			issuer.style.fontSize = '14px';
			issuer.style.color = '#555';
			card.appendChild(title);
			card.appendChild(issuer);
			grid.appendChild(card);
		});

		sec.appendChild(grid);
	}

	// Build schooling/education
	function buildEducation() {
		const sec = createSection('education', 'Education');
		const container = document.createElement('div');
		container.style.display = 'flex';
		container.style.flexDirection = 'column';
		container.style.gap = '10px';

		DATA.schooling.forEach(s => {
			const row = document.createElement('div');
			row.style.background = '#fff';
			row.style.padding = '12px';
			row.style.borderRadius = '8px';
			const title = document.createElement('strong');
			title.textContent = s.school + ' — ' + s.degree;
			const years = document.createElement('div');
			years.textContent = s.years;
			years.style.fontSize = '14px';
			years.style.color = '#555';
			row.appendChild(title);
			row.appendChild(years);
			container.appendChild(row);
		});

		sec.appendChild(container);
	}

	// Build projects
	function buildProjects() {
		const sec = createSection('projects', 'Projects');
		const grid = document.createElement('div');
		grid.style.display = 'grid';
		grid.style.gridTemplateColumns = 'repeat(auto-fit,minmax(260px,1fr))';
		grid.style.gap = '12px';

		DATA.projects.forEach(p => {
			const card = document.createElement('div');
			card.style.background = '#fff';
			card.style.padding = '12px';
			card.style.borderRadius = '8px';
			const title = document.createElement('strong');
			title.textContent = p.title;
			const desc = document.createElement('div');
			desc.textContent = p.desc;
			desc.style.marginTop = '8px';
			const link = document.createElement('a');
			link.href = p.link || '#';
			link.textContent = 'View';
			link.style.display = 'inline-block';
			link.style.marginTop = '10px';
			link.style.color = '#00b3ff';
			card.appendChild(title);
			card.appendChild(desc);
			card.appendChild(link);
			grid.appendChild(card);
		});

		sec.appendChild(grid);
	}

	// Contact section with a simple form (client-side only)
	function buildContact() {
		const sec = createSection('contact', 'Contact');
		const form = document.createElement('form');
		form.style.maxWidth = '600px';
		form.style.display = 'flex';
		form.style.flexDirection = 'column';
		form.style.gap = '10px';

		const name = document.createElement('input');
		name.placeholder = 'Your name';
		const email = document.createElement('input');
		email.placeholder = 'Your email';
		email.type = 'email';
		const message = document.createElement('textarea');
		message.placeholder = 'Message';
		message.rows = 6;
		const submit = document.createElement('button');
		submit.type = 'submit';
		submit.textContent = 'Send Message';
		submit.style.background = '#00b3ff';
		submit.style.color = '#fff';
		submit.style.border = 'none';
		submit.style.padding = '10px 12px';
		submit.style.borderRadius = '6px';

		form.appendChild(name);
		form.appendChild(email);
		form.appendChild(message);
		form.appendChild(submit);

		form.addEventListener('submit', (e) => {
			e.preventDefault();
			// client-side: show a success message; to actually send, integrate email API or mailto
			alert('Thanks! This demo does not send messages. Replace form handler with your email/API.');
			form.reset();
		});

		sec.appendChild(form);
	}

	// Simple modal implementation
	function showModal(html) {
		let modal = document.getElementById('siteModal');
		if (!modal) {
			modal = document.createElement('div');
			modal.id = 'siteModal';
			Object.assign(modal.style, { position: 'fixed', inset: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.6)', zIndex: 9999 });
			const box = document.createElement('div');
			box.style.background = '#fff';
			box.style.padding = '18px';
			box.style.borderRadius = '8px';
			box.style.maxWidth = '720px';
			box.style.width = '90%';
			box.id = 'siteModalBox';
			modal.appendChild(box);
			modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
			document.body.appendChild(modal);
		}
		document.getElementById('siteModalBox').innerHTML = html + '<div style="text-align:right;margin-top:12px"><button id="closeModal">Close</button></div>';
		document.getElementById('closeModal').addEventListener('click', () => modal.remove());
	}

	// Theme toggle (light/dark) persisted to localStorage
	function toggleTheme() {
		const cur = document.documentElement.getAttribute('data-theme');
		const next = cur === 'dark' ? 'light' : 'dark';
		applyTheme(next);
	}

	function applyTheme(name) {
		if (name === 'dark') {
			document.documentElement.setAttribute('data-theme', 'dark');
			document.documentElement.style.background = '#0f1720';
			document.documentElement.style.color = '#e6eef8';
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
			document.documentElement.style.background = '';
			document.documentElement.style.color = '';
		}
		localStorage.setItem('site-theme', name);
	}

	// Smooth scroll for nav links (rewire current nav to scroll to our sections)
	function wireNav() {
		const nav = document.querySelector('nav');
		if (!nav) return;
		// map of visible nav labels to the ids we created
		const map = { 'Home': '', 'Skills': 'skills', 'Projects': 'projects', 'Achievements': 'certificates', 'Memories': 'friends', 'Contact': 'contact' };
		nav.querySelectorAll('a').forEach(a => {
			const label = a.textContent.trim();
			if (map[label] !== undefined) {
				const id = map[label];
				a.href = id ? `#${id}` : '#';
				a.addEventListener('click', (e) => {
					if (!id) {
						window.scrollTo({ top: 0, behavior: 'smooth' });
						e.preventDefault();
						return;
					}
					const el = document.getElementById(id);
					if (el) {
						e.preventDefault();
						el.scrollIntoView({ behavior: 'smooth', block: 'start' });
					}
				});
			}
		});
	}

	// Initialize
	buildHero();
	buildSkills();
	buildProjects();
	buildCertificates();
	buildEducation();
	buildFriends();
	buildContact();
	wireNav();

	// apply saved theme
	applyTheme(localStorage.getItem('site-theme') || 'light');
});
