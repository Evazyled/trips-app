import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { Trip } from 'src/trips/trips.model';
import { UserTrips } from './user-trips.model';
import { TripsModule } from 'src/trips/trips.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User, Trip, UserTrips]), TripsModule],
  exports: [SequelizeModule],
})
export class UsersModule {}
