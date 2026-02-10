const imageFolder = 'github/';
const imageData = [
    { src: 'amato.png', category: 'xpia' },
    { src: 'tsubaki1.png', category: 'xpia' },
    { src: 'uto.png', category: 'xpia' },
    { src: 'riu.png', category: 'xpia' },
    { src: 'rintaro.png', category: 'xpia' },
    { src: 'ken.png', category: 'xpia' },
    { src: 'mio.png', category: 'xpia' },
    { src: 'name1.png', category: 'xpia' },
    { src: 'naichi.png', category: 'xpia' },
    { src: 'haku.png', category: 'xpia' },

    { src: 'fuyumi.png', category: 'svpt' },
    { src: 'yuki.png', category: 'svpt' },
    { src: 'etsuya.png', category: 'svpt' },
    { src: 'kaname.png', category: 'svpt' },
    { src: 'amu.png', category: 'svpt' },
    { src: 'takumin.png', category: 'svpt' },
    { src: 'yuno.png', category: 'svpt' },

    { src: 'hyuuga.png', category: 'kiki' },
    { src: 'arata.png', category: 'kiki' },
    { src: 'atom.png', category: 'kiki' },
    { src: 'uta.png', category: 'kiki' },
    { src: 'shiki.png', category: 'kiki' },
    { src: 'tsukasa.png', category: 'kiki' },
    { src: 'nao.png', category: 'kiki' },

    { src: 'hikaru.png', category: 'dxu' },
    { src: 'asahi.png', category: 'dxu' },
    { src: 'daichi.png', category: 'dxu' },
    { src: 'sera.png', category: 'dxu' },
    { src: 'taichin.png', category: 'dxu' },
    { src: 'ryuuga.png', category: 'dxu' },
    { src: 'konchan.png', category: 'dxu' },
    { src: 'ren.png', category: 'dxu' },

    { src: 'ayumu.png', category: 'und' },
    { src: 'hamo.png', category: 'und' },
    { src: 'sena.png', category: 'und' },
    { src: 'haruto.png', category: 'und' },
    { src: 'minato.png', category: 'und' },
    { src: 'kei.png', category: 'und' },
    { src: 'kota.png', category: 'und' },
    { src: 'komugi.png', category: 'und' },
    { src: 'ito.png', category: 'und' },

    { src: 'fuyumi1.png', category: 'lvls' },
    { src: 'yuki1.png', category: 'lvls' },
    { src: 'fuma.png', category: 'lvls' },
    { src: 'ibuki.png', category: 'lvls' },
    { src: 'yuma.png', category: 'lvls' },
    { src: 'yutaka.png', category: 'lvls' },
    { src: 'taro1.png', category: 'lvls' },

    { src: 'tsubaki.png', category: 'yumeneo' },
    { src: 'name.png', category: 'yumeneo' },
    { src: 'yura.png', category: 'yumeneo' },
    { src: 'saku.png', category: 'yumeneo' },
    { src: 'kyouhei.png', category: 'yumeneo' },
    { src: 'shota.png', category: 'yumeneo' },
    { src: 'hayato.png', category: 'yumeneo' },
    { src: 'raito.png', category: 'yumeneo' },

    { src: 'ryo.png', category: 'lvsk' },
    { src: 'etsuya1.PNG', category: 'lvsk' },
    { src: 'taro.png', category: 'lvsk' },
    { src: 'hayate1.png', category: 'lvsk' },
    { src: 'uto1.png', category: 'lvsk' },
    { src: 'satsuki.png', category: 'lvsk' },
    { src: 'sakura.png', category: 'lvsk' },
    { src: 'yuson.png', category: 'lvsk' },
    { src: 'taiyou.png', category: 'lvsk' },

    { src: 'sou.png', category: 'ptgs' },
    { src: 'toa.png', category: 'ptgs' },
    { src: 'umi.png', category: 'ptgs' },    
    { src: 'mea.png', category: 'ptgs' },
    { src: 'mira.png', category: 'ptgs' },
    { src: 'ten.png', category: 'ptgs' },
    { src: 'tsuki.png', category: 'ptgs' },

    { src: 'jin.png', category: 'astral' },
    { src: 'riki.png', category: 'astral' },
    { src: 'nagisa.png', category: 'astral' },
    { src: 'lei.png', category: 'astral' },
    { src: 'minato1.png', category: 'astral' },
    { src: 'tsubasa.png', category: 'astral' },
    { src: 'will.png', category: 'astral' },

    { src: 'kaguya.png', category: 'scandoll' },
    { src: 'sino.png', category: 'scandoll' },
    { src: 'asato.png', category: 'scandoll' },
    { src: 'reo.png', category: 'scandoll' },
    { src: 'soran.png', category: 'scandoll' },
    { src: 'ryuto.png', category: 'scandoll' },
    { src: 'aki.png', category: 'scandoll' },

];
const MAX_SELECTION = 1;
const SELECTED_LABEL = '☑';

