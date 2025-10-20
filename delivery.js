//Y.Yokoha Contents Delivery SRC
//このスクリプトはボット対策のため、平易な難読化を施してあります。
//このスクリプトの解読・改変は固くお断りします。
//必ず正規のサイトや人物から伝えられた内容を入力するようにしてください。
//このスクリプトを解読した結果得られたファイル/URLに関しては横茶横葉を含む管理者はサポート・容認を一切致しません。
  const A1=b[18]+b[3]+b[24]+b[20]+b[10]+b[0]+b[17]+b[8];
const linkDatabase = {
  [A1]: a[0]+b[3]+b[17]+b[8]+b[21]+b[4]+d[20]+b[6]+b[14]+b[14]+b[6]+b[11]+b[4]+d[20]+b[2]+b[14]+b[12]+d[21]+b[3]+b[17]+b[8]+b[21]+b[4]+d[21]+b[5]+b[14]+b[11]+b[3]+b[4]+b[17]+b[18]+d[21]+c[0]+e[16]+e[13]+e[3]+b[16]+e[9]+b[25]+b[20]+b[7]+b[13]+b[20]+e[25]+e[19]+e[18]+b[18]+e[12]+d[23]+e[16]+b[2]+e[11]+e[12]+b[17]+b[25]+b[17]+b[22]+b[14]+b[24]+c[8]+b[11]+c[5]+c[4]+b[23]+b[9]+d[22]+b[20]+b[18]+b[15]+d[9]+b[18]+b[7]+b[0]+b[17]+b[8]+b[13]+b[6],
  "x": "https://x.com/yokocha_yokoha"

};


document.getElementById("delibox").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    moveToPage();
  }
});


function moveToPage() {
  let userInput = document.getElementById("delibox").value;
  let destinationUrl = linkDatabase[userInput]; 

  if (destinationUrl) {
    console.log(`[Delivery] Found URL for "${userInput}". Redirecting...!`);
    showLinkButton(destinationUrl);
  } else {
    console.warn(`[delivery] Password "${userInput}" not found.`);
    alert("ご指定のパスワードで登録されているファイル/URLは見つかりませんでした。お手数ですが入力内容をお確かめください。");
  }
}

function showLinkButton(url) {
  const redirectbtn = document.getElementById("mv2");
  const hinafoundbtn = document.getElementById("mv21");

  redirectbtn.href = url;
  redirectbtn.style.display = "block";

  if (hinafoundbtn) {
    hinafoundbtn.style.display = "block";
  }
}
