# fullstack-boilerplate

A monorepo setup using NestJS for the backend, Vite for the frontend, and Docker for containerization.

This repository uses workspaces. You can install a package to the workspace with the following command 

```bash
    npm install <package-name> -w <workspace-name>
```
example:
```bash
    npm install <package-name> -w api
    npm install <package-name> -w client
```

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running with Docker](#running-with-docker)
  - [Connecting to Database](#connecting-to-database)
  - [Setup Docker Image for Project](#setup-docker-image-for-project)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

```plaintext
/project-root
├── apps
│   ├── api          # NestJS backend application
│   │   ├── src
│   │   ├── test
│   │   ├── Dockerfile
│   │   ├── README.md
│   │   └── ...
│   └── client       # Vite frontend application
│       ├── src
│       ├── public
│       ├── Dockerfile
│       ├── README.md
│       └── ...
├── .gitignore
├── docker-compose.yml
├── Dockerfile
└── package.json
```

## Getting Started

### Prerequisites

- **Node.js**: Ensure that Node.js is installed on your machine.
- **Docker**: Docker is required for building and running the application in containers.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/chanoto89/fullstack-boilerplate.git
   cd fullstack-boilerplate
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```

### Running with Docker
1. **Build Docker Images**:
   ```bash
   docker-compose build
   ```
2. **Run with Docker**:
   ```bash
   docker-compose up -d
   ```

### Connecting to Database
1. **Connect from command line**
    To connect to the running postgres database from your local machine, you can use the following command
    ```bash
    docker-compose exec postgres psql -U user -W db
    ```
2. **Enter Password**
   When prompted, enter "password" as the password

### Setup Docker Image for Project
1. **Build Docker Image**

   To build the Docker image, run the following command in the root of your project:

   ```bash
   docker build -t your-app-name .
   ```

   This command will create a Docker image named your-app-name using the Dockerfile in the root of your project.

2. **Running the Docker Container**

   To run the application inside a Docker container, use the following command:

   ```bash
   docker run -p 3000:3000 your-app-name
   ```

   This will start the application, exposing it on port 3000.


## Contributing

Contributions are welcome! To contribute to this monorepo, follow these steps:

1. **Fork the repository**: Click the "Fork" button at the top right of the repository page.
2. **Clone your fork**: 
    ```bash
    git clone https://github.com/chanoto89/fullstack-boilerplate.git
    ```
3. **Create a new branch**: 
    ```bash
    git checkout -b feature/your-feature-name
    ```
4. **Make your changes**: Develop your feature or fix the bug.
5. **Commit your changes**: 
    ```bash
    git add .
    git commit -m "Add a meaningful commit message"
    ```
6. **Push to your branch**: 
    ```bash
    git push origin feature/your-feature-name
    ```
7. **Submit a pull request**: Go to the original repository on GitHub and create a pull request from your forked repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

