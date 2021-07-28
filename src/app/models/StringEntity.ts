import {
    Entity,
    Column,
 
  } from 'typeorm';
    
  @Entity('string')
  class StringEntity {
    @Column('character varying', { length: 150 })
    id: string;
  
    @Column('character varying', { length: 150 })
    stringKeep: string;
  
  }
  
  export default StringEntity;
  