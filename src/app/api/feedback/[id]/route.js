import { ObjectId } from "mongodb";
import { dbCollection } from "../../lib/dbConnect";

const feedbackCollection = dbCollection("userFeedback");

export async function GET(req, { params }) {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const result = await feedbackCollection.findOne(query);

  return Response.json(result);
}
export async function DELETE(req, { params }) {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const result = await feedbackCollection.deleteOne(query);

  return Response.json(result);
}
export async function PATCH(req, { params }) {
  const { message } = await req.json();
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const updateDoc = {
    $set: { message },
  };
  const result = await feedbackCollection.updateOne(query, updateDoc);

  return Response.json(result);
}
