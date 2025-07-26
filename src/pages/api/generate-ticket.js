export async function POST({ request, redirect }) {
  const formData = await request.formData();
  const fullName = formData.get('fullname');
  const email = formData.get('email');
  const githubUser = formData.get('githubuser');

  const params = new URLSearchParams();
  params.append('fullname', fullName);
  params.append('email', email);
  params.append('githubuser', githubUser);
  return redirect(`/ticket?${params.toString()}`);
}