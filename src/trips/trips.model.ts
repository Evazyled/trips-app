import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Attraction } from 'src/attractions/attractions.model';
import { Itinerary } from 'src/itineraries/itineraries.model';
import { UserTrips } from 'src/users/user-trips.model';
import { User } from 'src/users/users.model';
import { ItinerariesTrips } from './trips-Itineraries.model';

interface TripCreationAttrs {
  name: string;
  description: string;
  userId: number;
}

@Table({ tableName: 'trips' })
export class Trip extends Model<Trip, TripCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  })
  id: number;
  @Column({ type: DataType.STRING, allowNull: false, unique: false })
  name: string;
  @Column({ type: DataType.STRING, allowNull: false, unique: false })
  description: string;
  // @ForeignKey(() => User)
  // @Column({ type: DataType.INTEGER })
  // userId: number;
  @BelongsToMany(() => User, () => UserTrips)
  users: User[];
  @BelongsToMany(() => Itinerary, () => ItinerariesTrips)
  itineraries: Itinerary[];
  @HasMany(() => Attraction)
  attractios: Attraction[];
}
