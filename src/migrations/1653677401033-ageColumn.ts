import { MigrationInterface, QueryRunner } from "typeorm";

export class ageColumn1653677401033 implements MigrationInterface {
    name = 'ageColumn1653677401033'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "age" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "age"`);
    }

}
