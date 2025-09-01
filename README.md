# InfoSphere - Media & Information Literacy Platform

A professional SaaS-style web platform focused on Media and Information Literacy, built with React, Tailwind CSS, and Firebase.

## Overview

InfoSphere empowers individuals with the critical thinking skills and tools needed to navigate the complex information landscape in the AI age. The platform provides comprehensive learning resources, interactive quizzes, fact-checking tools, and community discussions.

## Features

### Landing Page
- **Hero Section**: Compelling headline and call-to-action
- **About Us**: Platform mission and purpose
- **Why This Platform**: Problem statement and solution overview
- **Our Mission**: Clear professional mission statement
- **Partners Banner**: Placeholder for partner organizations
- **Journey Overview**: Three main sections (Learn, Test, Check)

### Learn Section
- **Structured Micro-courses**: Netflix-style tile layout
- **Course Categories**:
  - Spotting Fake News (3 lessons)
  - AI Deepfakes 101 (3 lessons)
  - How to Fact-check (3 lessons)
- **Interactive Lessons**: Video content, text, and "Learn More" links
- **Progress Tracking**: Course completion and quiz integration

### Test Section
- **Three Difficulty Levels**: Beginner, Intermediate, Advanced
- **Interactive Quizzes**: 10 questions per level with instant feedback
- **Progress Tracking**: Visual progress bars and score tracking
- **Badge System**: Achievement badges based on performance
- **Results Page**: Score display with leaderboard integration
- **Question of the Day**: Daily rotating questions with community discussion

### Check Section (Fact-Check Tool)
- **Multi-format Input**: URLs, headlines, and text content
- **Credibility Assessment**: 
  - Trusted sources → "This source is credible"
  - Flagged sources → "This source is unreliable"
  - Unknown sources → "Needs verification"
- **Detailed Explanations**: Clear reasoning and recommendations
- **Additional Resources**: Links to fact-checking organizations

### Community Section
- **Discussion Threads**: Linked to Question of the Day
- **Comment System**: Name + message format
- **Community Guidelines**: Clear rules and expectations
- **Firebase Integration**: Real-time comments and interactions

### Leaderboard
- **Global Rankings**: User scores and achievements
- **Filtering Options**: Timeframes and difficulty levels
- **Statistics**: Total participants, highest scores, averages
- **Badge Display**: Visual representation of user achievements

## Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd infosphere
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a Firebase project
   - Update `src/firebase.js` with your Firebase configuration
   - Enable Firestore and Authentication services

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## Project Structure

```
infosphere/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Learn.jsx
│   │   ├── Test.jsx
│   │   ├── Check.jsx
│   │   ├── Community.jsx
│   │   ├── About.jsx
│   │   └── Leaderboard.jsx
│   ├── App.jsx
│   ├── firebase.js
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Design System

### Color Palette
- **Primary**: Blue shades (primary-50 to primary-900)
- **Secondary**: Gray shades (secondary-50 to secondary-900)
- **Success**: Green for positive actions
- **Warning**: Yellow for caution states
- **Error**: Red for error states

### Typography
- **Font Family**: Inter (Google Fonts)
- **Professional**: Clean, modern, and inclusive design
- **No Emojis**: Professional icons from Lucide React

### Components
- **Cards**: Consistent card design with hover effects
- **Buttons**: Primary and secondary button styles
- **Navigation**: Responsive navbar with mobile menu
- **Forms**: Clean, accessible form elements

## Configuration

### Firebase Setup
1. Create a new Firebase project
2. Enable Firestore Database
3. Enable Authentication (optional)
4. Update the configuration in `src/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

### Tailwind CSS
The project uses Tailwind CSS v3 with custom configuration:
- Custom color palette
- Inter font family
- Responsive design utilities
- Custom component classes

## Responsive Design

The platform is fully responsive and works seamlessly on:
- **Desktop**: Full-featured experience
- **Tablet**: Optimized layouts
- **Mobile**: Touch-friendly interface

## Deployment

### Firebase Hosting
1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy to Firebase:
   ```bash
   firebase login
   firebase init hosting
   firebase deploy
   ```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- **UNESCO**: For media literacy guidelines
- **FactCheck.org**: For fact-checking methodologies
- **Poynter Institute**: For journalism standards
- **International Fact-Checking Network**: For best practices

## Support

For support and questions, please contact the development team or create an issue in the repository.
