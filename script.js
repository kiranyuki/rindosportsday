const imageFolder = 'github/';
const MAX_SELECTION = 18;
const SELECTED_LABEL = '☑';

let selectedImages = [];

// --------------------------------------------------
// IMAGE DATA (UNCHANGED)

const imageData = [
  { src: 'amato.png', category: 'xpia' },
  { src: 'tsubaki.png', category: 'xpia' },
  { src: 'uto.png', category: 'xpia' },
  { src: 'riu.png', category: 'xpia' },
  { src: 'rintaro.png', category: 'xpia' },
  { src: 'ken.png', category: 'xpia' },
  { src: 'mio.png', category: 'xpia' },
  { src: 'name.png', category: 'xpia' },
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

  { src: 'fuyumi.png', category: 'lvls' },
  { src: 'yuki.png', category: 'lvls' },
  { src: 'fuma.png', category: 'lvls' },
  { src: 'ibuki.png', category: 'lvls' },
  { src: 'yuma.png', category: 'lvls' },
  { src: 'yutaka.png', category: 'lvls' },
  { src: 'taro.png', category: 'lvls' },

  { src: 'tsubaki.png', category: 'yumeneo' },
  { src: 'name.png', category: 'yumeneo' },
  { src: 'yura.png', category: 'yumeneo' },
  { src: 'saku.png', category: 'yumeneo' },
  { src: 'kyouhei.png', category: 'yumeneo' },
  { src: 'shota.png', category: 'yumeneo' },
  { src: 'hayato.png', category: 'yumeneo' },
  { src: 'raito.png', category: 'yumeneo' },

  { src: 'ryo.png', category: 'lvsk' },
  { src: 'etsuya.png', category: 'lvsk' },
  { src: 'taro.png', category: 'lvsk' },
  { src: 'hayate1.png', category: 'lvsk' },
  { src: 'uto.png', category: 'lvsk' },
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
  { src: 'minato.png', category: 'astral' },
  { src: 'tsubasa.png', category: 'astral' },
  { src: 'will.png', category: 'astral' }
];

// --------------------------------------------------
// GRID

function redrawGrid() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => (cell.innerHTML = ''));

  selectedImages.forEach((src, i) => {
    if (!cells[i]) return;
    const img = document.createElement('img');
    img.src = `${imageFolder}${src}`;
    img.classList.add('selected');
    cells[i].appendChild(img);
  });
}

function redrawSelectionLabels() {
  document.querySelectorAll('.image-item').forEach(img => {
    const container = img.parentElement;
    removeNumberingAndBorder(container);

    if (selectedImages.includes(img.dataset.src)) {
      addNumberingAndBorder(container);
    }
  });
  
}
const i18n = {
  ja: {
    title: "RINGAKU！祭 チームメーカー",
    save: "Save Image",
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
  },
  en: {
    title: "Ringaku Fes Team Maker",
    save: "Save Image",
    mobileHint: "*Landscape mode recommended on mobile",
    svpt: "Savepoint",
    yumeneo: "Yumekui Neon",
    ptgs: "Poltergeist",
    lvsk: "Lovesick",
    xpia: "XP!A",
    und: "UNDER DOG",
    dxu: "DeXeultio",
    lvls: "Luvless",
    astral: "Astral",
    kiki: "ki:ki",
  }
};

function applyLang(lang) {
  const dict = i18n[lang] || i18n.ja;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  localStorage.setItem('lang', lang);
}


// --------------------------------------------------
// SELECTION LOGIC

function handleImageClick(img) {
  const src = img.dataset.src;
  const modeC = document.getElementById('modeC')?.checked;
  const index = selectedImages.indexOf(src);

  // MODE C: fill all 18
  if (modeC) {
    selectedImages = Array(MAX_SELECTION).fill(src);

    document.querySelectorAll('.image-item.selected').forEach(i => {
      i.classList.remove('selected');
      removeNumberingAndBorder(i.parentElement);
    });

    img.classList.add('selected');
    addNumberingAndBorder(img.parentElement);
    redrawGrid();
    redrawSelectionLabels();
    return;
  }

  // UNSELECT
  if (index !== -1) {
    selectedImages.splice(index, 1);
    img.classList.remove('selected');
    removeNumberingAndBorder(img.parentElement);
    redrawGrid();
    redrawSelectionLabels();
    return;
  }

  // LIMIT
  if (selectedImages.length >= MAX_SELECTION) {
    alert(`最大 ${MAX_SELECTION} 人まで選択できます`);
    return;
  }

  // SELECT
  selectedImages.push(src);
  img.classList.add('selected');
  addNumberingAndBorder(img.parentElement);
  redrawGrid();
  redrawSelectionLabels();
}

// --------------------------------------------------
// TABS + RENDERING

function loadImages() {
  const tabs = document.querySelectorAll('.tab-label');
  const contents = document.querySelectorAll('.tab-content');
  const modeC = document.getElementById('modeC');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      contents.forEach(c => {
        if (c.previousElementSibling === tab) {
          renderCategory(tab.dataset.category, c.querySelector('.image-list'));
        }
      });
    });
  });

  tabs[0]?.click();

  if (modeC) {
    modeC.addEventListener('change', () => {
      selectedImages = [];
      document.querySelectorAll('.image-item.selected').forEach(i => {
        i.classList.remove('selected');
        removeNumberingAndBorder(i.parentElement);
      });
      redrawGrid();
      redrawSelectionLabels();
    });
  }
}

function renderCategory(category, container) {
  container.innerHTML = '';
  imageData
    .filter(img => img.category === category)
    .forEach(data => {
      const wrap = document.createElement('div');
      wrap.className = 'image-container';

      const img = document.createElement('img');
      img.src = `${imageFolder}${data.src}`;
      img.dataset.src = data.src;
      img.dataset.category = category;
      img.className = 'image-item';

      if (selectedImages.includes(data.src)) {
        img.classList.add('selected');
        addNumberingAndBorder(wrap);
      }

      img.addEventListener('click', () => handleImageClick(img));
      wrap.appendChild(img);
      container.appendChild(wrap);
    });
}

// --------------------------------------------------
// UI HELPERS

function addNumberingAndBorder(container) {
  container.style.border = '2px solid blue';
  let label = container.querySelector('.selected-label');
  if (!label) {
    label = document.createElement('div');
    label.className = 'selected-label';
    label.textContent = SELECTED_LABEL;
    container.appendChild(label);
  }
}

function removeNumberingAndBorder(container) {
  container.style.border = 'none';
  const label = container.querySelector('.selected-label');
  if (label) label.remove();
}

// --------------------------------------------------
// INIT

document.addEventListener('DOMContentLoaded', () => {
  loadImages();
});

const saveButton = document.getElementById('save-button');

if (saveButton) {
  saveButton.addEventListener('click', async () => {
    const grid = document.getElementById('grid');
    if (!grid) {
      alert('Grid not found');
      return;
    }

    try {
      const canvas = await html2canvas(grid, {
        useCORS: true,
        backgroundColor: null,
        scale: 2
      });

      const link = document.createElement('a');
      link.download = 'ringaku_team.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (e) {
      console.error(e);
      alert('Failed to save image');
    }
  });
}
