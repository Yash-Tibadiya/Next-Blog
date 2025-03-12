# Simple Blog Website

This is a simple blog website built with Next.js, Prisma, Tailwind CSS, and Kinde Authentication. It allows users to create, view, and manage blog posts with a clean user interface and smooth navigation.

## Project Setup

### Prerequisites

Before running the project, make sure you have the following installed:
- Node.js 
- Bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Yash-Tibadiya/Next-Blog
   cd next_blog
   ```

2. Install the dependencies:
   ```bash
   bun install
   ```

3. Set up the `.env` file for your environment configuration (e.g., database URL, authentication credentials, etc.).

4. Run the Prisma migration command to set up the database:
   ```bash
   bun x prisma migrate dev
   ```

5. Start the development server:
   ```bash
   bun run dev
   ```

## Running the Application

After setting up the project, you can start the application using the following command:
```bash
bun run dev
```

Your application will be available at http://localhost:3000.

## Project Structure

The project structure is as follows:

```
next_blog/
  |- public/
    |-- github.svg
    |-- icon.svg
  |- src/
    |-- app/
        |--- (auth)/
        |--- (dashboard)/
        |--- (standalone)/
        |--- api/[[...route]]/
        |--- apple-icon.png
        |--- error.tsx
        |--- favicon.ico
        |--- globals.css
        |--- icon1.png
        |--- icon2.png
        |--- layout.tsx
        |--- not-found.tsx
    |-- components/
        |--- general/
            |---- AuthProvider.tsx
            |---- BlogpostCard.tsx
            |---- Navbar.tsx
            |---- Submitbutton.tsx
        |--- ui/
            |---- button.tsx
            |---- card.tsx
            |---- input.tsx
            |---- label.tsx
            |---- skeleton.tsx
            |---- textarea.tsx
    |-- lib/
        |--- utils.ts
    |-- prisma/
        |--- schema.prisma
  |- .env
  |- .gitignore
  |- bun.lock
  |- components.json
  |- eslint.config.mjs
  |- middleware.ts
  |- next-env.d.ts
  |- next.config.ts
  |- package.json
  |- postcss.config.mjs
  |- README.md
  |- tsconfig.json
```

## Technologies Used

- **Next.js**: A React framework for building static and dynamic websites with a focus on server-side rendering.
- **Prisma**: An ORM to interact with the database in a type-safe manner.
- **Tailwind CSS**: A utility-first CSS framework to design custom user interfaces quickly.
- **Shadcn/ui**: A collection of re-usable components built with Radix UI and Tailwind CSS.
- **Kinde Authentication**: A simple authentication solution for managing user login and registration.
- **TypeScript**: For static type checking and improved code quality.

## Development Commands

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run start`: Start the production server.
- `npm run lint`: Lint the project codebase using ESLint.

## Features

- **Authentication**: Users can log in and manage their accounts using Kinde Authentication.
- **Blog Management**: Users can create, view, and delete blog posts.
- **Responsive UI**: The application is fully responsive using Tailwind CSS and shadcn/ui components.
- **Dashboard**: Admin dashboard for managing blog posts.
- **Prisma ORM**: A fully set up Prisma ORM with a SQLite database for persistence.
- **Modern UI Components**: Leveraging shadcn/ui for accessible and customizable components.

## License

This project is licensed under the MIT [License](https://github.com/Yash-Tibadiya/Next-Blog/blob/main/LICENSE)
