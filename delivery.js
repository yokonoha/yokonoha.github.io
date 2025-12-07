//Y.Yokoha Contents Delivery SRC
//このスクリプトはボット対策のため、平易な難読化を施してあります。
//このスクリプトの解読・改変・再利用は固くお断りします。
//必ず正規のサイトや人物から伝えられた内容を入力するようにしてください。
//このスクリプトを解読した結果得られたファイル/URLに関しては横茶横葉を含む管理者はサポート・容認を一切致しません。
//詳しくは横茶横葉のサイト 利用規約 第3条5項(項目その1,その2),第4条(項目4)をご参照ください。
  const A1=b[1]+b[21]+b[23]+b[4]+b[18]+b[24]+b[22]+b[3];
const A2=b[1]+b[6]+b[3]+b[20]+b[4]+b[18]+b[4]+c[1];
const A3=b[6]+b[3]+b[0]+b[24]+b[19]+b[2]+b[8]+b[24]+b[18]+b[3]+c[1];
const A4=b[6]+b[3]+b[0]+b[24]+b[13]+b[24]+b[0]+b[0]+b[2]+b[22]+b[1]+e[6];
const linkDatabase = {
[A1]: a[0]+b[21]+b[22]+b[3]+b[15]+b[2]+d[23]+b[8]+b[12]+b[12]+b[8]+b[25]+b[2]+d[23]+b[11]+b[12]+b[14]+d[8]+b[21]+b[22]+b[3]+b[15]+b[2]+d[8]+b[10]+b[12]+b[25]+b[21]+b[2]+b[22]+b[1]+d[8]+c[1]+e[11]+e[16]+e[21]+b[16]+e[25]+b[20]+b[4]+b[6]+b[0]+b[4]+e[10]+e[3]+e[17]+b[1]+e[5]+d[4]+e[11]+b[11]+e[18]+e[5]+b[22]+b[20]+b[22]+b[9]+b[12]+b[23]+c[8]+b[25]+c[4]+c[9]+b[7]+b[5]+d[5]+b[4]+b[1]+b[17]+d[9]+b[1]+b[6]+b[24]+b[22]+b[3]+b[0]+b[8],
[A2]:a[0]+b[21]+b[22]+b[3]+b[15]+b[2]+d[23]+b[8]+b[12]+b[12]+b[8]+b[25]+b[2]+d[23]+b[11]+b[12]+b[14]+d[8]+b[21]+b[22]+b[3]+b[15]+b[2]+d[8]+b[10]+b[12]+b[25]+b[21]+b[2]+b[22]+b[1]+d[8]+c[1]+e[9]+b[17]+e[13]+d[4]+c[4]+b[5]+e[23]+b[12]+b[1]+e[17]+e[22]+b[7]+b[14]+e[0]+e[5]+c[6]+b[14]+b[15]+e[24]+c[5]+e[8]+b[1]+b[19]+e[6]+b[8]+b[12]+b[18]+e[0]+e[22]+b[4]+c[0]+e[2],
[A3]:a[0]+b[21]+b[22]+b[3]+b[15]+b[2]+d[23]+b[8]+b[12]+b[12]+b[8]+b[25]+b[2]+d[23]+b[11]+b[12]+b[14]+d[8]+b[21]+b[22]+b[3]+b[15]+b[2]+d[8]+b[10]+b[12]+b[25]+b[21]+b[2]+b[22]+b[1]+d[8]+c[1]+b[10]+e[7]+e[21]+c[0]+b[24]+b[0]+b[4]+b[12]+e[25]+c[7]+b[7]+b[3]+e[19]+e[21]+c[4]+e[7]+b[16]+b[12]+b[25]+d[4]+c[0]+d[17]+e[1]+b[3]+e[11]+b[3]+c[1]+b[13]+e[25]+b[21]+c[0]+b[3]+d[5]+b[4]+b[1]+b[17]+d[9]+b[1]+b[6]+b[24]+b[22]+b[3]+b[0]+b[8],
[A4]:a[0]+b[21]+b[22]+b[3]+b[15]+b[2]+d[23]+b[8]+b[12]+b[12]+b[8]+b[25]+b[2]+d[23]+b[11]+b[12]+b[14]+d[8]+b[21]+b[22]+b[3]+b[15]+b[2]+d[8]+b[10]+b[12]+b[25]+b[21]+b[2]+b[22]+b[1]+d[8]+c[1]+e[3]+e[14]+e[4]+b[23]+e[8]+e[15]+b[16]+c[2]+c[1]+b[6]+e[13]+e[18]+c[4]+e[13]+c[1]+b[15]+e[12]+b[11]+e[19]+e[25]+b[4]+d[4]+e[3]+e[23]+b[12]+e[0]+c[2]+e[11]+c[9]+e[13]+b[18]+b[4]+d[5]+b[4]+b[1]+b[17]+d[9]+b[1]+b[6]+b[24]+b[22]+b[3]+b[0]+b[8],
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
    hinafoundbtn.src="./found.png";
  }
}
