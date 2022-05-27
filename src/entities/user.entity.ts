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
  password: string;

  @Column()
  isAdm: boolean;
}
