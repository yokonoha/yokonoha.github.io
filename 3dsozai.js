const PREFIX = "https://yokonoha.pages.dev/3d_souko/";
  
  const modelData = [
  
    {
      genre: "キャラクター向け小物アイテム",
      items: [
        {
          name: "ベレー帽",
          desc: "「横井ひな」が着用しているベレー帽です。頭全体を覆うサイズになっています。イラストトレース等にどうぞ。",
          tags: [{ class: "model", text: "3Dモデル" }, { class: "hina", text: "横井ひな" }],
          url: PREFIX + "beret_hina.glb"
        },
        {
          name: "ビジネスネクタイ(ローポリ)",
          desc: "ローポリなので少し角があります。イラストトレース等にどうぞ。",
          tags: [{ class: "model", text: "3Dモデル" }, { class: "hina", text: "横井ひな" }],
          url: PREFIX + "necktie_hina.glb"
        },
        {
          name: "赤リボン",
          desc: "赤いリボンの装飾です。イラストトレース等にどうぞ。",
          tags: [{ class: "model", text: "3Dモデル" }, { class: "hina", text: "横井ひな" }],
          url: PREFIX + "ribborn_hina.glb"
        },
        {
          name: "雨傘(簡略化)",
          desc: "撮影・映像素材向けに用意した傘です。骨組みはありません。",
          tags: [{ class: "model", text: "3Dモデル" }, { class: "hina", text: "横井ひな" }],
          url: PREFIX + "unbrella1.glb"
        }
      ]
    },
    {
      genre: "道路・標識関連",
      items: [
        {
          name: "三角コーン(ハイポリ版)",
          desc: "よくある三角コーンの3Dモデルです。",
          tags: [{ class: "model", text: "3Dモデル" }],
          url: PREFIX + "corn_hp.glb"
        },
        {
          name: "デリネーター(視線誘導標)",
          desc: "よく見かける道端に刺さってるアレです。通常版と雪国仕様のものの3Dデータを作成しました。",
          tags: [{ class: "model", text: "3Dモデル" }],
          variations: [
            { label: "通常版", url: PREFIX + "delinatpr.glb" },
            { label: "雪国仕様", url: PREFIX + "delinatpr_snow.glb" }
          ]
        },
                {
          name: "誘導棒(交通整理に使用する赤い棒)",
          desc: "誘導棒(TrafficWand)です。",
          tags: [{ class: "model", text: "3Dモデル" }],
          url: PREFIX + "trafficwand.glb"
        },
        {
          name: "歩行者・自転車専用信号機",
          desc: "街なかにある歩行者用信号機を3Dにしてみました。意図的に歩行者と自転車の文字表記を入れ替えています。",
          tags: [{ class: "model", text: "3Dモデル" }],
          variations: [
            { label: "タイプ1", url: PREFIX + "pedestriantl.glb" },
            { label: "タイプ2", url: PREFIX + "pedestriantl2.glb" },
            { label: "タイプ3", url: PREFIX + "pedestriantl3.glb" }
          ]
        },
        {
          name: "信号機",
          desc: "都市部で見かけるアーチタイプの信号機です。",
          tags: [{ class: "model", text: "3Dモデル" }],
          url: PREFIX + "trafficlight1.glb"
        },
        {
          name: "ガードレール(三本線パターン)",
          desc: "シンプルなガードレールです。つなぎ合わせて活用できます。",
          tags: [{ class: "model", text: "3Dモデル" }],
          url: PREFIX + "guard1.glb"
        },
        {
          name: "レール",
          desc: "シンプルな線路用直線レールです。",
          tags: [{ class: "model", text: "3Dモデル" }],
          url: PREFIX + "rail1.glb"
        },
        {
          name: "道路(アスファルト路面)",
          desc: "シンプルなアスファルト舗装の道路です。つなぎ合わせると長い道路を作れます。",
          tags: [{ class: "model", text: "3Dモデル" }],
          url: PREFIX + "road1.glb"
        }
      ]
    },
    {
      genre: "家具・インテリア",
      items: [
        {
          name: "姿見 (スタンドミラー)",
          desc: "自立型の鏡です。",
          tags: [{ class: "model", text: "3Dモデル" }],
          url: PREFIX + "mirrorstand1.glb"
        },
        {
          name: "室内インテリアスタンドライト",
          desc: "ホテル等でよく見かけるおしゃれなアレです。",
          tags: [{ class: "model", text: "3Dモデル" }],
          url: PREFIX + "standlight.glb"
        },
        {
          name: "木製テーブル",
          desc: "一般的なダイニングテーブルの3D素材です。",
          tags: [{ class: "model", text: "3Dモデル" }],
          url: PREFIX + "table1.glb"
        },
        {
          name: "段ボール (宛名ラベル付き)",
          desc: "段ボールの3D素材です。",
          tags: [{ class: "model", text: "3Dモデル" }],
          url: PREFIX + "package.glb"
        },
        {
          name: "窓枠(ローポリ)",
          desc: "壁に埋め込めばそれっぽく使える窓付き窓枠です。",
          tags: [{ class: "model", text: "3Dモデル" }],
          url: PREFIX + "window1.glb"
        }
      ]
    },
    {
      genre: "小物・建築資材",
      items: [
        {
          name: "丸メガネ 素材 レンズ無し",
          desc: "シンプルなメガネです。",
          tags: [{ class: "model", text: "3Dモデル" }],
          url: PREFIX + "round_glasses.glb"
        },
        {
          name: "角メガネ素材 レンズ無し",
          desc: "シンプルなメガネです。",
          tags: [{ class: "model", text: "3Dモデル" }],
          url: PREFIX + "glasses_rectangle_by_Yokoha.glb"
        },
        {
          name: "普通のサッカーボール",
          desc: "白黒の模様のついた通常のサッカーボールです。",
          tags: [{ class: "model", text: "3Dモデル" }],
          url: PREFIX + "soccerball.glb"
        },
        {
          name: "一般的なスタイラスペン",
          desc: "デジタル絵師なら必須のアイテム。",
          tags: [{ class: "model", text: "3Dモデル" }],
          url: PREFIX + "stylus.glb"
        },
        {
          name: "木造住宅の柱",
          desc: "...柱です。テクスチャはオリジナルです。",
          tags: [{ class: "model", text: "3Dモデル" }],
          url: PREFIX + "pillar1.glb"
        },
        {
          name: "簀の子(すのこ)",
          desc: "DIYで大活躍する すのこ を3Dにしてみました。",
          tags: [{ class: "model", text: "3Dモデル" }],
          url: PREFIX + "sunoko1.glb"
        }
      ]
    }
  ];

  
  
  
  const treeContainer = document.getElementById('tree-container');
  const viewer = document.getElementById('viewer');
  const titleEl = document.getElementById('detail-title');
  const descEl = document.getElementById('detail-desc');
  const tagsEl = document.getElementById('detail-tags');
  const variationContainer = document.getElementById('variation-container');
  const variationRadios = document.getElementById('variation-radios');
  const btnDownload = document.getElementById('btn-download');

  let currentSelectedLi = null;

  
  modelData.forEach((category) => {
    const details = document.createElement('details');
    details.open = true; 
    const summary = document.createElement('summary');
    summary.textContent = category.genre;
    details.appendChild(summary);

    const ul = document.createElement('ul');
    ul.className = 'tree-list';

    category.items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item.name;
      li.addEventListener('click', () => selectModel(item, li));
      ul.appendChild(li);
    });

    details.appendChild(ul);
    treeContainer.appendChild(details);
  });

  
  function selectModel(item, liElement) {
    
    if (currentSelectedLi) {
      currentSelectedLi.classList.remove('active');
    }
    liElement.classList.add('active');
    currentSelectedLi = liElement;

    
    titleEl.textContent = item.name;
    descEl.innerHTML = item.desc;
    
    tagsEl.innerHTML = '';
    item.tags.forEach(t => {
      const span = document.createElement('span');
      span.className = `tag ${t.class}`;
      span.textContent = t.text;
      tagsEl.appendChild(span);
    });

    
    variationRadios.innerHTML = ''; 
    
    if (item.variations && item.variations.length > 0) {
      
      variationContainer.style.display = 'block';
      
      item.variations.forEach((varData, index) => {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'variation';
        radio.value = varData.url;
        if (index === 0) radio.checked = true; 
        
        radio.addEventListener('change', (e) => {
          updateViewerAndDownload(e.target.value);
        });

        label.appendChild(radio);
        label.appendChild(document.createTextNode(' ' + varData.label));
        variationRadios.appendChild(label);
      });
      
      updateViewerAndDownload(item.variations[0].url);
      
    } else {
      
      variationContainer.style.display = 'none';
      updateViewerAndDownload(item.url);
    }
  }

  
  function updateViewerAndDownload(fileUrl) {
    viewer.src = fileUrl;
    btnDownload.style.display = 'block';
    btnDownload.href = fileUrl;
  }
