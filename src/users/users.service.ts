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
    const user = await this.userRepository.findByPk(id, {
      include: { all: true },
    });

    return user;
  }

  async getTrips(id: number) {
    const user = await this.userRepository.findByPk(id, {
      include: [{ model: Trip }],
    });
    console.log(user);
    return user?.trips.map((trip) => trip.name);
  }
}
