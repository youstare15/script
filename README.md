# Script — React learning project

This repository began as a single HTML page. It now has a small React + Vite starting point, while the cleaned-up original page remains in `page2.html`.

## Run it on your computer

You need Node.js and npm installed. In the project folder, run:

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal. To make a production build, run `npm run build`.

## Project structure

```text
.
├── index.html                 # HTML shell loaded by Vite
├── page2.html                 # cleaned original page, kept for reference
├── package.json               # project scripts and dependencies
├── vite.config.js             # connects Vite to React
└── src/
    ├── main.jsx               # starts React in the browser
    ├── App.jsx                # main page component
    ├── styles.css             # page styles
    └── components/
        └── LanguageList.jsx   # reusable list component
```

## What was wrong in the original HTML?

- `<htlm>` was a typo. The browser expects `<html>`.
- The metadata tag used `utf-8/`. The correct value is `UTF-8`, without a slash.
- Lists were nested in the wrong order, and a description list was used for ordinary page content. Use `<ul>` for bullet points and `<ol>` for numbered steps.
- Several links pointed to files or locations that do not exist in this repository. Those links could not work, so the useful section links now point to real sections on the page.
- The page contained random test characters and unrelated text. Those were removed; the short bio and the original learning topics were kept.
- The heading used inline color styling. The React version puts styling in `src/styles.css`, where it is easier to manage.

## A gradual React learning path

1. Edit the text and HTML-like JSX in `src/App.jsx`.
2. Change colors and spacing in `src/styles.css`.
3. Open `src/components/LanguageList.jsx` and see how a component receives its list through a prop.
4. Add one small feature at a time, such as a project section or a button with state.
5. Keep reusable pieces in `src/components/` as the page grows.

React lets you adopt its parts gradually. This starter uses Vite to run and build a small React app, which is a simple setup for learning the basics. See the [React installation guide](https://react.dev/learn/installation) and [Vite guide](https://vite.dev/guide/).
