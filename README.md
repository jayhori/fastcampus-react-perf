# Web performance with React

This project is designed to help you learn how to optimize React applications for web performance through practical challenges. Each challenge page is intentionally slow and/or inefficient, and your task is to identify and fix performance issues. In the end, there will be a final project where you'll apply all the optimization techniques you've learned.

> [!NOTE]
> This repository is part of my Fast campus course. I speak in Japanese in the video lectures, where I explain and code the solutions. You can find more details on the [course page](https://fastcampus.jp/products/dev_online_webpp).

## Project structure

- **Home Page**: The home page introduces the course and lists the challenges and final project.
- **Challenges**: Each challenge focuses on a specific aspect of web performance optimization.
- **Final Project**: Build a fully optimized web page.


## Dependencies

- **React**: ^19.0.0
- **React DOM**: ^19.0.0
- **React Router DOM**: ^7.2.0

## Development dependencies

- **TypeScript**: ~5.7.2
- **Vite**: ^6.2.0
- **ESLint**: ^9.21.0 and related plugins
- **Prettier**: ^3.5.2

## Solutions

Solutions for each challenge are available in the solution git branches. For example, the solution for Challenge 1 is available in the `solution/challenge-1` branch.

## Getting started

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/jayhori/fastcampus-react-perf.git
cd fastcampus-react-perf
npm install
```

Then, you can start the development server:

```bash
npm run dev
```

> [!TIP]
> To simulate performance issues in the production environment you can also build the production version and preview it:
>
> ```bash
> npm run build
> npm run preview
> ```
>

## Code formatting

In the project directory, you can run:

- `npx prettier --check <path/file-name>`: Checks the code formatting using Prettier.
- `npx prettier --write <path/file-name>`: Formats the code using Prettier.

> [!TIP]
> You can also use the VSCode extension or your IDE's formatter to format the code.
