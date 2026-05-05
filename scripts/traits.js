// Wolf Trait Generator – using MIT ideonomy trait lists
const traits = {
    positive: [
        "Accessible", "Active", "Adaptable", "Admirable", "Adventurous", "Agreeable", "Alert",
        "Amiable", "Anticipative", "Appreciative", "Articulate", "Aspiring", "Athletic",
        "Attractive", "Balanced", "Benevolent", "Brilliant", "Calm", "Capable", "Captivating",
        "Caring", "Charismatic", "Charming", "Cheerful", "Clean", "Clear-headed",
        "Clever", "Companionly", "Compassionate", "Conciliatory", "Confident",
        "Conscientious", "Considerate", "Constant", "Contemplative", "Cooperative", "Courageous",
        "Courteous", "Creative", "Curious", "Daring", "Decent",
        "Decisive", "Dedicated", "Deep", "Dignified", "Directed", "Disciplined", "Discreet",
        "Dramatic", "Dutiful", "Dynamic", "Earnest", "Ebullient", "Efficient",
        "Elegant", "Eloquent", "Empathetic", "Energetic", "Enthusiastic",
        "Exciting", "Extraordinary", "Fair", "Faithful", "Farsighted", "Felicific", "Firm",
        "Flexible", "Focused", "Forceful", "Forgiving", "Forthright", "Freethinking",
        "Friendly", "Fun-loving", "Gallant", "Generous", "Gentle", "Genuine", "Good-natured",
        "Gracious", "Hardworking", "Healthy", "Hearty", "Helpful", "Heroic", "High-minded",
        "Honest", "Honorable", "Humble", "Humorous", "Idealistic", "Imaginative", "Impressive",
        "Incisive", "Incorruptible", "Independent", "Individualistic", "Innovative",
        "Inoffensive", "Insightful", "Insouciant", "Intelligent", "Intense", "Interesting",
        "Intuitive", "Kind", "Knowledgeable", "Leaderly", "Leisurely",
        "Liberal", "Logical", "Lovable", "Loyal", "Lyrical", "Magnanimous", "Many-sided",
        "Mature", "Methodical", "Meticulous", "Moderate", "Modest",
        "Multi-leveled", "Neat", "Nonauthoritarian", "Objective", "Observant", "Open",
        "Optimistic", "Orderly", "Organized", "Original", "Painstaking", "Passionate",
        "Patient", "Peaceful", "Perceptive", "Perfectionist", "Personable",
        "Persuasive", "Planful", "Playful", "Polished", "Popular", "Practical", "Precise",
        "Principled", "Profound", "Protean", "Protective", "Providential", "Prudent",
        "Punctual", "Purposeful", "Rational", "Realistic", "Reflective", "Relaxed",
        "Reliable", "Resourceful", "Respectful", "Responsible", "Responsive", "Reverential",
        "Romantic", "Rustic", "Sane", "Scrupulous", "Secure",
        "Selfless", "Self-critical", "Self-defacing", "Self-denying", "Self-reliant",
        "Self-sufficient", "Sensitive", "Sentimental", "Serious",
        "Sharing", "Shrewd", "Simple", "Skillful", "Sober", "Sociable", "Solid",
        "Spontaneous", "Sporting", "Stable", "Steadfast", "Steady",
        "Stoic", "Strong", "Studious", "Subtle", "Sweet", "Sympathetic",
        "Systematic", "Tasteful", "Teacherly", "Thorough", "Tidy", "Tolerant", "Tractable",
        "Trusting", "Uncomplaining", "Understanding", "Undogmatic", "Unfoolable",
        "Upright", "Venturesome", "Vivacious", "Warm",
        "Well-rounded", "Winning", "Wise", "Witty", "Youthful"
    ],
    neutral: [
        "Absentminded", "Aggressive", "Ambitious", "Amusing", "Artful", "Ascetic",
        "Authoritarian", "Big-thinking", "Breezy", "Busy",
        "Casual", "Cerebral", "Chummy", "Circumspect", "Competitive", "Complex",
        "Confidential", "Conservative", "Contradictory", "Crisp", "Cute", "Deceptive",
        "Determined", "Dominating", "Dreamy", "Driving", "Droll", "Dry", "Earthy",
        "Emotional", "Enigmatic", "Experimental", "Familial", "Folksy",
        "Formal", "Freewheeling", "Frugal", "Guileless", "High-spirited",
        "Hurried", "Hypnotic", "Iconoclastic", "Idiosyncratic", "Impassive",
        "Impulsive", "Inactive", "Indulgent", "Inhibited", "Insecure",
        "Insensitive", "Insistent", "Interrupting", "Intimidating", "Irreverent",
        "Maternal", "Mellow", "Moralistic", "Mystical",
        "Noncommittal", "Noncompetitive", "Obedient", "Ordinary",
        "Outspoken", "Physical", "Placid", "Predictable",
        "Preoccupied", "Private", "Proud", "Pure", "Questioning",
        "Quiet", "Reserved", "Retiring",
        "Self-conscious", "Skeptical", "Smooth", "Soft", "Solemn",
        "Solitary", "Stern", "Stolid", "Strict", "Stubborn", "Subjective",
        "Surprising", "Tough", "Unaggressive", "Unambitious", "Unceremonious",
        "Unchanging", "Undemanding", "Unfathomable", "Unhurried", "Uninhibited",
        "Unpredictable", "Unsentimental", "Whimsical"
    ],
    negative: [
        "Abrasive", "Abrupt", "Aimless", "Aloof", "Amoral",
        "Angry", "Anxious", "Apathetic", "Arbitrary", "Argumentative", "Arrogant",
        "Asocial", "Barbaric", "Bewildered", "Bizarre", "Bland", "Blunt",
        "Boisterous", "Brittle", "Brutal", "Calculating",
        "Callous", "Cantankerous", "Careless", "Cautious", "Charmless", "Childish",
        "Clumsy", "Coarse", "Cold", "Colorless", "Complacent", "Complaintive",
        "Compulsive", "Conceited", "Condemnatory", "Conformist", "Confused",
        "Conventional", "Cowardly", "Crafty", "Crass",
        "Critical", "Crude", "Cruel", "Cynical", "Deceitful",
        "Delicate", "Demanding", "Dependent", "Desperate", "Destructive", "Devious",
        "Difficult", "Dirty", "Disconcerting", "Discontented", "Discouraging",
        "Discourteous", "Dishonest", "Disloyal", "Disobedient", "Disorderly",
        "Disorganized", "Disputatious", "Disrespectful", "Disruptive", "Dissolute",
        "Dissonant", "Distractible", "Disturbing", "Dogmatic", "Domineering",
        "Dull", "Easily Discouraged", "Egocentric", "Enervated", "Envious",
        "Erratic", "Escapist", "Excitable", "Expedient", "Extravagant", "Extreme",
        "Faithless", "False", "Fanatical", "Fanciful", "Fatalistic", "Fawning",
        "Fearful", "Fickle", "Fiery", "Fixed", "Foolish", "Forgetful",
        "Frightening", "Frivolous", "Gloomy", "Graceless", "Grand",
        "Greedy", "Grim", "Gullible", "Hateful", "Haughty", "Hesitant",
        "Hidebound", "Hostile", "Ignorant", "Imitative", "Impatient",
        "Impractical", "Imprudent", "Impulsive", "Inconsiderate", "Incurious",
        "Indecisive", "Indulgent", "Inert", "Inhibited", "Insecure", "Insensitive",
        "Insincere", "Insulting", "Intolerant", "Irascible", "Irrational",
        "Irresponsible", "Irritable", "Lazy", "Loquacious", "Malicious",
        "Mannerless", "Mawkish", "Mealymouthed", "Meddlesome",
        "Melancholic", "Messy", "Miserable", "Misguided",
        "Mistaken", "Monstrous", "Moody", "Morbid", "Muddle-headed",
        "Naive", "Narcissistic", "Narrow", "Narrow-minded", "Negativistic",
        "Neglectful", "Obnoxious", "Obsessive", "Obvious",
        "Odd", "Offhand", "One-dimensional", "One-sided", "Opinionated", "Opportunistic",
        "Outrageous", "Overimaginative", "Paranoid", "Passive",
        "Perverse", "Petty", "Phlegmatic", "Plodding", "Pompous",
        "Possessive", "Power-hungry", "Prejudiced", "Presumptuous",
        "Pretentious", "Prim", "Procrastinating", "Provocative",
        "Pugnacious", "Quirky", "Reactive", "Regimental",
        "Regretful", "Repentant", "Repressed", "Resentful", "Ridiculous", "Rigid",
        "Ritualistic", "Rowdy", "Sadistic", "Sanctimonious", "Scheming",
        "Scornful", "Secretive", "Sedentary", "Selfish", "Self-indulgent", "Shallow",
        "Shortsighted", "Shy", "Silly", "Single-minded", "Sloppy", "Slow", "Sly",
        "Small-thinking", "Softheaded", "Sordid", "Steely", "Stiff",
        "Stupid", "Submissive", "Superficial", "Superstitious", "Suspicious", "Tactless",
        "Tasteless", "Tense", "Thievish", "Thoughtless", "Timid", "Transparent",
        "Treacherous", "Troublesome", "Unappreciative", "Uncaring",
        "Uncharitable", "Unconvincing", "Uncooperative", "Uncreative", "Uncritical",
        "Unctuous", "Undisciplined", "Unfriendly", "Ungrateful", "Unhealthy",
        "Unimaginative", "Unimpressive", "Unlovable", "Unpolished", "Unprincipled",
        "Unrealistic", "Unreflective", "Unreliable", "Unrestrained", "Unstable",
        "Vacuous", "Vague", "Venal", "Venomous", "Vindictive", "Vulnerable",
        "Weak", "Weak-willed", "Willful", "Wishful", "Zany"
    ]
};

