// packname.js – Pack Name Generator for Tale of Tails
// Uses Welsh landscape terms to generate Celtic-flavored pack names.

// ---------- First parts (often a noun/adjective) ----------
const firstParts = [
  { welsh: "Aber", meaning: "river mouth" },
  { welsh: "Afon", meaning: "river" },
  { welsh: "Blaen", meaning: "head, source" },
  { welsh: "Bryn", meaning: "hill" },
  { welsh: "Cad", meaning: "battle" },
  { welsh: "Carn", meaning: "cairn" },
  { welsh: "Cefn", meaning: "ridge" },
  { welsh: "Coed", meaning: "forest" },
  { welsh: "Crug", meaning: "mound" },
  { welsh: "Cwm", meaning: "valley" },
  { welsh: "Dol", meaning: "meadow" },
  { welsh: "Eira", meaning: "snow" },
  { welsh: "Elan", meaning: "fawn" },
  { welsh: "Eryr", meaning: "eagle" },
  { welsh: "Garw", meaning: "rough" },
  { welsh: "Glas", meaning: "blue/green" },
  { welsh: "Glyn", meaning: "deep valley" },
  { welsh: "Gwaun", meaning: "moorland" },
  { welsh: "Haf", meaning: "summer" },
  { welsh: "Heol", meaning: "road, way" },
  { welsh: "Llan", meaning: "settlement" },
  { welsh: "Llyn", meaning: "lake" },
  { welsh: "Moel", meaning: "bare hill" },
  { welsh: "Mor", meaning: "sea" },
  { welsh: "Mynydd", meaning: "mountain" },
  { welsh: "Nant", meaning: "stream" },
  { welsh: "Pen", meaning: "head, top" },
  { welsh: "Pont", meaning: "bridge" },
  { welsh: "Rhos", meaning: "moor" },
  { welsh: "Tal", meaning: "front, end" },
  { welsh: "Tref", meaning: "homestead" },
  { welsh: "Bach", meaning: "small" },
  { welsh: "Coch", meaning: "red" },
  { welsh: "Du", meaning: "black" },
  { welsh: "Gwyn", meaning: "white, blessed" },
  { welsh: "Hen", meaning: "old" },
  { welsh: "Llwyd", meaning: "grey, wise" }
];

// ---------- Second parts (often a noun or suffix) ----------
const secondParts = [
  { welsh: "adar", meaning: "bird" },
  { welsh: "ar", meaning: "on, upon" },
  { welsh: "caer", meaning: "fort" },
  { welsh: "coch", meaning: "red" },
  { welsh: "dan", meaning: "under" },
  { welsh: "draig", meaning: "dragon" },
  { welsh: "dwr", meaning: "water" },
  { welsh: "fach", meaning: "small" },
  { welsh: "faes", meaning: "field" },
  { welsh: "fawr", meaning: "great" },
  { welsh: "garn", meaning: "cairn" },
  { welsh: "goch", meaning: "red (mutated)" },
  { welsh: "las", meaning: "blue/green" },
  { welsh: "lwyn", meaning: "grove" },
  { welsh: "mawr", meaning: "big" },
  { welsh: "nant", meaning: "stream" },
  { welsh: "og", meaning: "full of, place of" },
  { welsh: "ol", meaning: "track" },
  { welsh: "rhyd", meaning: "ford" },
  { welsh: "wen", meaning: "white" },
  { welsh: "wern", meaning: "alder grove" },
  { welsh: "wyllt", meaning: "wild" },
  { welsh: "ydd", meaning: "dwelling" },
  { welsh: "yn", meaning: "in, at" },
  { welsh: "ell", meaning: "little" },
  { welsh: "ig", meaning: "place" },
  { welsh: "bwlch", meaning: "pass" },
  { welsh: "ffordd", meaning: "road" },
  { welsh: "gelli", meaning: "grove" },
  { welsh: "maen", meaning: "stone" },
  { welsh: "plas", meaning: "mansion, hall" },
  { welsh: "isaf", meaning: "lower" },
  { welsh: "uchaf", meaning: "upper" },
  { welsh: "ffrwd", meaning: "stream" }
];

