import { CreateUserDto } from './dto/create-user.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  // @Post(':id/trips/:name')
  // addTripToUser(@Body('id') id: number, @Body('name') name: string) {
  //   return this.usersService.addTrip(name, id);
  // }
  @Get('/:id/trips')
  getTripsByUser(@Param('id') userId: number) {
    return this.usersService.getTrips(userId);
  }
}
