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

const fetchBookmarklet = () =>
  fetch("/bookmarklet/checkKangxiRadicals.js")
    .then((res) => res.text())
    .catch((err) => {
      console.error(err);
    });

const main = async () => {
  const bookmarklet = "javascript:" + (await fetchBookmarklet());

  copyUrl(bookmarklet);
};

main();
