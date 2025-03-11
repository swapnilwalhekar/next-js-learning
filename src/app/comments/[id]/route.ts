import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const selectedComment = comments.find(
    (comment) => comment.id === parseInt(id)
  );

  if (!selectedComment) redirect("/comments");
  // if (!selectedComment) {
  //   return new Response(JSON.stringify({ error: "Comment not found" }), {
  //     status: 404,
  //     headers: { "Content-Type": "application/json" },
  //   });
  // }

  return Response.json(selectedComment);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const body = await request.json();
  const { text } = body;

  const index = comments.findIndex((comment) => comment.id === parseInt(id));

  if (index == -1)
    return new Response(
      JSON.stringify({
        message: `Comment not found for ${id} id`,
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );

  comments[index].text = text;
  return Response.json(comments[index]);
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  if (index == -1)
    return new Response(
      JSON.stringify({
        message: `Comment not found ${id} id for delete`,
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );

  const filteredComment = comments[index];
  comments.splice(index, 1);
  return Response.json(filteredComment);
}
