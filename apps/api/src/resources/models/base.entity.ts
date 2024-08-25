// base.entity.ts
import { ApiProperty } from '@nestjs/swagger';
import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    @ApiProperty()
    createdAt?: Date;

    @Column({ type: 'varchar', length: 300, nullable: true })
    @ApiProperty()
    createdBy?: string;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    @ApiProperty()
    updatedAt?: Date;

    @Column({ type: 'varchar', length: 300, nullable: true })
    @ApiProperty()
    updatedBy?: string;
}