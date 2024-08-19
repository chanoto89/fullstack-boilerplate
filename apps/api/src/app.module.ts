import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // Serve static files from the frontend build directory
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../client/dist'),
      exclude: ['/api/*'],  // Exclude API routes
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
