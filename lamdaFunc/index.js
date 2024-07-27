import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { nanoid } from "nanoid";

const dbClient = new DynamoDBClient({ region: process.env.AWS_REGION });
const tableName = process.env.TABLE_NAME;

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const id = nanoid();

    const params = {
      TableName: tableName,
      Item: {
        id: { S: id },
        input_text: { S: body.input_text },
        input_file_path: { S: body.input_file_path }
      }
    };

    await dbClient.send(new PutItemCommand(params));

    return {
      statusCode: 200,
      body: JSON.stringify({ id })
    };
  } catch (error) {
    console.error("Error processing event: ", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" })
    };
  }
};
