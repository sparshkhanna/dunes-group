# Dunes Group

A modern React application built with Tailwind CSS for beautiful, responsive design.

## Features

- ⚡ **Lightning Fast** - Built with modern React and optimized for performance
- 🎨 **Beautiful Design** - Styled with Tailwind CSS for modern, responsive layouts
- 🔒 **Secure & Reliable** - Built with security best practices and modern standards
- 📱 **Responsive** - Works perfectly on all devices and screen sizes

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd dunes-group-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The app will open in your browser at [http://localhost:3000](http://localhost:3000).

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Tech Stack

- **React** - A JavaScript library for building user interfaces
- **Tailwind CSS** - A utility-first CSS framework for rapid UI development
- **PostCSS** - A tool for transforming CSS with JavaScript plugins
- **Autoprefixer** - A PostCSS plugin to parse CSS and add vendor prefixes

## Project Structure

```
dunes-group-app/
├── public/          # Static files
├── src/             # Source code
│   ├── App.js       # Main application component
│   ├── index.js     # Application entry point
│   └── index.css    # Global styles with Tailwind directives
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── package.json     # Project dependencies and scripts
```

## Customization

### Tailwind CSS Configuration

The Tailwind CSS configuration is located in `tailwind.config.js`. You can customize:

- Colors and themes
- Spacing and sizing
- Typography
- Breakpoints
- And much more

### Adding New Components

1. Create your component in the `src/components/` directory
2. Use Tailwind CSS classes for styling
3. Import and use the component in your app

## Deployment

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploying to Various Platforms

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your repository and deploy automatically
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload the `build` folder contents

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository.
