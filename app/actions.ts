"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./utils/db";
import { redirect } from "next/navigation";

export async function handleSubmission(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    throw new Error("You must be logged in to submit a blog post.");
  }

  const title = formData.get("title");
  const content = formData.get("content");
  const imageUrl = formData.get("url");

  const data = await prisma.blogPost.create({
    data: {
      title: title as string,
      content: content as string,
      imageUrl: imageUrl as string,
      authorId: user.id,
      authorName: user.given_name as string,
      authorImage: user.picture as string,
    },
  });

  return redirect(`/dashboard`);
}
