
const form = document.getElementById('outreachForm');
const output = document.getElementById('output');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('studentName').value;
    const target = document.getElementById('targetName').value;
    const job = document.getElementById('targetJob').value;
    const goal = document.getElementById('outreachGoal').value;

    let message = \`<h2>🎯 Personalized Outreach Strategy</h2>
    <p><strong>From:</strong> \${name}<br/>
    <strong>To:</strong> \${target}<br/>
    <strong>Role:</strong> \${job}<br/>
    <strong>Goal:</strong> \${goal}</p>
    <h3>🧠 First-Touch Options</h3>\`;

    if (goal === "informational") {
        message += \`
        <p>Hi \${target},</p>
        <p>I'm \${name}, a student passionate about tech & SaaS. I'd be grateful for 15 mins to learn about your journey in the \${job} role. Would you be open to connecting this week?</p>
        <p>Alt: I admire your work in SaaS. I'd love to hear how you broke into the space. Can we connect briefly this week?</p>\`;
    } else if (goal === "referral") {
        message += \`
        <p>Hi \${target},</p>
        <p>I came across your role at [Company] and am really inspired. I'm actively exploring roles in SaaS and would love to learn more. If it makes sense, I’d be grateful for any referral advice!</p>
        <p>Alt: I’m passionate about breaking into tech sales. Your role at [Company] caught my eye — happy to start with a convo and take it from there!</p>\`;
    } else {
        message += \`
        <p>Hi \${target},</p>
        <p>As a student aiming for a tech sales career, I’d love to get your advice on landing a great internship. Could we chat for a few minutes?</p>
        <p>Alt: What do you wish someone had told you before you landed your first SaaS role?</p>\`;
    }

    message += \`
    <h3>📆 Follow-Up Cadence</h3>
    <ul>
        <li>+2 Days: Just checking in — really value your insight!</li>
        <li>+5 Days: Saw your post at [Company] — loved it. Still open to connect?</li>
        <li>+8 Days: Totally understand if now’s not ideal — I’ll keep learning from afar!</li>
    </ul>
    <h3>🚧 Objection Handling</h3>
    <ul>
        <li>“Not hiring” → Totally fair! I’m here to learn — not pitch.</li>
        <li>“Busy” → No worries at all. Even 1–2 lines from you would help a ton!</li>
    </ul>
    <h3>📞 Phone Track</h3>
    <p>Hi \${target}, it’s \${name}. I’ll be brief — I’m exploring SaaS and admire your path. Would 10 mins work for a call this week?</p>
    <h3>🔥 Next Step Suggestions</h3>
    <ul>
        <li>Connect on LinkedIn with tailored message.</li>
        <li>Follow their company’s content and engage.</li>
        <li>Use playbook insights in your follow-ups!</li>
    </ul>\`;

    output.innerHTML = message;
});

// Simple moving gradient background
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let hue = 0;
function draw() {
    hue += 0.5;
    ctx.fillStyle = "hsl(" + hue + ", 50%, 10%)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(draw);
}
draw();
