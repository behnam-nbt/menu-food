# Next.js Menu App

This project is a **Next.js** application that demonstrates the use of **Static Site Generation (SSG)**, **Server-Side Rendering (SSR)**, and **Incremental Static Regeneration (ISR)**. It is designed to display a menu with detailed information for each item, showcasing various data fetching strategies provided by Next.js.

## Features

- **Static Site Generation (SSG)**: Pre-renders pages at build time, ideal for displaying menu items with minimal updates.
- **Server-Side Rendering (SSR)**: Fetches data on each request, perfect for pages requiring real-time data, such as user-specific content.
- **Incremental Static Regeneration (ISR)**: Automatically revalidates and regenerates static pages after a specified time interval, keeping content fresh without rebuilding the entire site.

## Technology Stack

- **Next.js** - Full-stack React framework
- **React** - Component-based front-end library
- **CSS Modules** - Scoped CSS for styling components
- **Node.js** - JavaScript runtime for development and API handling
- **Vercel** (Optional) - Recommended platform for Next.js deployment

## Getting Started

### Prerequisites

- **Node.js** (v14 or later recommended)
- **npm** (or **yarn**)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   
2. **Clone the repository:**

   ```bash
   npm install
   # or
   yarn install
   
3. **Set up environment variables:**

   ```bash
   NEXT_PUBLIC_BASE_URL=https://api-bfood.vercel.app
   
## Running the Application

1. **Start the development server:**

```bash
   npm run dev
   # or
   yarn dev
```
2. **Open your browser and go to http://localhost:3000.**

## Data Fetching Strategies

- **Static Site Generation (SSG):** - Used in the main menu page, pre-renders menu items at build time for faster load speeds.
- **Server-Side Rendering (SSR):** - Implemented on the categories page to allow filtering on every request, ensuring real-time data based on user-selected criteria.
- **Incremental Static Regeneration (ISR):** - Used for individual menu item pages, revalidating data at intervals to keep information up-to-date without a full rebuild.

## Deployment

**For production, this project is optimized for deployment on Vercel. Follow these steps:**
1. Push your code to GitHub or another repository host.
2. Import the project on Vercel and configure your environment variables in Vercel’s settings.
3. Vercel automatically handles Next.js optimizations for best performance.
