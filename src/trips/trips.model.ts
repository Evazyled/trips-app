import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Attraction } from 'src/attractions/attractions.model';
import { UserTrips } from 'src/users/user-trips.model';
import { User } from 'src/users/users.model';

interface TripCreationAttrs {
  name: string;
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
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;
  @BelongsToMany(() => User, () => UserTrips)
  users: User[];

  @HasMany(() => Attraction)
  attractios: Attraction[];
}
