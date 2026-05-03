/*
  MOOD DATA — Add or edit moods below.
  Each mood has:
    name   – the mood title (shown in <h2>)
    plus   – array of positive behaviour strings
    minus  – array of negative/avoidant behaviour strings
*/
const standardMoods = [
  {
    name: "Daring",
    plus: [
      "More likely to get into fights",
      "More likely to claim territory"
    ],
    minus: [
      "Less likely to flee",
      "Less likely to give up on hunts"
    ]
  },
  {
    name: "Cautious",
    plus: [
      "More likely to avoid open ground",
      "More likely to seek high vantage points"
    ],
    minus: [
      "Less likely to start a fight",
      "Less likely to enter unknown dens"
    ]
  },
  {
    name: "Playful",
    plus: [
      "More likely to initiate chase-games",
      "More likely to tease packmates"
    ],
    minus: [
      "Less likely to remain still or silent",
      "Less likely to take threats seriously at first"
    ]
  },
  {
    name: "Sullen",
    plus: [
      "More likely to howl mournfully",
      "More likely to wander alone"
    ],
    minus: [
      "Less likely to respond to pack calls",
      "Less likely to share food"
    ]
  },
  {
    name: "Protective",
    plus: [
      "More likely to guard the den",
      "More likely to place themselves between danger and pack"
    ],
    minus: [
      "Less likely to retreat",
      "Less likely to ignore an intruder"
    ]
  }
];

// Optional moon‑touched moods — works the same way
const moonMoods = [
  {
    name: "Lunatic Frenzy",
    plus: [
      "More likely to attack without warning",
      "More likely to chase prey far beyond normal range"
    ],
    minus: [
      "Less likely to recognise friend from foe",
      "Less likely to control the shift (if a werewolf)"
    ]
  },
  {
    name: "Moon‑Blessed Calm",
    plus: [
      "More likely to heal quickly",
      "More likely to sense spirits"
    ],
    minus: [
      "Less likely to act aggressively",
      "Less likely to be affected by fear effects"
    ]
  },
  {
    name: "Haunted",
    plus: [
      "More likely to see omens",
      "More likely to talk to long‑gone packmates"
    ],
    minus: [
      "Less likely to sleep soundly",
      "Less likely to trust the present"
    ]
  }
];

// Random array picker
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Render a mood object into the page
function displayMood(moodObj) {
  document.getElementById('introText').textContent = "Your wolf is feeling…";
  document.getElementById('moodName').textContent = moodObj.name;
  const list = document.getElementById('effectsList');
  list.innerHTML = ''; // clear previous

  // Add positive effects
  moodObj.plus.forEach(effect => {
    const li = document.createElement('li');
    li.className = 'positive';
    li.textContent = effect;
    list.appendChild(li);
  });

  // Add negative effects
  moodObj.minus.forEach(effect => {
    const li = document.createElement('li');
    li.className = 'negative';
    li.textContent = effect;
    list.appendChild(li);
  });
}

// Standard mood generation
function generateMood() {
  const mood = randomItem(standardMoods);
  displayMood(mood);
}

// Moon mood generation (picks from moonMoods)
function generateMoonMood() {
  const mood = randomItem(moonMoods);
  displayMood(mood);
}

// =============================================
// THEME SWITCHER
// =============================================
const themeSelect = document.getElementById('themeSelect');

function applyTheme(themeClass) {
  // Remove any existing theme class from <html>
  document.documentElement.classList.remove('theme-modern-dark', 'theme-wilderness');
  if (themeClass) {
    document.documentElement.classList.add(themeClass);
  }
}

// Listen for dropdown changes
themeSelect.addEventListener('change', (e) => {
  const selected = e.target.value;
  if (selected === 'modern-dark') {
    applyTheme('theme-modern-dark');
    localStorage.setItem('wolfMoodTheme', 'theme-modern-dark');
  } else if (selected === 'wilderness') {
    applyTheme('theme-wilderness');
    localStorage.setItem('wolfMoodTheme', 'theme-wilderness');
  }
});

// On page load, restore saved theme or default to modern-dark
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('wolfMoodTheme');
  if (saved && (saved === 'theme-modern-dark' || saved === 'theme-wilderness')) {
    applyTheme(saved);
    themeSelect.value = saved === 'theme-modern-dark' ? 'modern-dark' : 'wilderness';
  } else {
    // Default
    applyTheme('theme-modern-dark');
    themeSelect.value = 'modern-dark';
  }
  generateMood();
});
