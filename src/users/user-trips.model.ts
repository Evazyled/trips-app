import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Trip } from 'src/trips/trips.model';
import { User } from './users.model';

@Table({ tableName: 'user-trips', createdAt: false, updatedAt: false })
export class UserTrips extends Model<UserTrips> {
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
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;
}
