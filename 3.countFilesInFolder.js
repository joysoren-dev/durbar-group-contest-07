function countFilesInFolder(structure) {
  let fileCount = 0;

  // Current structure array er protita item iterate korbo
  for (const item of structure) {
    if (item.type === "file") {
      // Direct file paile count 1 barabo
      fileCount += 1;
    } else if (item.type === "folder" && item.children) {
      // Folder paile tar children array er upor recursive call kore bhetorer file count jog korbo
      fileCount += countFilesInFolder(item.children);
    }
  }

  // Puro nested structure er total file count return korbo
  return fileCount;
}
