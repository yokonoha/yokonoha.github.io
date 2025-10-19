/////// Y.Yokoha Contents Delivery SRC
document.getElementById("mv2").style.display="none";
document.getElementById("mv21").style.display="none";
let DEBUG1;
let vals="";
function yokonohagowokaidokushiyoune(yokonohalanguage)
{
  const a=["https://","http://","ftp://","content://","file://"];
  const b="abcdefghijklmnopqrstuvwxyz";
  const c="1234567890";
  const d=`!"#$%&'()=~-^@|*+<>,./?_`;
  const e="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let loader=yokonohalanguage;
   let answerback=a[0]+b[24]+b[14]+b[10]+b[14]+b[13]+b[14]+b[7]+b[0]+d[20]+b[6]+b[8]+b[19]+b[7]+b[20]+b[1]+d[20]+b[8]+b[14]+" "+b[8]+b[18]+" "+b[19]+b[7]+b[4]+" "+b[17]+b[4]+b[3]+b[8]+b[17]+b[4]+b[2]+b[19]+" "+b[15]+b[0]+b[6]+b[4]+" "+b[24]+b[14]+b[20]+" "+b[0]+b[17]+b[4]+" "+b[11]+b[14]+b[10]+b[10]+b[8]+b[13]+b[6]+" "+b[5]+b[14]+b[17]+d[20];
  if (loader=="YSD")
  {
    //YSDLocker
const watashiha=a[0]+b[3]+b[17]+b[8]+b[21]+b[4]+d[20]+b[6]+b[14]+b[14]+b[6]+b[11]+b[4]+d[20]+b[2]+b[14]+b[12]+d[21]+b[3]+b[17]+b[8]+b[21]+b[4]+d[21]+b[5]+b[14]+b[11]+b[3]+b[4]+b[17]+b[18]+d[21]+c[0]+e[16]+e[13]+e[3]+b[16]+e[9]+b[25]+b[20]+b[7]+b[13]+b[20]+e[25]+e[19]+e[18]+b[18]+e[12]+d[23]+e[16]+b[2]+e[11]+e[12]+b[17]+b[25]+b[17]+b[22]+b[14]+b[24]+c[8]+b[11]+c[5]+c[4]+b[23]+b[9]+d[22]+b[20]+b[18]+b[15]+d[9]+b[18]+b[7]+b[0]+b[17]+b[8]+b[13]+b[6];
  translation(loader);
  answerback=watashiha;
  }
  else{
    answerback="nashi";
  }
 
  console.log("[delivery] Translation is done!");
  let test="value Translated!";
  return answerback
}
  //const url2go=a[0]+b[24]+b[14]+b[10]+b[14]+b[13]+b[14]+b[7]+b[0]+d[20]+b[6]+b[8]+b[19]+b[7]+b[20]+b[1]+d[20]+b[8]+b[14]+d[21]+b[24]+b[14]+b[10]+b[14]+b[7]+b[0]+d[11]+b[18]+b[19];
  //window.location.href=url2go;
  document.getElementById("delibox").addEventListener("keydown",((e)=>
    {
        if (e.key==="Enter"){
            mv2thepage();
        }
    }));
function mv2thepage()
{
    let usript=document.getElementById("delibox").value;
    if (usript=="sdyukari")
    {
        console.log(yokonohagowokaidokushiyoune("YSD"));
        Tsuretetteageru(yokonohagowokaidokushiyoune("YSD"));
    }
    else
    {
        alert("ご指定のパスワードで登録されているファイルは見つかりませんでした。お手数ですが入力内容をお確かめください。")
    }
}
function translation(loader){console.log("CONTENTS DELIVERY LOOKING 4 YOUR SITE...."+loader); let answerback=vals; DEBUG1=loader;}
function Tsuretetteageru(values)
{
    document.getElementById("mv2").style.display="block";
    document.getElementById("mv21").style.display="block";
document.getElementById("mv2").href=values;
}