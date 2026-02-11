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
  { src: 'yura.png', cate
