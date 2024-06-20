import { createConnection, getConnection } from "typeorm";
import { graphql, buildSchema } from "graphql";
import { GrantResolver } from "../resolvers/GrantResolver";
import { Grant } from "../entity/Grant";

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

    const response = await graphql(schema, mutation);
    expect(response.data?.createGrant.name).toBe("Test Grant");

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

    const queryResponse = await graphql(schema, query);
    expect(queryResponse.data?.grants.length).toBeGreaterThan(0);
});