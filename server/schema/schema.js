const graphql = require('graphql');

const _=require('lodash');

const { 
    GraphQLObjectType,
    GraphQLString, 
    GraphQLSchema,
    GraphQLID,
} = graphql;
let stores = [
    {name: 'Ingenious Dealers', service: 'Digital Assitant', id: "1", storeId:'1'},
    {name:'Modern Pirates', service: 'Clothing', id: "2", storeId:'2'},
    {name: 'Posh', service:'Beauty & Clothing', id: "3", storeId: '3' },
];

let storeLocations = [
  {location: 'Albany, NY', id: '1'},
  {location: 'Albany, NY', id: '2'},
  {location: 'Baltimore, MD', id: '3'},
];


const StoreType = new GraphQLObjectType({
    name: 'Store',
    fields:() => ({
        id: {type:GraphQLID },
        name: {type: GraphQLString},
        service: {type:GraphQLString},
        store: {
            type:LocationStore,
            resolve(parent,args){
                console.log(parent)
                return _.find(storeLocations,{id:parent.storeId});
            }
        }
    })
});
const LocationStore = new GraphQLObjectType({
    name: 'Location',
    fields:() => ({
        id: {type:GraphQLID },
        name: {type: GraphQLString},
        location: {type:GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields: {
        storeauthor: {
            type:StoreType,
            args: {id:{type: GraphQLID}},
            resolve(parent, args){
                //code to get from db/other source
                console.log(typeof(args.id));
                return _.find(stores,{id:args.id});

            }
        },
        authorlocation: {
            type: LocationStore,
            args: {id: {type:GraphQLID}},
            resolve(parent, args){
                return _.find(storeLocations,{id:args.id})
            }
        }
    }
});

module.exports = new GraphQLSchema ({
    query: RootQuery
});