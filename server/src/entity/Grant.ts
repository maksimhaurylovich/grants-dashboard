import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity()
export class Grant extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    foundationName: string;

    @Field()
    @Column()
    grantName: string;

    @Field()
    @Column()
    status: string;

    @Field()
    @Column("float")
    averageAmount: number;

    @Field()
    @Column()
    deadline: string;

    @Field()
    @Column()
    matchDate: string;

    @Field()
    @Column()
    location: string;
}