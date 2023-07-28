import { liStyle, pStyle, ulStyle } from "./_modules/_styles";

const checkKangxiRadicals = () => {
  const kangxiRadicalsRegex = /[\u2F00-\u2FD5]/g;
  const radicalsSupplementRegex = /[\u2E80-\u2EFF]/g;

  const body = document.body;
  const paragraphArray = body.innerText
    .split("\n")
    .filter((line) => line !== "");

  const includeTargetText = paragraphArray.filter((line) => {
    return (
      line.match(kangxiRadicalsRegex) || line.match(radicalsSupplementRegex)
    );
  });

  const hasTargetRadicals = includeTargetText.length > 0;

  const createTemplateFragment = (
    textArray: string[],
    ulStyle: string,
    liStyle: string
  ) => {
    const fragment = document.createDocumentFragment();
    const ul = document.createElement("ul");

    ul.style.cssText = ulStyle;

    textArray.forEach((line) => {
      const li = document.createElement("li");

      li.innerHTML = line
        .replace(
          kangxiRadicalsRegex,
          '<span style="background-color: orange;">$&</span>'
        )
        .replace(
          radicalsSupplementRegex,
          '<span style="background-color: yellow;">$&</span>'
        );

      li.style.cssText = liStyle;

      ul.appendChild(li);
    });

    return fragment.appendChild(ul);
  };

  const withoutErrorElement = (pStyle: string) => {
    const p = document.createElement("p");

    p.innerText = "No Kangxi Radicals in this page. ✅";
    p.style.cssText = pStyle;

    return p;
  };

  const resultBoxElement = hasTargetRadicals
    ? createTemplateFragment(includeTargetText, ulStyle, liStyle)
    : withoutErrorElement(pStyle);

  body.style.position = "relative";
  body.appendChild(resultBoxElement);
};

checkKangxiRadicals();
