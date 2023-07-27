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
  const bookmarklet = `javascript:!function(){"use strict";(()=>{const n=/[\u2F00-\u2FD5]/g,e=/[\u2E80-\u2EFF]/g,t=document.body,o=t.innerText.split("\\n").filter((n=>""!==n)).filter((t=>t.match(n)||t.match(e))),i=o.length>0?((t,o,i)=>{const r=document.createDocumentFragment(),a=document.createElement("ul");return a.style.cssText=o,t.forEach((t=>{const o=document.createElement("li");o.innerHTML=t.replace(n,'<span style="background-color: orange;">$&</span>').replace(e,'<span style="background-color: yellow;">$&</span>'),o.style.cssText=i,a.appendChild(o)})),r.appendChild(a)})(o,"\nposition: fixed;\nz-index: 2147483647;\noverflow: auto;\ninset: 0;\nbackground-color: rgba(250, 250, 250, 0.9);\nheight: calc(100vh - 2em);\nright: 0;\nleft: auto;\ncolor: #333;\nlist-style: none;\npadding: 1.5em;\nmargin: 1em;\nborder-radius: 10px;\nmax-width: 500px;\nmin-width: 300px;\nborder: 2px solid #333;\nbox-sizing: border-box;\n","\npadding: 1em;\nfont-weight: bold;\n"):(n=>{const e=document.createElement("p");return e.innerText="No Kangxi Radicals in this page. ✅",e.style.cssText=n,e})("\nposition: fixed;\nz-index: 2147483647;\nheight: fit-content;\ninset: 0;\nbackground-color: #fff;\nright: 0;\nleft: auto;\ncolor: #333;\nlist-style: none;\npadding: 0.8em 1.5em;\nmargin: 1em;\nborder-radius: 10px;\nmax-width: 500px;\nborder: 2px solid #333;\nbox-sizing: border-box;\n");t.style.position="relative",t.appendChild(i)})()}();`;

  copyUrl(bookmarklet);
};

main();
