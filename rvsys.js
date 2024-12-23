///////////////////////////////////////
///   RPGView Conversation System   ///
///    By Yokoha Studio Project     ///
///            Rev.1.0              ///
///    License:Y.Yokoha A License   ///
///////////////////////////////////////

//Contents of dialogues(Pls replace&add)/会話の中身(置換、追加をお願いします)
//記述方法一覧
//text:"ここに会話内容を入れて登録しておきます。(任意の文章)"
//speaker:"ここにはleft,center,rightが入ります。"
//background:"ここには背景データのパス(ファイルの所在地)を入れます。これにより、シーンを素早く切り替えることができるようになります。"
let dialogues=[
    { text: "システムメッセージ:こちらは横茶横葉のサイトです。RPGViewのテストも兼ねて、リダイレクト用に設置しています。クリックして次へ", speaker: "", background: "background1.png" },
    { text: "???:お客さん..かな? はーい、今行きまーす。", speaker: "", background: "background1.png" },
    { text: "横井:あ、こんにちは～! 突然出てきて驚かせてしまい、すみません! 私は横井と申します。横茶横葉のサイトのリダイレクト役を担当しています!", speaker: "left", background: "background1.png" },
    { text: "横井:折角来ていただいたのにごめんなさい! 現在このサイトは改装作業のため1月までお休みしています...", speaker: "center", background: "background1.png" },
    { text: "横井:ですので、その代わりに代替サイト「横葉スタジオ」へリダイレクト(サイト移動)出来るようにしますね!", speaker: "right", background: "background1.png" },
    { text: "横井:もう一度クリックするとリダイレクト(サイト移動)することが出来ます! それでは、またお会いしましょう～!", speaker: "left", background: "background1.png" }
];
//↑書き換えるのはここだけです!ここさえ変更できれば、後は勝手に実行してくれるようになるはずです。

//動かない場合 --トラブルシューティング用チェックリスト--
//・最後の{}以外は末尾に","(コロン)がついていますか?
//・"　"を忘れていませんか?
//・text: や speaker: 、background: など動作に必要なシステムタグはスペルミスなく正しく記述されていますか?
//・ファイルパスは拡張子まで正しく記載されていますか?
//・画像ファイルは正しく配置されていますか?(オススメはこのファイルと同じディレクトリorサーバー内に配置することです!)
//・以下の凡例に従った記述がされていますでしょうか?
// { text: "話す文章", speaker: "leftかcenterかrightのみ入力可能", background: "ファイルパス(.jpg or .png推奨)"}

//動いた!後について
//うまく動作しましたら、どうぞご自身の創作物へ適用させてみてください!
//これらのコメントアウトは消してしまってOKです(ただし6行目までのテキストは削除しないでください)。
//知識のある方は下のコードを改変してもOKです。
//ご活用いただき、ありがとうございます!  by横茶横葉

// Not to modify below/以下からは変更せず、そのままでお願いします。

let currentDindex=0; //現在進行中の会話番号
let imanannmojime=0;
let timer;

//会話ボックス
const dbox = document.getElementById('dialogue');

const left= document.getElementById('charL');
const center = document.getElementById('charC');
const right = document.getElementById('charR');


const bkimg = document.getElementById('bk');
const wo =document.getElementById('wo');
const ls=document.getElementById('ls');
const pbar=document.getElementById('progress');

function textview() //タイマーでコントロールされる部分
{
    if(currentDindex<dialogues.length)
    {
        const DN=dialogues[currentDindex];
        dbox.textContent=DN.text.slice(0,imanannmojime);
        imanannmojime++;
        if (imanannmojime>DN.text.length)
        {
            clearInterval(timer);
        }
    }
}

function updateD()
{
    if (currentDindex<dialogues.length)
    {
        const DN=dialogues[currentDindex];
        imanannmojime=0;
        if (DN.speaker === "left") {
            left.style.display = "block";
            center.style.display = "none";
            right.style.display = "none";
        } else if (DN.speaker === "center") {
            left.style.display = "none";
            center.style.display = "block";
            right.style.display = "none";
        } else if (DN.speaker === "right") {
            left.style.display = "none";
            center.style.display = "none";
            right.style.display = "block";
        }
        else
        {
            left.style.display = "none";
            center.style.display = "none";
            right.style.display = "none";
        }
        bkimg.style.backgroundImage=`url(${DN.background})`;
        timer=setInterval(textview,50);
    }
    else
    {
        ending();
    }
}

function ending()
{
    wo.style.opacity=1;
    setTimeout(showls,2000);
}

function showls()
{
    wo.style.display="none";
    ls.style.display="flex";
    let prg=0;
    let prgtimer=setInterval(() => {
        prg+=1;
        pbar.style.width=prg+"%";

        if(prg>=100)
        {
            clearInterval(prgtimer);
            ls.style.display="none";
            dbox.style.display="none";
            left.style.display="none";
            center.style.display="none";
            right.style.display="none";
            window.location.href="https://yokonoha.github.io/yokoha-st/";
        }
    }, 100); //100msで1%プラス、10sで100%になる(実はこれは偽ローディング画面。裏で作業はしてません!)
}

document.addEventListener("click",()=>
{
    if(!timer||imanannmojime>=dialogues[currentDindex].text.length)
    {
        clearInterval(timer);
        currentDindex++;
        updateD();
    }
});

updateD();