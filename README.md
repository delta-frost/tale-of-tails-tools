# 🐺 Tale of Tails Tools

Hey there! This is a little collection of roleplay tools for the [Tale of Tails](https://discord.gg/kAu4btGGDJ) Discord server — an emote‑only WolfQuest roleplay that happens right inside the game. Think of it as a swiss army knife for your wolf’s story.

**Crafted by Saturday** · **Powered by [Eleventy](https://www.11ty.dev/)**

---

## ✨ What’s inside?

- **Mood Generator** – Roll a normal or feral mood for your wolf, complete with effects and a fitting vibe.  
- **Wolf Trait Generator** – Get a random positive, neutral, and negative personality trait. Click any card to re‑roll just that one (it even shimmers!).  
- **Pack Name Generator** – Create unique pack names based in Welsh.  
- **Pack Theme Picker** – Swap the whole site’s look between Erroa, Gwanwyn, and Tonnau with a single click.  
- **More tools on the way** – Ideas from the server are always welcome!

## 🛠️ Under the hood

- **Static site builder:** Eleventy  
- **Templates:** Nunjucks (`.njk`)  
- **Styling:** Custom CSS with theme variables (themes change colours, fonts, and shadows)  
- **Magic bits:** Vanilla JavaScript
- **Hosting:** Happy to live on Netlify, Vercel, or GitHub Pages  

## 🚀 Wanna tinker locally?

Spin it up on your own machine in under a minute:

1. Make sure you’ve got [Node.js](https://nodejs.org/) (version 14 or up).  
2. Clone the repo and jump in:  
   ```bash
   git clone https://github.com/your-username/tale-of-tails-tools.git
   cd tale-of-tails-tools
   npm install
   ```
3. Fire up the dev server:  
   ```bash
   npx @11ty/eleventy --serve
   ```  
   It’ll be at `http://localhost:8080` (or just watch the terminal).  
4. Change the `.njk` or `.css` files, and the browser updates automatically. Easy peasy.

---

## 🤝 Wanna contribute?

Found a bug? Got an idea for a new tool? Open an issue or hit up Saturday in the pack server. Pull requests are super welcome — just keep the vibe friendly and wolfy.

## 📜 License

This project is licensed under the [MIT License](LICENSE). Basically, do what you like, just keep the original credit.
