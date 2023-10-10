const amqp = require("amqplib");

class RabbitMQService {
  constructor() {
    this.connection = null;
    this.channel = null;
  }

  async connect() {
    return new Promise((resolve, reject) => {
      amqp.connect("amqp://localhost", (error, connection) => {
        if (error) {
          return reject(error);
        }
        this.connection = connection;
        resolve(connection);
      });
    });
  }

  async createChannel() {
    this.channel = await this.connection.createChannel();
  }

  async sendMessage(queueName, message) {
    this.channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)));
  }
}

module.exports = RabbitMQService;
