# Umber & Rose

A responsive multi-page online store for bags and accessories, built with plain HTML, CSS and JavaScript.

**Live demo:** https://elhammohmand2006-stack.github.io/umber-rose-store/

## Features

- **Navbar** with logo, page links, search and a cart icon with a live item count
- **Mobile menu** (hamburger and close button) for small screens
- **Hero slider** with arrows, dots and auto-play. Each slide shows the product name, a short text and a "Read more" button that opens a details window
- **Product cards** with "Add to cart" buttons
- **Color slider** that shows one sneaker in four colors
- **Shopping cart** where you can add, remove, change quantity and see the final price. It is saved in the browser (`localStorage`), so it stays when you change pages
- **Search** that filters the products on the home page
- **About page** with the brand story, numbers, values, steps and team
- **Contact page** with a form (name, email and message checks) and quick answers
- **Footer** on every page with four sections: Company, Get help, Online shop and Follow us

## Color palette

| Color | Hex |
|---|---|
| Pale Rose | `#D6ADAD` |
| Umber Brown | `#5F4E4A` |
| Espresso | `#2E2321` |
| Blush | `#F6EBE8` |
| Rosewood | `#A56A6A` |

## Project structure

```
umber-rose-store/
├── index.html        # opens pages/home.html
├── pages/
│   ├── home.html
│   ├── about.html
│   └── contact.html
├── css/
│   ├── style.css     # shared styles (navbar, cart, footer)
│   ├── home.css
│   └── about.css     # used by About and Contact
└── js/
    ├── data.js       # all products
    ├── main.js       # menu, search, cart
    ├── home.js       # sliders, products, details window
    └── contact.js    # form checks
```

## How to run

1. Download or clone this repository.
2. Open `index.html` in your browser (or use the Live Server extension in VS Code).

## How to change the products

Open `js/data.js`. Edit the name, price, description or photo link of any product. The pages update by themselves.

## Built with

- HTML5
- CSS3 (Grid, Flexbox, media queries)
- JavaScript (DOM, events, `localStorage`)
- [Remix Icon](https://remixicon.com/)
- Google Fonts: Cormorant Garamond and DM Sans
- Photos from [Unsplash](https://unsplash.com/)

## Author

Elham Mohmand
