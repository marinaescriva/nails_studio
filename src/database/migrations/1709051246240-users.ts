import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Users1709051246240 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "50",
                        isNullable: false,
                    },
                    {
                        name: "surname",
                        type: "varchar",
                        length: "50",
                        isNullable: false,
                    },
                    {
                        name: "password",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "100",
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: "role_id",
                        type: "int",
                        default: 3, //el role que le asignaremos a user 3 , por defecto entran como user todos los registros.
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default:"now()",
                    }, 
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default:"now()",
                        onUpdate:"now()",

                    },
                ],
                foreignKeys:[
                    {

                    columnNames: ["role_id"],
                    referencedTableName: "roles",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE",
                    }
                ]
                    
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}

