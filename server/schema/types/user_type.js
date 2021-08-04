const graphql = require('graphql');
const {
  GraphQLObjectType, GraphQLString
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    name: { type: GraphQLString }
  }
})

module.exports = UserType;