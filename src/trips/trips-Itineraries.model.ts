import { Itinerary } from './../itineraries/itineraries.model';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Trip } from 'src/trips/trips.model';

@Table({ tableName: 'trips-itineraries', createdAt: false, updatedAt: false })
export class ItinerariesTrips extends Model<ItinerariesTrips> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  })
  id: number;
  @ForeignKey(() => Trip)
  @Column({ type: DataType.INTEGER })
  tripId: number;
  @ForeignKey(() => Itinerary)
  @Column({ type: DataType.INTEGER })
  itineraryId: number;
}
