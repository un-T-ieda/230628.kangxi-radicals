import { generatedBookmarklet } from "./_modules/bookmarklet";
import "./style.scss";

const copyUrl = (text: string) => {
  const copyButton = document.getElementById(
    "copy-clipboard"
  ) as HTMLButtonElement;

  const _copyToClipboard = async () => {
    if (!navigator.clipboard) return;
    await navigator.clipboard.writeText(text);
  };

  const _checkCopied = () => {
    copyButton.innerText = "Copied to your clipboard! ✅";
  };

  copyButton.addEventListener("click", () => {
    _copyToClipboard();
    _checkCopied();
  });
};

const main = () => {
  const bookmarklet = "javascript:" + generatedBookmarklet;

  copyUrl(bookmarklet);
};

main();
