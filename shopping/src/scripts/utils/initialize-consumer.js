const rabbitmq = require("../../message-broker/rabbitmq-connection");
const cartController = require("../../controllers/cart.controller");
const orderController = require("../../controllers/order.controller");

const initializeBackgroundProcesses = () => {
  console.log("Consumer running");

  rabbitmq.initializeConsumer("SHOPPING_SERVICE", async (message) => {
    try {
      switch (message.type) {
        case "":
          break;
        default:
          break;
      }
    } catch (error) {
      console.error("Error while processing message:", error);
    }
  });
};

module.exports = initializeBackgroundProcesses;
