import fs from "node:fs/promises";
import path from "node:path";

export async function POST({ request, redirect }) {
  const formData = await request.formData();

  const avatar = formData.get('avatar');
  const fullName = formData.get('fullname');
  const email = formData.get('email');
  const githubUser = formData.get('githubuser');

  const nameAvatar = `${Date.now()}-${avatar.name}`;

  const pathToImage = path.join("public", "uploads", nameAvatar);
  const buffer = Buffer.from(await avatar.arrayBuffer());
  await fs.writeFile(pathToImage, buffer);
  const imageUrl = `/uploads/${nameAvatar}`

  const params = new URLSearchParams();
  params.append('avatar', imageUrl);
  params.append('fullname', fullName);
  params.append('email', email);
  params.append('githubuser', githubUser);


  return redirect(`/ticket?${params.toString()}`);
}