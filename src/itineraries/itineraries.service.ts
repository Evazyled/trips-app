import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Itinerary } from './itineraries.model';
import { createItineraryDto } from './create-itinerary.dto';
import { Trip } from 'src/trips/trips.model';

@Injectable()
export class ItinerariesService {
  constructor(
    @InjectModel(Itinerary) private itinerariesRepository: typeof Itinerary,
    @InjectModel(Trip) private tripRepository: typeof Trip,
  ) {}

  async create(dto: createItineraryDto) {
    const itinerary = await this.itinerariesRepository.create(dto);
    const trip = await this.tripRepository.findByPk(dto.tripId);
    await trip?.$add('itineraries', [itinerary.id]);

    return itinerary;
  }
}
