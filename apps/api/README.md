# API

This project includes an example of a functional CRUD API service generated with NestJS.



## Table of Contents

- [Project Structure](#project-structure)
- [Generating New Files](#generating-new-files)
- [Generating Entire Modules](#generating-entire-modules)
- [TypeORM](#typeorm)
- [Database Migrations](#database-migrations)
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

## TypeORM

This project uses TypeORM as the selected ORM. A base type has been added to the project in `apps/api/src/resources/models/base.entity.ts` that other entities can inherit from. You can find documentation for TypeORM in the [Resources](#resources) section.

The configuration for our database connection can be found in `apps/api/src/config/dataSource.ts`. Both the `entities` and `migrations` fields have
been set to follow the structure of this project. If the project structure is modified, these settings may need to be updated.

## Database Migrations

We use TypeORM to assist with Postgres migrations. A simple set of migrations have been added to the setup of this project. Feel free to delete
and create your own migrations with the instructions below.

Some useful scripts have been added to the package.json:
- typeorm
- migration:generate
- migration:run
- migration:revert

*Because we are running a docker setup, migrations must be run in docker. 

To create a new migration based off the latest entity differences:
```bash
   docker-compose exec api npm run migration:generate -- src/migrations/<MigrationName>
```

This will create a new migration file in apps/api/src/migrations

To run the migration, run the following command:
```bash
   docker-compose exec api npm run migration:run
```

You should see the SQL output in the console for the migrations that were completed.

To revert a migration, run the following command:
```bash
   docker-compose exec api npm run migration:revert
```

## Swagger Documentation

You can navigate to auto generated Swagger documentation at http://localhost:3000/swagger

The packages uses for swagger documentation were @nestjs/swagger and swagger-ui-express

## Resources

You can find some of the useful resources for some of the tools here:
- [TypeORM](https://sparklytical.gitbook.io/typeorm)
- [Validation](https://docs.nestjs.com/techniques/validation#auto-validation)
- [Pipes](https://docs.nestjs.com/faq/request-lifecycle#pipes)
- [Swagger](https://docs.nestjs.com/openapi/introduction)

# To Do

As the boilerplate repo continues to be developed, the following features are planned to be added and expanded on in the documentation:
- Unit Testing
- Authentication & Authorization
  - Guards
- Interceptors
- Middleware