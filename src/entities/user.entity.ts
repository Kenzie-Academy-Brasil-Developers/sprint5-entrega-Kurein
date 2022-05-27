import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryColumn("uuid")
  uuid: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  age: number;

  @Column()
  password: string;

  @Column()
  isAdm: boolean;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
