let lastSrcs: string | any[];
const scriptReg = /<scripts.*?src(["'])(?<src>.*?)\1.*?>/gm;

async function extreactNewScripts() {
  const html = await fetch("?/_timestamp" + Date.now()).then((resp) =>
    resp.text()
  );
  scriptReg.lastIndex = 0;
  const res = [];
  let match;
  while ((match = scriptReg.exec(html))) {
    res.push(match.groups?.src);
  }
  return res;
}

export async function needUpdate() {
  const newScripts = await extreactNewScripts();
  if (!lastSrcs) {
    lastSrcs = newScripts;
    return false;
  }
  let res = false;
  if (lastSrcs.length !== newScripts.length) {
    res = true;
  }
  for (let i = 0; i < lastSrcs.length; i++) {
    if (lastSrcs[i] !== newScripts[i]) {
      res = true;
      break;
    }
  }
  return res;
}

export async function upgrageRefresh() {
  const willUpdate = await needUpdate();
  if (willUpdate) {
    console.log("需要更新");
    window.location.reload();
  }
  return;
}
