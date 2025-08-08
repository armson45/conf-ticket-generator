import fs from "node:fs/promises";
import path from "node:path";

import { put } from '@vercel/blob';

export async function POST({ request, redirect, cookies }) {
  const formData = await request.formData();

  const avatar = formData.get('avatar');
  const fullName = formData.get('fullname');
  const email = formData.get('email');
  const githubUser = formData.get('githubuser');

  const nameAvatar = `${Date.toString()}-${avatar.name}`;

  const { url } = await put(nameAvatar, avatar, {
    access: "public"
  });

  const imageUrl = url;

  cookies.set('ticket-data', JSON.stringify({
    avatar: imageUrl,
    fullName, email, githubUser
  }), {
    httpOnly: true,
    path: '/ticket'
  });
}