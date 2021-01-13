// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by standards-products-collection.js.
import { name as packageName } from "meteor/standards-products-collection";

// Write your tests here!
// Here is an example.
Tinytest.add('standards-products-collection - example', function (test) {
  test.equal(packageName, "standards-products-collection");
});
