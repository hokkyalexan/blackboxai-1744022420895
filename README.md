
Built by https://www.blackbox.ai

---

```markdown
# SphaleriteGems.id

## Project Overview
**SphaleriteGems.id** is a web application designed for showcasing high-quality Indonesian sphalerite gemstones. This project serves as an online platform to display gemstone collections, provide an overview of the company, and facilitate customer inquiries. The website features a modern design built using HTML, CSS, and Tailwind CSS for styling.

## Installation
To set up the SphaleriteGems.id project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/sphaleritegems.git
   cd sphaleritegems
   ```

2. **Open the `index.html` file in your preferred web browser**. The website is a static site, so no additional setup is required.

3. (Optional) If you want to use a development server, you can serve the files using any local server tool (e.g., `Live Server` extension in Visual Studio Code, or by using Python's built-in HTTP server):
   ```bash
   python -m http.server
   ```

## Usage
Once you have the site open in your browser, you will find various sections including a home page, product listings, information about the gemstones, and contact details. Users can explore the collection of gemstones available for inquiry by navigating through the pages.

### Key User Actions:
- **Browse Products**: See different types of sphalerite gemstones in the products section.
- **Contact Us**: Fill out the contact form with inquiries about products or orders.

## Features
- Responsive design using Tailwind CSS for an optimal viewing experience across devices.
- Informative sections including:
  - Home page with a hero section and features of the gemstones.
  - Product gallery showcasing different sphalerite gemstones.
  - An about page detailing the qualities and sourcing of the gemstones.
  - A contact form for customer inquiries.
- Smooth scrolling and hover effects for an enhanced user interaction.

## Dependencies
The project relies on the following external libraries:
- **Tailwind CSS**: A utility-first CSS framework for designing responsive layouts.
- **Font Awesome**: For scalable vector icons used throughout the UI.
- **Google Fonts (Poppins)**: To achieve modern typography.

You can find these libraries linked in the `<head>` of each HTML file:
```html
<link rel="stylesheet" href="https://cdn.tailwindcss.com">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## Project Structure
```
sphaleritegems/
│
├── index.html            # Main landing page
├── about.html            # About page
├── products.html         # Product listings page
├── contact.html          # Contact form page
├── 404.html              # Page Not Found page
├── styles.css            # Custom styles for the project
├── script.js             # JavaScript for interactivity
```

### Directory Breakdown:
- **HTML Files**: Serve as individual web pages including home, about, products, contact, and a 404 error page.
- **CSS File**: Contains custom styles for branding and layout adjustments.
- **JavaScript File**: Contains scripts for functionality such as form validation and interactive elements.

## Contributions
Contributions are welcome! If you have suggestions for improvements or find any issues, please open an issue or submit a pull request.

## License
This project is open-sourced under the [MIT License](LICENSE).
```