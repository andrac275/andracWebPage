import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddlewareMiddleware } from './auth-middleware/auth-middleware.middleware';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export class UsersModule implements NestModule {
  //This is for the middleware
  configure(consumer: MiddlewareConsumer) {
    //That's for everything: POST, GET, PUT...
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('users')
      //More than one middleware can be used with more apply
      .apply(AuthMiddlewareMiddleware)
      .forRoutes({ path: '/users', method: RequestMethod.POST });
    //Example only for GET
    /*
    consumer.apply(LoggerMiddleware).forRoutes(
      {path:'/users',method: RequestMethod.GET}
    );
    */
    //Example for GET and POST
    /*
    consumer.apply(LoggerMiddleware).forRoutes(
      {path:'/users',method: RequestMethod.GET},
      {path:'/users',method: RequestMethod.POST}

    );
    */
  }
}
