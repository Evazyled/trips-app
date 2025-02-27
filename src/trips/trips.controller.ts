import { UsersService } from 'src/users/users.service';
import { CreateTripDto } from './dto/create-trip.dto';
import { TripsService } from './trips.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('trips')
export class TripsController {
  constructor(private tripsService: TripsService) {}

  @Post()
  create(@Body() dto: CreateTripDto) {
    return this.tripsService.createTrip(dto);
  }

  @Get('/:value')
  getByValue(@Param('value') value: number) {
    return this.tripsService.getTripByValue(value);
  }
}
