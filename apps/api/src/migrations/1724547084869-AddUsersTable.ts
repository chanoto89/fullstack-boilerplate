import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUsersTable1724547084869 implements MigrationInterface {
  name = 'AddUsersTable1724547084869'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" character varying(300), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" character varying(300), "name" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
