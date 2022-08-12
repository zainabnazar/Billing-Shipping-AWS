import { APIGatewayProxyEvent,  APIGatewayProxyResult } from "aws-lambda";
import AWS from 'aws-sdk';
import { v4 as uuid } from 'uuid';

export const handle = async (event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {

    const order = {
        orderNumber: uuid()
    }

    return {
        statusCode: 200,
        body: JSON.stringify(order)
    }
}
