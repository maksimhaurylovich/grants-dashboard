import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Grant } from "../entity/Grant";

@Resolver()
export class GrantResolver {
    @Query(() => [Grant])
    async getGrants() {
        return Grant.find();
    }

    @Mutation(() => Grant)
    async createGrant(
        @Arg("name") name: string,
        @Arg("description") description: string,
        @Arg("status") status: string
    ) {
        const grant = Grant.create({ name, description, status });
        await grant.save();
        return grant;
    }
}
