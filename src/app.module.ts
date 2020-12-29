import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from './post/post.module';
import {PostController} from './post/post.controller';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://sandu:A.532221010@cluster0.a7ref.mongodb.net/Cluster0?retryWrites=true&w=majority'),
    UsersModule,
    AuthModule,
    PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
