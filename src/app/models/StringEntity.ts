import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
  
  } from 'typeorm';
    
  @Entity('stringEncript')
  class StringEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;
  
    @Column('character varying', { length: 150 })
    name: string;
  
  }
  
  export default StringEntity;
  