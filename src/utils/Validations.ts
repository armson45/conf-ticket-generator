import { throwErrorMessage } from "../utils/ThrowErrorMessage";

const regex =
  "^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$";

export function validateInputFields({avatar, fullname, email, githubuser}: any): boolean {
  
  if (!avatar || avatar.name.trim() === "") {
    throwErrorMessage("Please upload a fking image", "dropbox-zone");
  }
  if (!fullname || fullname.trim() === "") {
    throwErrorMessage("Please enter your name!", "fullname");
  }
  if (!isValidEmail(email)) {
    throwErrorMessage("Please enter a valid email address", "email");
  }

  if (!githubuser || githubuser.trim() === "") {
    throwErrorMessage("Please enter your GitHub username", "githubuser");
    return false;
  }

  return true;
}

function isValidEmail(email: string):boolean {
  let pattern = new RegExp(regex);

  if (!email || email.trim() === "") {
    return false;
  }
  if (!pattern.test(email)) {
    return false;
  }
  if (email.includes(" ")) {
    return false;
  }
  if (email.length < 5 || email.length > 254) {
    return false;
  }

  return true;
}