//------------------------------------------------------------------------------------------------

// タブごとの選択状態を管理するためのオブジェクト
const tabSelections = {};

const i18n = {
  ja: {
    title: "RINDO推しを選ぶ",
    save: "Save Image",
    default: "デフォルト",
    hideLeft: "左バー消滅",
    mobileHint: "※スマホの人は横画面推奨",
    svpt: "せーぶぽいんと",
    yumeneo: "夢喰NEON",
    ptgs: "ポルガ",
    lvsk: "らぶしっく",
    xpia: "XP!A",
    und: "UNDEЯ DOG",
    dxu: "デクス",
    lvls: "ラブレス",
    astral: "Ⱥstral",
    kiki: "ki:ki",
    scandoll: "すきゃんどーる",
  },
  en: {
    title: "Rindo Oshi Selector",
    save: "Save Image",
    default: "Default",
    hideLeft: "Hide Left Bar",
    mobileHint: "*Landscape mode is recommended on mobile",
    svpt: "Savepoint",
    yumeneo: "Yumekui Neon",
    ptgs: "Poltergeist",
    lvsk: "Lovesick",
    xpia: "XP!A",
    und: "UNDEЯ DOG",
    dxu: "DeXeultio",
    lvls: "Luvless",
    astral: "Ⱥstral",
    kiki: "ki:ki",
    scandoll: "Scandoll",
  }
};

// ===== i18n適用 =====
function applyLang(lang) {
  const dict = i18n[lang] || i18n.ja;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] != null) el.textContent = dict[key];
  });

  // 言語を保存（次回も維持）
  localStorage.setItem("lang", lang);
}

// ラジオボタンの監視
function initLangSwitch() {
  const saved = localStorage.getItem("lang") || "ja";
  const radio = document.querySelector(`input[name="lang"][value="${saved}"]`);
  if (radio) radio.checked = true;

  // 初期適用
  applyLang(saved);

  // change適用（全ラジオに付与）
  document.querySelectorAll('input[name="lang"]').forEach(r => {
    r.addEventListener("change", (e) => {
      applyLang(e.target.value);
    });
  });
}

// タブの選択状態を表示
function updateTabSelectionsDisplay() {
    const tabSelectionsElement = document.getElementById('tab-selections');
    if (!tabSelectionsElement) return; // ★これ追加：要素が無ければ終了
    
    tabSelectionsElement.innerHTML = ''; // クリアしてから再描画

    // tabSelectionsが空でも問題ないように対策
    if (tabSelections && Object.keys(tabSelections).length > 0) {
        for (const [category, selections] of Object.entries(tabSelections)) {
            const categoryInfo = document.createElement('div');
            categoryInfo.textContent = `${category}: ${selections.join(', ')}`;
            tabSelectionsElement.appendChild(categoryInfo);
        }
    } else {
        tabSelectionsElement.textContent = 'No selections made yet.';
    }
}

