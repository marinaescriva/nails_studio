import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddIsActiveColumnToUsers1709219681873 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users', new TableColumn(
            {
                name:"is_active",
                type: 'boolean',
                default: true
            }
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users' ,'is_active')
    }

}
