# PrismPlus-Website
Official website of Prism+ — a community-driven Minecraft launcher based on Prism Launcher. Discover project features, downloads, documentation, updates and news. Available in English and Russian, with a modern responsive design.

## Structure

```
index.html            Home
features.html         Features
download.html         Download Center (releases, platforms, checksums)
documentation.html    Documentation
changelog.html        Changelog
about.html            About
roadmap.html          Roadmap            (footer link)
faq.html              FAQ                (footer link)
platforms.html        Supported platforms (footer link)
disclaimer.html       Disclaimer         (footer link)
credits.html          Credits & licenses (footer link)
security.html         Security policy    (footer link)
SECURITY.md           Security policy for the GitHub Security tab
assets/css/style.css  Base styles (dark theme, accent #8B5CF6)
assets/css/extra.css  Footer, FAQ, tables, code blocks, release cards
assets/js/main.js     Language switcher, mobile menu, base Russian strings
assets/js/i18n-ext.js Additional Russian strings (v2 pages)
assets/js/releases.js Release data for the Download Center
assets/js/download.js Renders the release data
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

English is written directly in the HTML. Russian strings live in two objects, both keyed by each element's `data-i18n` attribute: `RU` in `assets/js/main.js` (base pages) and `RU` in `assets/js/i18n-ext.js` (v2 pages and footer). A key missing in both falls back to English. The choice is saved in `localStorage`; `?lang=ru` or `?lang=en` forces a language.

To add a text: put the English in the HTML with a new `data-i18n="key"`, then add the same key to one of the `RU` objects (prefer `i18n-ext.js`).

## Publishing a release (Download Center)

Upload the files to a GitHub Release, compute each file's checksum (`sha256sum FILE`, `shasum -a 256 FILE` or `Get-FileHash FILE -Algorithm SHA256`), then add an entry to the array in `assets/js/releases.js`, newest first:

```js
{
  version: "X.Y.Z",
  date: "YYYY-MM-DD",                                   // optional
  notes: "https://github.com/OWNER/REPO/releases/tag/TAG", // optional
  files: [
    {
      platform: "Windows",
      arch: "...",                                      // optional
      name: "file name",
      size: "... MB",                                   // optional
      sha256: "64 hex characters",
      url: "https://github.com/OWNER/REPO/releases/download/TAG/FILE"
    }
  ]
}
```

Files without a valid 64-character SHA-256 or a `https://github.com/.../` URL are skipped, so nothing unverifiable is displayed. While the array is empty the page shows "no releases yet". Also update the "Supported platforms" page when platform support is verified, and the "Supported versions" section of the security policy.

## Deployment (GitHub Pages)

In the repository: Settings → Pages → Build and deployment → Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.

## License

MIT, see [LICENSE](LICENSE).
