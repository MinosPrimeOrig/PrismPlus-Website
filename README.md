# PrismPlus-Website
Official website of Prism+ — a community-driven Minecraft launcher based on Prism Launcher. Discover project features, downloads, documentation, updates and news. Available in English and Russian, with a modern responsive design.

## Structure

```
index.html            Home
features.html         Features
download.html         Download
documentation.html    Documentation
changelog.html        Changelog
about.html            About
assets/css/style.css  Styles (dark theme, accent #8B5CF6)
assets/js/main.js     Language switcher + mobile menu + Russian strings
assets/logo.svg       Logo / favicon
.nojekyll             Serve files as-is on GitHub Pages
```

Plain HTML5, CSS3 and vanilla JavaScript. No build step and no external dependencies. All paths are relative, so the site works from a project URL such as `https://<user>.github.io/PrismPlus-Website/`.

## Local preview

Open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000
```

## Languages

English is written directly in the HTML. Russian strings live in the `RU` object in `assets/js/main.js`, keyed by each element's `data-i18n` attribute. A missing Russian key falls back to English. The choice is saved in `localStorage`; `?lang=ru` or `?lang=en` forces a language.

To add a text: put the English in the HTML with a new `data-i18n="key"`, then add the same key to `RU`.

## Deployment (GitHub Pages)

In the repository: Settings → Pages → Build and deployment → Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.

## License

MIT, see [LICENSE](LICENSE).
