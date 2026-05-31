# Click! — Two Player Turn Counter

A two-player browser game where players take turns clicking a single button. Each click increments the current player's score and passes the turn to the other player.

## 📁 Project Structure

```
├── index.html   → Page layout: title, button and scoreboard
├── style.css    → Dark theme, color variables and layout
└── script.js    → Turn logic, score tracking and DOM updates
```

## 🚀 How It Works

There is one shared button. Every time it's clicked:

1. The turn switches to the other player
2. The active player's score goes up by 1
3. The button color and the heading text update to reflect whose turn it is now

### Turn switching with modulo

The core mechanic is this line:

```js
turn = (turn + 1) % 2;
```

`turn` is either `0` or `1`. Adding 1 and applying `% 2` (remainder of dividing by 2) makes it alternate:
- `0 → 1 → 0 → 1 → ...`

This is a very common pattern for toggling between two states.

### Dynamically created score elements

The score `<div>`s are not written in HTML — they're created in JavaScript with `document.createElement()` and then injected into the page with `appendChild()`. This is intentional DOM manipulation practice.

```js
let player1Counter = document.createElement("div");
player1.appendChild(player1Counter);
```

### CSS variables for colors

The two player colors are defined once in `:root` and referenced both in CSS and in JavaScript via `var(--green)` and `var(--blue)`, keeping everything consistent from a single source.

## 🧠 Key Concepts

- **Modulo (`%`) for toggling** — clean way to alternate between two values
- **`document.createElement()` + `appendChild()`** — creating and injecting elements via JS
- **`textContent`** — updating what's displayed inside an element
- **CSS variables (`var()`)** — reusable color tokens shared across CSS and JS
- **Array indexing by turn** — using `turn` as an index into `colors[]` and `players[]`

## 🛠️ How To Run

No dependencies needed. Open `index.html` in any browser and start clicking.
