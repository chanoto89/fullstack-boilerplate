import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './resources/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/dataSource';
import { TodosModule } from './resources/todos/todos.module';

@Module({
  imports: [
    // Serve static files from the frontend build directory
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../client/dist'),
      exclude: ['/api/*'],  // Exclude API routes
    }),
    // Database connection
    TypeOrmModule.forRoot(databaseConfig),

    // Modules
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
