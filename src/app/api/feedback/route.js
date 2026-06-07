import { revalidatePath } from "next/cache";
import { dbCollection } from "../lib/dbConnect";

const feedbackCollection = dbCollection("userFeedback");

export async function GET(req) {
  const result = await feedbackCollection.find().toArray();
  return Response.json(result);
}

export async function POST(req) {
  const { message } = await req.json();
  if (!message || typeof message !== "string") {
    return Response.json({
      status: 400,
      message: "Please share a valid message",
    });
  }

  const newFeedback = { message, date: new Date().toISOString() };
  revalidatePath("/feedback");
  const result = await feedbackCollection.insertOne(newFeedback);
  return Response.json(result);
}
