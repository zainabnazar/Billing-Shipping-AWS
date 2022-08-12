import { SQSEvent } from "aws-lambda";
import AWS from 'aws-sdk';

export const handle = async (event: SQSEvent) => {

    const message = event.Records[0].body;

    const payload = JSON.parse(message);

    console.log(`Billing order ${payload.orderNumber}`);

    const sns = new AWS.SNS({
        region: 'eu-west-1'
    });

    const billedOrderEvent = {
        orderNumber: payload.orderNumber,
        address: payload.address
    }

    const snsEvent = {
        Message: JSON.stringify(billedOrderEvent),
        TopicArn: `arn:aws:sns:eu-west-1:${process.env.ACCOUNT_ID}:billed-order-event`
    }

    await sns.publish(snsEvent).promise();
}
