import {
    MigrationInterface,
    QueryRunner,
    Table
} from 'typeorm';

export class string1615240358147 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'stringEncript',
                columns: [
                    
                    {
                        name: 'id',
                        type: 'serial',
                        isPrimary: true,
                        generationStrategy: 'increment',

                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        length: '150',
                        isNullable: false,
                    },
                   
                ], 
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('stringEncript');
    }
}
