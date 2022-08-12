import { APIGatewayProxyEvent,  APIGatewayProxyResult } from "aws-lambda";
import AWS from 'aws-sdk';
import { v4 as uuid } from 'uuid';

export const handle = async (event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {

    const order = {
        orderNumber: uuid(),
        address: '123 Street bla'
    }

    const sns = new AWS.SNS({
        region: 'eu-west-1'
    });

    const payload = JSON.stringify(order);

    const message = {
        Message: payload,
        TopicArn: `arn:aws:sns:eu-west-1:${process.env.ACCOUNT_ID}:order-created-event`
    }

    await sns.publish(message).promise();

    return {
        statusCode: 200,
        body: payload
    }
}
