import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Trip } from 'src/trips/trips.model';

interface AttractionCreationAttrs {
  name: string;
}

@Table({ tableName: 'attractions' })
export class Attraction extends Model<Attraction, AttractionCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Trip)
  @Column
  tripId: number;
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @BelongsTo(() => Trip)
  trip: Trip;
}
