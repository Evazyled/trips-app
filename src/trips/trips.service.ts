import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Trip } from './trips.model';
import { CreateTripDto } from './dto/create-trip.dto';
import { Op } from 'sequelize';
import { UserTrips } from 'src/users/user-trips.model';

@Injectable()
export class TripsService {
  constructor(@InjectModel(Trip) private tripRepository: typeof Trip) {}
  async createTrip(dto: CreateTripDto) {
    const trip = await this.tripRepository.create(dto);
    return trip;
  }

  async getTripByValue(name: string) {
    const trip = await this.tripRepository.findOne({
      where: { name: { [Op.iLike]: name } },
    });
    return trip;
  }
}
