const rabbitmq = require("../../message-broker/rabbitmq-connection");
const customerController = require("../../controllers/customer.controller");

const initializeBackgroundProcesses = () => {
  console.log("Consumer running");

  rabbitmq.initializeConsumer("CUSTOMER_SERVICE", async (message) => {
    try {
      switch (message.type) {
        case "addWishlist":
          customerController.addToWishlist(message);
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