function loadImages() {
    const tabs = document.querySelectorAll('.tab-label');
    const tabContents = document.querySelectorAll('.tab-content');
    const cells = document.querySelectorAll('.cell');
    const modeC = document.getElementById('modeC');
    let modeCEnabled = false;

    function clearAllTopCells() {
        cells.forEach(cell => cell.innerHTML = '');
    }

    function clearAllListSelections() {
        document.querySelectorAll('.image-item.selected').forEach(img => {
            img.classList.remove('selected');
            removeNumberingAndBorder(img.parentElement);
        });
    }

    function clearAllSelectionsEverywhere() {
        clearAllTopCells();
        clearAllListSelections();
        for (const key of Object.keys(tabSelections)) delete tabSelections[key];
        updateTabSelectionsDisplay();
    }

    function fillAllCells(src) {
        cells.forEach(cell => {
            cell.innerHTML = `<img src="${imageFolder}${src}" class="selected">`;
        });
    }

    // C切替：ONでもOFFでも必ず全クリア（復元なし）
    if (modeC) {
        modeC.addEventListener('change', () => {
            modeCEnabled = modeC.checked;
            clearAllSelectionsEverywhere();
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;
            
            // すでにアクティブなタブを再度クリックした場合、何もしない
            if (tab.classList.contains('active')) {
                return; 
            }
            // アクティブなタブを更新
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // 現在のタブコンテンツを表示
            tabContents.forEach(content => {
                if (content.previousElementSibling === tab) {
                    updateImageList(category, content.querySelector('.image-list'));
                    if (!modeCEnabled) {
                        restoreSelectionState(category); // 選択状態の復元
                    }
                }
            });
        });
    });

    // 初期表示（最初のタブをアクティブにする）
    tabs[0].click();

    function updateImageList(category, container) {
        container.innerHTML = '';
        const filteredImages = imageData.filter(img => img.category === category);

        filteredImages.forEach(imgData => {
            const imgContainer = document.createElement('div'); // 画像を囲むコンテナ
            imgContainer.classList.add('image-container');

            const img = document.createElement('img');
            img.src = `${imageFolder}${imgData.src}`;
            img.dataset.src = imgData.src;
            img.dataset.category = imgData.category;
            img.classList.add('image-item');
            img.addEventListener('click', () => handleImageClick(img, category));

            imgContainer.appendChild(img);
            container.appendChild(imgContainer);
        });
    }

    function handleImageClick(img, category) {
        const src = img.dataset.src;
        
        // --- Cモード：単一選択＆全セル埋め ---
        if (modeCEnabled) {
            // 前の選択は全部消す（自分で外す必要なし）
            clearAllSelectionsEverywhere();

            // 今クリックした1枚だけ選択表示
            img.classList.add('selected');
            addNumberingAndBorder(img.parentElement, 1);

            // 全セルに同じキャラを表示
            fillAllCells(src);
            return; // ★ここで既存処理を完全に止める
        }

        const columnMapping = {
            'svpt': [0],
            'yumeneo': [1],
            'ptgs': [2],
            'lvsk': [3],
            'xpia': [4],
            'und': [5],
            'dxu': [6],
            'kiki': [7],
            'lvls': [8],
            'astral': [9],
            'scandoll': [10],
        };

        const positions = columnMapping[category] || [];
        const isSelected = img.classList.contains('selected');
        const tabCategory = document.querySelector('.tab-label.active').dataset.category;

        // 現在のタブの選択状態を取得
        let selectedCategory = tabSelections[tabCategory] || [];

        // すでに選択されている画像が再度クリックされた場合 -> 選択解除
        if (selectedCategory.includes(src)) {
            // 選択解除
            img.classList.remove('selected');
            removeNumberingAndBorder(img.parentElement);  // コンテナから番号と枠を削除

            // 上部の該当セルから画像を削除
            const cellIndex = selectedCategory.indexOf(src);
            if (cellIndex !== -1) {
                selectedCategory.splice(cellIndex, 1); // 選択状態リストから削除
                cells[positions[cellIndex]].innerHTML = ''; // 上部の該当セルから削除
            }

            // 再配置処理を追加
            repositionImages(tabCategory);  // 残りの画像を再配置
        } else {
            // 選択制限（3枚まで）
            if (selectedCategory.length >= MAX_SELECTION) {
                alert('選択できる画像は1枚までです');
                return;
            }

            // 新たに選択
            img.classList.add('selected');
            addNumberingAndBorder(img.parentElement, selectedCategory.length + 1);  // コンテナに番号と枠を追加

            // 上部の空きセルに画像を表示
            const availablePosition = positions.find(pos => !cells[pos].querySelector('img'));
            if (availablePosition !== undefined) {
                cells[availablePosition].innerHTML = `<img src="${imageFolder}${src}" class="selected">`;
                selectedCategory.push(src); // 選択リストに追加

                // ラベルの再配置
                updateImageNumbers(tabCategory);
            }
        }

        // 選択解除時にタブの選択リストを更新
        tabSelections[tabCategory] = selectedCategory;
    }

    function updateTabState(tabCategory) {
        // 既存の選択リストを取得
        const selectedCategory = tabSelections[tabCategory] || [];

        // 全画像の選択状態をクリア
        document.querySelectorAll('.image-grid img').forEach(img => {
            img.classList.remove('selected');
            removeNumberingAndBorder(img.parentElement);  // 全ての画像から枠と番号をクリア
        });

        // 選択されている画像を再度選択状態にする
        selectedCategory.forEach((src, index) => {
            const img = document.querySelector(`img[data-src="${src}"]`);
            if (img) {
                img.classList.add('selected');
                addNumberingAndBorder(img.parentElement, index + 1);  // 画像に番号と枠を付ける
            }
        });
    }

    function addNumberingAndBorder(container, number) {
        // 青い枠と番号を追加（コンテナに）
        container.style.border = '2px solid blue';
        let label = container.querySelector('.selected-label');
        if (!label) {
            label = document.createElement('div');
            label.className = 'selected-label';
            container.appendChild(label);
        }
        label.textContent = SELECTED_LABEL; // 定数で管理
    }

    function removeNumberingAndBorder(container) {
        // 青い枠と番号を削除
        container.style.border = 'none';
        const label = container.querySelector('.selected-label');
        if (label) label.remove();
    }

    function updateImageNumbers(tabCategory) {
        const columnMapping = {
            'svpt': [0],
            'yumeneo': [1],
            'ptgs': [2],
            'lvsk': [3],
            'xpia': [4],
            'und': [5],
            'dxu': [6],
            'kiki': [7],
            'lvls': [8],
            'astral': [9],
            'scandoll': [10],
        };

        const selectedCategory = tabSelections[tabCategory] || [];
        const positions = columnMapping[tabCategory] || [];

        selectedCategory.forEach((src, index) => {
            const imgContainer = document.querySelector(`.image-item[data-src="${src}"]`).parentElement;
            addNumberingAndBorder(imgContainer, index + 1);
        });
    }

    function repositionImages(tabCategory) {
        const columnMapping = {
            'svpt': [0],
            'yumeneo': [1],
            'ptgs': [2],
            'lvsk': [3],
            'xpia': [4],
            'und': [5],
            'dxu': [6],
            'kiki': [7],
            'lvls': [8],
            'astral': [9],
            'scandoll': [10],
        };

        const selectedCategory = tabSelections[tabCategory] || [];
        const positions = columnMapping[tabCategory] || [];

        // 上部の該当するタブの画像だけをクリア
        positions.forEach(position => {
            cells[position].innerHTML = '';
        });

        // 現在の選択画像で再配置
        selectedCategory.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = `${imageFolder}${src}`;
            img.classList.add('selected');
            const cellIndex = positions[index];
            if (cellIndex !== undefined) {
                console.log(`Placing image ${src} at position ${cellIndex}`);
                cells[cellIndex].innerHTML = '';
                cells[cellIndex].appendChild(img);
            }
        });

        // ラベルの更新
        updateImageNumbers(tabCategory);
    }

    function restoreSelectionState(category) {
        const selectedCategory = tabSelections[category] || [];
        const columnMapping = {
             'svpt': [0],
            'yumeneo': [1],
            'ptgs': [2],
            'lvsk': [3],
            'xpia': [4],
            'und': [5],
            'dxu': [6],
            'kiki': [7],
            'lvls': [8],
            'astral': [9],
            'scandoll': [10],
        };
        const positions = columnMapping[category] || [];

        // 他のタブをクリアせずに、選択状態を復元
        selectedCategory.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = `${imageFolder}${src}`;
            img.classList.add('selected');
            const cellIndex = positions[index];
            if (cellIndex !== undefined) {
                cells[cellIndex].appendChild(img);
            }
        });

        // 青枠と☑の復元
        const imageContainers = document.querySelectorAll(`.tab-content .image-container .image-item[data-category="${category}"]`);
        imageContainers.forEach(img => {
            if (selectedCategory.includes(img.dataset.src)) {
                const container = img.parentElement;
                const selectedIndex = selectedCategory.indexOf(img.dataset.src);
                addNumberingAndBorder(container, selectedIndex + 1);  // ラベルと青枠を追加
            }
        });

        // ラベルの更新
        updateImageNumbers(category);
    }

    // 保存ボタンのクリックイベントを追加
    const saveButton = document.getElementById('save-button');
    if (saveButton) {
        saveButton.addEventListener('click', () => {
            const tabCategory = document.querySelector('.tab-label.active').dataset.category;
            saveImage();
        });
    }
}

