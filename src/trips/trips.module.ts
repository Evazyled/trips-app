import { Module } from '@nestjs/common';
import { TripsController } from './trips.controller';
import { TripsService } from './trips.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Trip } from './trips.model';
import { User } from 'src/users/users.model';
import { UserTrips } from 'src/users/user-trips.model';

@Module({
  controllers: [TripsController],
  providers: [TripsService],
  imports: [SequelizeModule.forFeature([Trip, User, UserTrips])],
  exports: [SequelizeModule, TripsService],
})
export class TripsModule {}
