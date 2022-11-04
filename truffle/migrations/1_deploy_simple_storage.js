const SimpleStorage = artifacts.require("SimpleStorage");
const CoffeePortal = artifacts.require("CoffeePortal");

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(CoffeePortal);
};
