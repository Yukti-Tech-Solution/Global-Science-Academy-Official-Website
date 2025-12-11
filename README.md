# Global Science Academy - Official Website

> Premier coaching institute in Ardhapur, Nanded for JEE, NEET & CET preparation

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fglobalscience-academy.co.in)](https://globalscience-academy.co.in)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 🔗 Live Website

Visit: https://globalscience-academy.co.in

## 📚 About

Global Science Academy is a leading coaching institute in Ardhapur, Nanded, Maharashtra, specializing in:

- 11th & 12th Science Education
- JEE (Joint Entrance Examination) preparation
- NEET (National Eligibility cum Entrance Test) coaching
- CET (Common Entrance Test) training
- Expert faculty in Physics, Chemistry, Mathematics & Biology

**Location:** Behind Bole Hospital, Langade Nagar, Ardhapur, Nanded - 431704, Maharashtra

## 🌟 Features

### Website Features

- ✅ Modern, responsive design
- ✅ SEO optimized for local search
- ✅ Fast loading performance
- ✅ Mobile-first approach
- ✅ Functional contact form with EmailJS integration
- ✅ Google Maps integration
- ✅ Course information & achievements showcase
- ✅ Dark/Light theme support

### Technical Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Form Handling:** React Hook Form with Zod validation
- **Email Service:** EmailJS
- **Routing:** React Router v6
- **Icons:** Lucide React

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/pnpm/yarn
- Git

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Yukti-Tech-Solution/Global-Science-Academy-Official-Website.git
cd Global-Science-Academy-Official-Website
```

2. **Install dependencies**

```bash
npm install
# or
pnpm install
# or
yarn install
```

3. **Configure EmailJS (for contact form)**
   - Create account at [EmailJS.com](https://www.emailjs.com/)
   - Get your Service ID, Template ID, and Public Key
   - Update in `src/components/home/ContactSection.tsx`:

```typescript
const EMAILJS_SERVICE_ID = "your_service_id";
const EMAILJS_TEMPLATE_ID = "your_template_id";
const EMAILJS_PUBLIC_KEY = "your_public_key";
```

4. **Run development server**

```bash
npm run dev
# or
pnpm dev
```

Visit: http://localhost:5173

### Build for Production

```bash
npm run build
# Output will be in /dist folder
# Preview production build
npm run preview
```

## 📁 Project Structure

```
Global-Science-Academy/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   └── home/       # Page-specific components
│   ├── lib/            # Utilities and helpers
│   ├── hooks/          # Custom React hooks
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 📧 Contact Form Setup

The website includes a functional contact form powered by EmailJS.

**Setup Steps:**

1. Create a free EmailJS account
2. Add Gmail service and connect your email
3. Create an email template with these variables:
   - `{{from_name}}` - Student name
   - `{{from_email}}` - Student email
   - `{{phone_number}}` - Phone number
   - `{{message}}` - Message content
   - `{{submission_date}}` - Submission timestamp
4. Update credentials in `src/components/home/ContactSection.tsx`
5. Test the form

**Current Email:** globalscienceacademyadp@gmail.com

## 🎨 Customization

**Update Content**
- Hero Section: `src/components/home/HeroSection.tsx`
- Courses: `src/components/home/CoursesSection.tsx`
- About: `src/components/home/AboutSection.tsx`
- Contact: `src/components/home/ContactSection.tsx`

**Update Styling**
- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Theme colors: `src/components/ui/theme-provider.tsx`

**Update SEO**
- Meta tags in `index.html`
- Update `public/robots.txt`
- Create `public/sitemap.xml`

## 🔍 SEO Optimization

Website is optimized for:

- ✅ Google Search (Local SEO for Nanded/Ardhapur)
- ✅ Mobile responsiveness
- ✅ Fast page load (Lighthouse score 90+)
- ✅ Schema markup for educational organization
- ✅ Social media sharing (Open Graph tags)

**Target Keywords:**

- Science coaching Nanded
- JEE coaching Ardhapur
- NEET coaching Nanded
- CET classes Nanded
- 11th 12th coaching Maharashtra

## 📱 Contact Information

- **Address:** Behind Bole Hospital, Langade Nagar, Ardhapur, 431704
- **Phone:** Raju B Salunke: +91-9823745311 | Balaji T Sawant: +91-9403745844
- **Email:** globalscienceacademyadp@gmail.com
- **Hours:** Monday - Saturday: 7:30 AM – 2:30 PM (Sunday Closed)
- **Google Maps:** View Location

## 🤝 Contributing

This is a private project for Global Science Academy. For updates or issues, contact the development team.

## 📄 License

© 2024 Global Science Academy. All rights reserved.

## 🛠️ Maintenance & Support

- Developed by: Yukti Tech Solution
- Repository: GitHub
- For technical support or updates, contact the development team.

Built by yukti tech solution (yuktitechsolution.co.in) for Global Science Academy, Nanded
