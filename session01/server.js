const {graphiqlExpress, graphqlExpress} = require('apollo-server-express')
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const { makeExecutableSchema } = require('graphql-tools')

const port = 9000

const typeDefs = `
    type Query {
        greeting: String
    }
`

const resolvers = {
    Query: {
        greeting: () => 'Umberto Bomba'
    }
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

const app = express()
app.use(cors(), bodyParser.json())
app.use('/graphql', graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: 'graphql' }))
app.listen(port, () => console.log(`Server is running on port ${port}`))