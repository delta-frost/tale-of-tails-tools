// mood-generator.js – Wolf Mood Generator functions
// (Requires theme.js to be loaded first)

const standardMoods = [
  {
    name: "Daring",
    plus: [
      "More likely to get into fights",
      "More likely to claim territory",
      "More likely to test unfamiliar dens or trails",
      "More likely to initiate dominance displays",
      "More likely to cross rushing water or steep ledges"
    ],
    minus: [
      "Less likely to flee",
      "Less likely to give up on hunts",
      "Less likely to listen to pack warnings",
      "Less likely to treat injuries as serious",
      "Less likely to check for danger before resting"
    ]
  },
  {
    name: "Cautious",
    plus: [
      "More likely to avoid open ground",
      "More likely to seek high vantage points",
      "More likely to circle a new area before entering",
      "More likely to stalk prey from cover rather than chase",
      "More likely to notice subtle sounds and scent markers"
    ],
    minus: [
      "Less likely to start a fight",
      "Less likely to enter unknown territory",
      "Less likely to trust stranger wolves quickly",
      "Less likely to share food until it's safe",
      "Less likely to wander far from the pack"
    ]
  },
  {
    name: "Playful",
    plus: [
      "More likely to initiate chase-games",
      "More likely to tease packmates",
      "More likely to hunt small prey",
      "More likely to interact with stranger wolves",
      "More likely to stay with the pack"
    ],
    minus: [
      "Less likely to remain still or silent",
      "Less likely to take threats seriously at first",
      "Less likely to stay focused during a hunt",
      "Less likely to recognise danger signals from elders",
      "Less likely to hide excitement when expected to be watchful"
    ]
  },
  {
    name: "Sullen",
    plus: [
      "More likely to howl mournfully",
      "More likely to wander off alone",
      "More likely to reject friendly advances",
      "More likely to rest apart from the pack",
      "More likely to fixate on a particular scent or memory"
    ],
    minus: [
      "Less likely to respond to pack calls",
      "Less likely to share food",
      "Less likely to join group activities",
      "Less likely to seek comfort from others",
      "Less likely to defend territory with full vigor"
    ]
  },
  {
  name: "Restless",
  plus: [
    "More likely to patrol the borders repeatedly",
    "More likely to pace or move constantly",
    "More likely to notice the wind changing",
    "More likely to test the patience of packmates",
    "More likely to seek out new scents or sounds"
  ],
  minus: [
    "Less likely to settle down for sleep",
    "Less likely to focus on a task for long",
    "Less likely to accept a quiet day",
    "Less likely to let others relax undisturbed",
    "Less likely to finish meals in one sitting"
  ]
},
{
  name: "Trusting",
  plus: [
    "More likely to approach stranger wolves openly",
    "More likely to share food willingly",
    "More likely to expose their belly or show submission",
    "More likely to let pups play with others",
    "More likely to assume good intentions first"
  ],
  minus: [
    "Less likely to question others",
    "Less likely to guard personal space",
    "Less likely to notice subtle aggression",
    "Less likely to hold a grudge",
    "Less likely to escalate conflict"
  ]
},
  {
    name: "Protective",
    plus: [
      "More likely to guard the den or territory",
      "More likely to chase competitors far away",
      "More likely to circle the perimeter while others rest",
      "More likely to jump into ongoing fights",
      "More likely to notice the needs of pups and elders"
    ],
    minus: [
      "Less likely to retreat",
      "Less likely to ignore an intruder",
      "Less likely to show mercy to a persistent threat",
      "Less likely to take personal time for hunting",
      "Less likely to trust strangers near the pack"
    ]
  }
];

