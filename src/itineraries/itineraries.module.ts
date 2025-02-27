import { Module } from '@nestjs/common';
import { ItinerariesService } from './itineraries.service';
import { ItinerariesController } from './itineraries.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Trip } from 'src/trips/trips.model';
import { User } from 'src/users/users.model';
import { Itinerary } from './itineraries.model';

@Module({
  providers: [ItinerariesService],
  controllers: [ItinerariesController],
  imports: [SequelizeModule.forFeature([Trip, User, Itinerary])],
})
export class ItinerariesModule {}
