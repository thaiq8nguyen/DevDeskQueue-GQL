const { ApolloServer } = require("apollo-server");
const questions = [
  {
    id: 1,
    title: "I need help setting up a GraphQL Server",
    description: "GraphQL is awesome",
    student: "J.K. Rowling"
  },
  {
    id: 2,
    title: "Do we have class on next Monday",
    description: "Lambda is awesome",
    student: "Michael Crichton"
  }
];
const rootSchema = `
    type Question {
        title: String!
        description: String
        student: String!
    }

    input CreateQuestionInput {
        title: String!,
        description: String,
        student: String!

    }
    type Query {
        questions(student: String!): Question!
    }

    type Mutation {
        createQuestion(input: CreateQuestionInput! ): Question!
    }
`;

const resolvers = {
  Query: {
    questions: (_, args) => {
      return {
        student: args.student,
        title: "placeholder",
        description: "placeholder"
      };
    }
  },
  Mutation: {}
};

const server = new ApolloServer({ typeDefs: [rootSchema], resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

module.exports = server;
