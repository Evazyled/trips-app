import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { log } from 'node:console';
import { TripsService } from 'src/trips/trips.service';
import { Trip } from 'src/trips/trips.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private tripService: TripsService,
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    return user;
  }

  async findOne(id: number) {
    const user = await this.userRepository.findByPk(id);
    log(typeof id);
    return user;
  }

  async addTrip(tripName: string, userId: number) {
    const user = await this.userRepository.findByPk(userId, {
      include: [{ model: Trip }],
    });
    console.log(user);
    const trip: any = await this.tripService.getTripByValue(tripName);
    console.log(trip);
    await user?.$add('trips', [trip.id]);
    return user;
  }
  async getTrips(id: number) {
    const user = await this.userRepository.findByPk(id, {
      include: [{ model: Trip }],
    });

    return user?.trips.map((trip) => trip.name);
  }
}
