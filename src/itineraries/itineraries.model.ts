import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { ItinerariesTrips } from 'src/trips/trips-Itineraries.model';
import { Trip } from 'src/trips/trips.model';

interface ItineraryCreationAttrs {
  name: string;
  userId: number;
  tripId: number;
  description: string;
}

@Table({ tableName: 'itineraries' })
export class Itinerary extends Model<Itinerary, ItineraryCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  })
  id: number;
  @Column({ type: DataType.STRING, allowNull: false, unique: false })
  description: string;
  @Column({ type: DataType.INTEGER, allowNull: false, unique: true })
  userId: number;
  @Column({ type: DataType.INTEGER, allowNull: false, unique: true })
  tripId: number;
  @BelongsToMany(() => Trip, () => ItinerariesTrips)
  trips: Trip[];
}