function fitTraitValue(card) {
  const valueSpan = card.querySelector('.trait-value');
  if (!valueSpan) return;

  // Temporarily force nowrap so we can measure the natural width
  valueSpan.style.whiteSpace = 'nowrap';
  valueSpan.style.fontSize = '';   // reset to CSS default

  const cardWidth = card.clientWidth - 32;  // 16px padding each side (adjust if needed)
  let fontSize = parseFloat(getComputedStyle(valueSpan).fontSize);

  // Reduce font-size until the text fits within the card width
  while (valueSpan.scrollWidth > cardWidth && fontSize > 0.75) {
    fontSize -= 0.1;
    valueSpan.style.fontSize = fontSize + 'rem';
  }

  // Allow normal wrapping again (though now it usually won't need it)
  valueSpan.style.whiteSpace = '';
}

function getRandomTrait(category) {
  const list = traits[category];
  return list[Math.floor(Math.random() * list.length)];
}

function regenerateTrait(category) {
  const card = document.querySelector(`.trait-card[data-category="${category}"]`);
  const valueSpan = document.getElementById(category + 'Trait');
  if (!card || !valueSpan) return;

  card.classList.add('updating');

  setTimeout(() => {
    valueSpan.textContent = getRandomTrait(category);
    fitTraitValue(card);          // ← magic happens here
    card.classList.remove('updating');
  }, 250);
}

function generateTraits() {
  ['positive', 'neutral', 'negative'].forEach(category => {
    regenerateTrait(category);
  });
  // Since regenerateTrait is async (setTimeout), we need to fit after the last update
  setTimeout(() => {
    document.querySelectorAll('.trait-card').forEach(card => fitTraitValue(card));
  }, 300); // slightly longer than the 250ms fade timeout
}

// Main button
document.getElementById('generateTraitsBtn').addEventListener('click', generateTraits);

// Click on individual cards
document.querySelectorAll('.trait-card').forEach(card => {
  card.addEventListener('click', function() {
    const category = this.dataset.category;
    regenerateTrait(category);
  });
});

// Generate on page load
generateTraits();
