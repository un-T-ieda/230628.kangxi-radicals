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
  // NOTE: bookmarklet/dist/checkKangxiRadicals.js からペースト
  const bookmarklet = `javascript:!function(){"use strict";(()=>{const n=/[\u2F00-\u2FD5]/g,e=document.body,t=e.innerText.split("\\n").filter((n=>""!==n)).filter((e=>e.match(n))),o=t.length>0?((e,t,o)=>{const i=document.createDocumentFragment(),r=document.createElement("ul");return r.style.cssText=t,e.forEach((e=>{const t=document.createElement("li");t.innerHTML=e.replace(n,'<span style="background-color: orange;">$&</span>'),t.style.cssText=o,r.appendChild(t)})),i.appendChild(r)})(t,"\nposition: fixed;\nz-index: 2147483647;\noverflow: auto;\ninset: 0;\nbackground-color: rgba(250, 250, 250, 0.9);\nheight: calc(100vh - 2em);\nright: 0;\nleft: auto;\ncolor: #333;\nlist-style: none;\npadding: 1.5em;\nmargin: 1em;\nborder-radius: 10px;\nmax-width: 500px;\nmin-width: 300px;\nborder: 2px solid #333;\nbox-sizing: border-box;\n","\npadding: 1em;\nfont-weight: bold;\n"):(n=>{const e=document.createElement("p");return e.innerText="No Kangxi Radicals in this page. ✅",e.style.cssText=n,e})("\nposition: fixed;\nz-index: 2147483647;\nheight: fit-content;\ninset: 0;\nbackground-color: #fff;\nright: 0;\nleft: auto;\ncolor: #333;\nlist-style: none;\npadding: 0.8em 1.5em;\nmargin: 1em;\nborder-radius: 10px;\nmax-width: 500px;\nborder: 2px solid #333;\nbox-sizing: border-box;\n");e.style.position="relative",e.appendChild(o)})()}();`;

  copyUrl(bookmarklet);
};

main();
