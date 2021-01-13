import { Mongo } from 'meteor/mongo';

class StandardsProductsCollection extends Mongo.Collection {

}

export const StandardsProducts = new StandardsProductsCollection('standardsProducts');
StandardsProducts.attachBehaviour('timestampable');
