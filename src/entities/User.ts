import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
} from "typeorm";

@Entity("users")
class User {
  @ObjectIdColumn()
  readonly id: ObjectID;

  @Column()
  name: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.created_at) {
      this.created_at = new Date();
    }
  }
}

export { User };
