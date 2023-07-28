import fs from "node:fs";

const bookmarklet = fs.readFileSync(
  "bookmarklet/dist/checkKangxiRadicals.js",
  "utf8"
);

// NOTE: 最終行に不要な改行が入るので、replace で置換して改行を削除する
const newScript =
  `export const generatedBookmarklet = \`${bookmarklet}\``.replace(
    /(.*)\n`/,
    "$1`"
  );

fs.writeFileSync("src/_modules/bookmarklet.ts", newScript);