function saveImage() {
  const grid = document.getElementById('grid');
  if (!grid) return;

  const isMobile =
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
    navigator.maxTouchPoints > 0;

  html2canvas(grid, { useCORS: true, scale: 2 })
    .then(canvas => new Promise(resolve => canvas.toBlob(resolve, 'image/png')))
    .then(async (blob) => {
      if (!blob) throw new Error('Blob 作成に失敗');

      // ✅ ばかたれモードで保存した時だけ集計 & 連打対策
      const modeC = document.getElementById('modeC');
      const modeCEnabled = !!modeC?.checked;

      if (modeCEnabled) {
        const selectedImg = document.querySelector('.image-list .image-item.selected');

        if (selectedImg?.dataset?.src) {
          const filenameSrc = selectedImg.dataset.src;

          // --- 同端末連打対策（ばかたれ時のみ） ---
          // どれくらいで再カウントOKにするか（例：10分）
          const COOLDOWN_MS = 60 * 60 * 1000;

          // 「同キャラだけ」連打を止める（キャラ別クールダウン）
          // 全キャラまとめて止めたいなら key を固定文字にしてOK:
          // const key = 'bakatareLastSent';
          const key = `bakatareLastSent`;

          const last = Number(localStorage.getItem(key) || 0);
          const nowMs = Date.now();

          if (nowMs - last >= COOLDOWN_MS) {
            try {
              localStorage.setItem(key, String(nowMs));
            } catch (e) {
              console.warn('ばかたれ集計: 失敗（保存は続行）', e);
            }
          } else {
            console.log('ばかたれ集計: クールダウン中なので加算しない', {
              filenameSrc,
              remainingMs: COOLDOWN_MS - (nowMs - last)
            });
          }
        } else {
          console.warn('ばかたれ集計: 選択キャラが見つからない');
        }
      }
      // ✅ modeCEnabled が false のときは、localStorageも集計も一切触らない

      // ファイル名（yyyyMMdd_HHmmss）
      const now = new Date();
      const yyyy = now.getFullYear();
      const mm = String(now.getMonth() + 1).padStart(2, '0');
      const dd = String(now.getDate()).padStart(2, '0');
      const hh = String(now.getHours()).padStart(2, '0');
      const mi = String(now.getMinutes()).padStart(2, '0');
      const ss = String(now.getSeconds()).padStart(2, '0');
      const filename = `原神推しキャラランキング_${yyyy}${mm}${dd}_${hh}${mi}${ss}.png`;

      // ---- モバイル優先ロジック ----
      if (isMobile) {
        try {
          const file = new File([blob], filename, { type: 'image/png' });
          if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
              files: [file],
              title: '原神推しキャラランキング',
              text: '写真アプリに保存してね'
            });
            return; // モバイルは共有シートで完了
          }
        } catch (e) {
          console.warn('Share canceled/failed, fallback.', e);
        }

        // 共有できないモバイル → 新規タブで画像を開いて長押し保存
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
        setTimeout(() => URL.revokeObjectURL(url), 60 * 1000);
        return;
      }

      // ---- PC(デスクトップ) は従来の「即ダウンロード」に固定 ----
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 60 * 1000);
    })
    .catch(err => {
      console.error('Error capturing image:', err);
      alert('画像の保存に失敗しました。もう一度お試しください。');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initLangSwitch();
    loadImages();

    // 画像生成などでDOMが増えた後に、現在の言語でもう一度適用
    const currentLang =
      document.querySelector('input[name="lang"]:checked')?.value ||
      localStorage.getItem("lang") ||
      "ja";
    applyLang(currentLang);

    const sidebar = document.getElementById('sidebar');
    const sizeOptions = document.querySelectorAll('input[name="size-option"]');

    sizeOptions.forEach(option => {
        option.addEventListener('change', (event) => {
            if (event.target.value === 'default') {
                sidebar.style.display = 'block';   // ← 左バー表示
            } else if (event.target.value === 'hakai') {
                sidebar.style.display = 'none';    // ← 左バー非表示
            }
        });
    });
});
