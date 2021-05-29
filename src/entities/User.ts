import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
class User {
  @ObjectIdColumn()
  readonly id: ObjectID;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  site: boolean;

  @Column({
    default: false,
  })
  contacted: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  beforeInsertActions() {
    this.contacted = false;
  }

  constructor() {
    if (!this.created_at) {
      this.created_at = new Date();
    } else {
      this.updated_at = new Date();
    }
  }
}

export { User };
