import { throwErrorMessage } from "../utils/ThrowErrorMessage";

const regex =
  "^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$";

export function validateInputFields({fullname, email, githubuser}: any): boolean {
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

export function isValidAvatarFile(file: File): boolean {

  if(!file) return false;

  if (!isValidFormat(file)) {
    throwErrorMessage(
      `You should upload a PNG/JPG image file, yours is: ${file.type}`,
      "dropbox-zone",
    );
    return false;
  }

  if (!isValidSize(file)) {
    throwErrorMessage(
      `File too large. Please upload a photo under 500KB.`,
      "dropbox-zone",
    );
    return false;
  }
  
  return true;
}

export function isValidFormat(avatarImage: File):boolean {
  return (
    avatarImage.type === "image/png" || avatarImage.type === "image/jpeg"
  );
};

export function isValidSize(avatarImage: File):boolean {
  return Math.floor(avatarImage.size / 1024) <= 500;
}