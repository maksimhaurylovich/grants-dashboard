import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Grant } from "./Grant";

@ObjectType()
@Entity()
export class Feedback extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    feedbackText: string;

    @Field()
    @Column()
    isApproved: boolean;

    @Field(() => Grant)
    @ManyToOne(() => Grant, grant => grant.feedbacks)
    grant: Grant;
}