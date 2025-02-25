import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { User } from './users/users.model';
import { TripsModule } from './trips/trips.module';
import { Trip } from './trips/trips.model';
import { UserTrips } from './users/user-trips.model';
import { AttractionsController } from './attractions/attractions.controller';
import { AttractionsService } from './attractions/attractions.service';
import { AttractionsModule } from './attractions/attractions.module';
import { Attraction } from './attractions/attractions.model';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  controllers: [AppController, UsersController, AttractionsController],
  providers: [AppService, UsersService, AttractionsService],
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'trips-app',
      models: [User, Trip, UserTrips, Attraction],
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,

    TripsModule,

    AttractionsModule,

    ReviewsModule,
  ],
})
export class AppModule {}
