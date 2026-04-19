# DSA Mastery Roadmap

A high-conversion, comprehensive Data Structures and Algorithms (DSA) preparation platform built to help developers track their progress, master fundamental concepts, and organize job applications.

## 🚀 Features

- **DSA Mastery Curriculum**: A curated list of essential, must-do coding problems tailored for technical interviews.
- **Progress Tracking**: Keep tabs on your solved problems with persistent progress tracking and Row Level Security (RLS) ensuring your data is private.
- **Day Before Interview Hub**: A quick revision dashboard focusing on critical algorithms, patterns, and cheatsheets to review exactly 24 hours before your interview.
- **Job Application Tracker**: A Kanban-style board to organize in-progress job applications, technical rounds, and interview feedback all in one place.
- **Secure Authentication**: Seamless sign-in via Google OAuth, powered by Supabase.
- **Optimistic UI**: A snappy user experience ensuring zero-lag state updates when interacting with the dashboard.
- **Modern Clean Design**: Fully responsive, vibrant, and beautifully designed user interface.

## 🛠 Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript
- **Styling**: Tailwind CSS, Shadcn UI, base-ui
- **Backend & Auth**: Supabase (PostgreSQL, Row Level Security, Google OAuth)
- **Deployment**: Vercel

## 📂 Project Structure

- `src/app/`
  - `/` - Landing page and the main roadmap hub.
  - `/day-before-interview` - Dedicated dashboard for final review before technical rounds.
  - `/job-tracker` - Kanban board to organize job applications and rounds.
- `src/components/` - Reusable UI components.
- `src/lib/` - Utility functions and Supabase configuration.
- `src/data/` - Static data like problem definitions and study plans.

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18+)
- npm, yarn, or pnpm
- Supabase Project (Database & Authentication)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/dsa-mastery-roadmap.git
   cd dsa-mastery-roadmap
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or yarn / pnpm install
   ```

3. **Environment Setup:**
   Create a `.env.local` file at the root of the project with your Supabase credentials.
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```
   *Note: Ensure Google OAuth and schema policies (Row Level Security) are configured in the Supabase dashboard.*

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the App:**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 🚢 Deployment

This project is optimized for deployment on Vercel. 
1. Push your code to GitHub.
2. Link the repository to your Vercel account.
3. Add the `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to the Vercel project environment variables.
4. Deploy!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
Feel free to check [issues page](https://github.com/your-username/dsa-mastery-roadmap/issues).

## 📄 License

This project is open-source and available under the terms of the MIT License.
