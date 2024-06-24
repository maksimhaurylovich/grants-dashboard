import { createConnection, getConnection } from "typeorm";
import { buildSchema } from "type-graphql";
import { graphql } from "graphql";
import { GrantResolver } from "../resolvers/GrantResolver";

beforeAll(async () => {
    await createConnection();
});

afterAll(async () => {
    const conn = getConnection();
    await conn.close();
});

test("Create and query grant", async () => {
    const schema = await buildSchema({
      resolvers: [GrantResolver],
    });

    const mutation = `
    mutation {
      createGrant(name: "Test Grant", description: "Test Description", status: "approved") {
        id
        name
        description
        status
      }
    }
  `;

    const query = `
    query {
      grants {
        id
        name
        description
        status
      }
    }
  `;

    const response = await graphql({ schema, source: mutation });
    expect((response.data as any).createGrant.name).toBe("Test Grant");

    const queryResponse = await graphql({ schema, source: query });
    expect((queryResponse.data as any).grants.length).toBeGreaterThan(0);
});
