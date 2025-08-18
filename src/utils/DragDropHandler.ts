import { isValidAvatarFile } from "./Validations";

export function handleDrag(ev: DragEvent): boolean {
  let file = ev.dataTransfer?.files.item(0);

  if (!file) {
    return false;
  }

  if (!isValidAvatarFile(file)) {
    return false;
  }

  return true;
}