import { SNSEvent } from "aws-lambda";

export const handle = (event: SNSEvent) => {

    const message = event.Records[0].Sns.Message;

    const payload = JSON.parse(message);

    console.log(`Sending email for order ${payload.orderNumber}`);
}
