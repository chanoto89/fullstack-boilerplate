# API

This project includes an example of a functional CRUD API service generated with NestJS.

## Table of Contents

- [Project Structure](#project-structure)
- [Generating New Files](#generating-new-files)
- [Generating entire modules](#generating-entire-modules)
- [Swagger Documentation](#swagger-documentation)
- [Resources](#resources)
- [To Do](#to-do)

## Project Structure

The setup of common NestJS projects, including this one, follow the [3 Layer Architecture](https://dev.to/santypk4/bulletproof-node-js-project-architecture-4epf) design pattern.

## Generating New Files

You can generate new files with the following commands:
```bash
    nest g module users
    nest g controller users
    nest g service users
```

## Generating Entire Modules

You can generate an entire module with the following command:
```bash
    nest g resource todos
```

## Swagger Documentation

You can navigate to auto generated Swagger documentation at http://localhost:3000/swagger

The packages uses for swagger documentation were @nestjs/swagger and swagger-ui-express

## Resources

You can find some of the useful resources for some of the tools here:
- [Validation](https://docs.nestjs.com/techniques/validation#auto-validation)
- [Pipes](https://docs.nestjs.com/faq/request-lifecycle#pipes)
- [Swagger](https://docs.nestjs.com/openapi/introduction)

# To Do

As the boilerplate repo continues to be developed, the following features are planned to be added and expanded on in the documentation:
- TypeORM
- Unit Testing
- Authentication & Authorization
  - Guards
- Interceptors
- Middleware