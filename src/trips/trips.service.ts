import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Trip } from './trips.model';
import { CreateTripDto } from './dto/create-trip.dto';
import { Model, Op } from 'sequelize';
import { UserTrips } from 'src/users/user-trips.model';
import { User } from 'src/users/users.model';
import { Itinerary } from 'src/itineraries/itineraries.model';

@Injectable()
export class TripsService {
  constructor(
    @InjectModel(Trip) private tripRepository: typeof Trip,
    @InjectModel(User) private userRepository: typeof User,
  ) {}
  async createTrip(dto: CreateTripDto) {
    const trip = await this.tripRepository.create(dto);
    const user = await this.userRepository.findByPk(dto.userId);
    await user?.$add('trips', [trip.id]);

    return trip;
  }

  async getTripByValue(id: number) {
    const trip = await this.tripRepository.findOne({
      where: { id },
      include: { model: Itinerary },
    });
    return trip;
  }
}
