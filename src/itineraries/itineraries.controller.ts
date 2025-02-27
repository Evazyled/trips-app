import { createItineraryDto } from './create-itinerary.dto';
import { ItinerariesService } from './itineraries.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('itineraries')
export class ItinerariesController {
  constructor(private itinerariesService: ItinerariesService) {}
  @Post()
  create(@Body() dto: createItineraryDto) {
    return this.itinerariesService.create(dto);
  }
}
