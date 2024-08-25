import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTodosTable1724549626091 implements MigrationInterface {
  name = 'AddTodosTable1724549626091'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "todos" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" character varying(300), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" character varying(300), "title" character varying(50) NOT NULL, "description" character varying(200) NOT NULL, "userId" integer, CONSTRAINT "PK_ca8cafd59ca6faaf67995344225" PRIMARY KEY ("id"))`);
    await queryRunner.query(`ALTER TABLE "todos" ADD CONSTRAINT "FK_4583be7753873b4ead956f040e3" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "todos" DROP CONSTRAINT "FK_4583be7753873b4ead956f040e3"`);
    await queryRunner.query(`DROP TABLE "todos"`);
  }
}