const feralMoods = [
  {
    name: "Frenzied",
    plus: [
      "More likely to attack without warning",
      "More likely to chase prey far beyond normal range",
      "More likely to pursue enemies even when exhausted",
      "More likely to ignore personal injury",
      "More likely to howl and snarl, not caring who hears"
    ],
    minus: [
      "Less likely to recognise friend from foe",
      "Less likely to show mercy to competitors",
      "Less likely to stop or call off hunts",
      "Less likely to be soothed by submission",
      "Less likely to share a kill, even with packmates"
    ]
  },
  {
  name: "Obsessive",
  plus: [
    "More likely to fixate on a single target (prey, rival, scent)",
    "More likely to ignore the pack's priorities for their own",
    "More likely to retrace the same path repeatedly",
    "More likely to refuse to eat until the fixation is resolved",
    "More likely to snap at anyone who interrupts their focus"
  ],
  minus: [
    "Less likely to notice changing conditions",
    "Less likely to listen to reason",
    "Less likely to tend to injuries or hunger",
    "Less likely to show affection while fixated",
    "Less likely to accept that a trail has gone cold"
  ]
},
{
  name: "Panicked",
  plus: [
    "More likely to bolt at the slightest trigger",
    "More likely to abandon a hunt mid-chase",
    "More likely to lead danger toward the pack unintentionally",
    "More likely to yelp or whine excessively",
    "More likely to hide in the den"
  ],
  minus: [
    "Less likely to listen to calming signals",
    "Less likely to distinguish real from imagined threat",
    "Less likely to stand their ground for any reason",
    "Less likely to remember safe routes home",
    "Less likely to care about pack cohesion when fleeing"
  ]
},
  {
    name: "Haunted",
    plus: [
      "More likely to flee from perceived threats",
      "More likely to think of wolves long past",
      "More likely to startle at sudden sounds or shadows",
      "More likely to revisit places tied to past events",
      "More likely to whimper in their sleep"
    ],
    minus: [
      "Less likely to stop in one place",
      "Less likely to trust the present",
      "Less likely to engage with the living pack",
      "Less likely to interact with strangers",
      "Less likely to accept comfort"
    ]
  },
  {
    name: "Desperate",
    plus: [
      "More willing to take extreme risks for food",
      "More likely to trespass into rival territory",
      "More likely to ignore injuries and refuse rest",
      "More likely to attempt dangerous solo hunts",
      "More likely to attempt to steal food"
    ],
    minus: [
      "Less likely to care about social rules",
      "Less likely to consider long-term safety",
      "Less likely to stay near the pack (if it means going hungry)",
      "Less likely to show caution in unfamiliar areas",
      "Less likely to rest until something is caught"
    ]
  },
  {
    name: "Vengeful",
    plus: [
      "More likely to remember a specific rival and track them",
      "More likely to hold a grudge after a fight",
      "More likely to kill smaller competitors",
      "More likely to sabotage a rival's hunt",
      "More likely to display dominance and mark territory"
    ],
    minus: [
      "Less likely to forgive even a minor slight",
      "Less likely to back down from a grudge match",
      "Less likely to prioritise the pack's peace over personal vendettas",
      "Less likely to let a challenger leave unharmed",
      "Less likely to accept a submissive gesture at face value"
    ]
  },
  {
    name: "Detached",
    plus: [
      "More likely to watch the pack from a distance",
      "More likely to follow their own schedule",
      "More likely to explore far reaches of the territory alone",
      "More likely to respond late or not at all to pack calls",
      "More likely to seem indifferent to praise or scolding"
    ],
    minus: [
      "Less likely to join group hunts",
      "Less likely to share in the pack's mood",
      "Less likely to defend the territory with urgency",
      "Less likely to notice subtle social cues",
      "Less likely to bond with newcomers"
    ]
  }
];

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function displayMood(moodObj) {
  document.getElementById('introText').textContent = "Your wolf is feeling…";
  document.getElementById('moodName').textContent = moodObj.name;
  const list = document.getElementById('effectsList');
  list.innerHTML = '';

  moodObj.plus.forEach(effect => {
    const li = document.createElement('li');
    li.className = 'positive';
    li.textContent = effect;
    list.appendChild(li);
  });

  moodObj.minus.forEach(effect => {
    const li = document.createElement('li');
    li.className = 'negative';
    li.textContent = effect;
    list.appendChild(li);
  });
}

function generateMood() {
  const mood = randomItem(standardMoods);
  displayMood(mood);
}

function generateFeralMood() {
  const mood = randomItem(feralMoods);
  displayMood(mood);
}

// Initial mood generation on page load (only called if on mood page)
window.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('moodName')) {
    generateMood();
  }
});