// ---------- Pre-made traditional Welsh place names ----------
const preMadeNames = [
  { name: "Aberafon", meaning: "Mouth of the River Afon" },
  { name: "Cwmdu", meaning: "Black Valley" },
  { name: "Bryncoch", meaning: "Red Hill" },
  { name: "Afonlas", meaning: "Blue River" },
  { name: "Dolwen", meaning: "White Meadow" },
  { name: "Penrhos", meaning: "End of the Moor" },
  { name: "Nantgarw", meaning: "Rough Stream" },
  { name: "Glynmawr", meaning: "Great Valley" },
  { name: "Talyllyn", meaning: "End of the Lake" },
  { name: "Cefngarn", meaning: "Ridge Cairn" },
  { name: "Moelydd", meaning: "Bare Hills" },
  { name: "Rhosfach", meaning: "Small Moor" },
  { name: "Coedwig", meaning: "Wood of the Forest" },
  { name: "Mynyddgwyn", meaning: "White Mountain" },
  { name: "Llandwr", meaning: "Settlement by the Water" },
  { name: "Llyncwm", meaning: "Valley Lake" },
  { name: "Aberglyn", meaning: "Mouth of the Glen" },
  { name: "Blaendwr", meaning: "Head of the Water" },
  { name: "Carnfach", meaning: "Little Cairn" },
  { name: "Cwmyrllwyd", meaning: "Valley of the Grey" },
  { name: "Dolgarw", meaning: "Rough Meadow" },
  { name: "Gwaunfawr", meaning: "Great Moor" },
  { name: "Heolfawr", meaning: "Great Road" },
  { name: "Llanafon", meaning: "River Settlement" },
  { name: "Penycae", meaning: "Top of the Field" },
  { name: "Trefgoch", meaning: "Red Homestead" },
  { name: "Ysgoldy", meaning: "School" },
  { name: "Aberllwyd", meaning: "Grey River Mouth" },
  { name: "Brynllwyn", meaning: "Hill Grove" },
  { name: "Carneddau", meaning: "Cairns" }
];

// ---------- Title components (adjective + noun) ----------
const titleAdjectives = [
  "Silent", "Ancient", "Wandering", "Howling", "Golden",
  "Misty", "Lone", "Wise", "Fierce", "Swift",
  "Deep", "Shining", "Wild", "Frozen", "Amber",
  "Drifting", "Hidden", "Vigilant", "Silver", "Crimson"
];

const titleNouns = [
  "Pines", "Wind", "Sky", "Stones", "Meadow",
  "Stars", "River", "Moon", "Ridge", "Valley",
  "Hill", "Wood", "Storm", "Dawn", "Dusk",
  "Falls", "Trail", "Fang", "Heart", "Light"
];

// Helpers
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Smoothly merge two Welsh‑like pieces
function mergeParts(first, second) {
  // Drop double vowels to keep names short and pronounceable
  let result = first + second;
  // Very basic harmony: if last char of first is a vowel and second starts with vowel-like,
  // remove the initial vowel of second if second length > 1
  const last1 = first.charAt(first.length - 1);
  const first2 = second.charAt(0);
  if (/[aeiouwy]/i.test(last1) && /[aeiouwy]/i.test(first2) && second.length > 1) {
    result = first + second.slice(1);
  }
  return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
}

// Generate a Welsh name from parts
function generateNameFromParts() {
  const firstObj = randomItem(firstParts);
  const secondObj = randomItem(secondParts);
  const name = mergeParts(firstObj.welsh, secondObj.welsh);
  const meaning = `${firstObj.meaning} + ${secondObj.meaning}`;
  return { name, meaning };
}

// Pick a random pre-made name
function getPreMade() {
  const entry = randomItem(preMadeNames);
  return { name: entry.name, meaning: entry.meaning };
}

// Main generation: 30% chance of pre-made
function getRandomPackName() {
  if (Math.random() < 0.3) {
    return getPreMade();
  } else {
    return generateNameFromParts();
  }
}

// Generate a title: "of the [Adjective] [Noun]" or sometimes just "of the [Noun]"
function generateTitle() {
  // 80% chance to include an adjective, 20% just noun
  if (Math.random() < 0.8) {
    const adj = randomItem(titleAdjectives);
    const noun = randomItem(titleNouns);
    return `of the ${adj} ${noun}`;
  } else {
    const noun = randomItem(titleNouns);
    return `of the ${noun}`;
  }
}

// Display result in the page
function displayPackName() {
  const outputDiv = document.getElementById('generatorOutput');
  const { name, meaning } = getRandomPackName();
  const title = generateTitle();

  outputDiv.innerHTML = `
    <h2 id="packNameDisplay" style="font-size: 2.8rem; color: var(--accent); margin-bottom: 0.2rem;">${name}</h2>
    <p style="font-style: italic; font-size: 1.2rem; margin: 0.2rem 0; color: var(--text);">${title}</p>
    <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.5rem;">Meaning: ${meaning}</p>
  `;
}

// Setup
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('generateBtn');
  if (btn) {
    btn.disabled = false;
    btn.addEventListener('click', displayPackName);
    // Show a name right away
    displayPackName();
  }
});
