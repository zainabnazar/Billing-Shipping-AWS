import { SQSEvent } from "aws-lambda";

export const handle = (event: SQSEvent) => {

    const message = event.Records[0].body;

    const payload = JSON.parse(message);

    console.log(`Billing order ${payload.orderNumber}`);
}
