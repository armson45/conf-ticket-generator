export function saveAvatarFileBase64(avatarImage: File) {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    if (typeof reader.result === 'string') {
      localStorage.setItem("avatarImage", reader.result);
    }
  });
  reader.readAsDataURL(avatarImage);
}