export const feedback = [
  {
    id: 1,
    message: "Test message 1",
  },
  {
    id: 2,
    message: "Test message 2",
  },
];

export async function GET(request) {
  return Response.json({ status: 200, message: "API Working" });
}
