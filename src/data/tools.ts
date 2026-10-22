// ぬこた屋ツールズで紹介するツールの一覧。
// ツールを追加・修正するときはこのファイルだけ編集すればOK（カルーセルや詳細パネルは自動で合わせて表示される）

export interface Tool {
  /** 詳細パネルのIDに使う英数字の名前（ほかのツールと被らないようにする） */
  id: string;
  /** ツール名 */
  title: string;
  /** 短い紹介文（今は画面には出していない） */
  description: string;
  /** 詳細パネルの説明文。
 で改行 */
  detailText: string;
  /** 「公開ページへ」ボタンのリンク先 */
  url: string;
  /** 「X(旧Twitter)で見る」ボタンのリンク先 */
  xUrl?: string;
  /** 種類のタグ。増やすときは index.astro の .tag-○○ の色も追加する */
  type: "Web" | "BOOTH" | "Spreadsheet";
  /** 「作成中」のときは「公開ページへ」ボタンが出ない */
  status: "公開中" | "作成中";
  /** カルーセルのカード画像（gallery がなければ詳細パネルにも使う） */
  image?: string;
  /** 詳細パネルで切り替え・拡大表示できる画像。public/ に置いて BASE_URL を付けて書く */
  gallery?: string[];
}

export const tools: Tool[] = [
  {
    id: '404-tool',
    title: 'CoCチャパレ＆コマ作成ツール',
    description: 'キャラクター保管所(CoC6版)のデータから、チャットパレットとコマ用プロフィールを一括作成。',
    detailText: 'キャラクター保管所(CoC6版)のデータから、チャットパレットとコマ用プロフィールを一括作成。\nTekeyへの直接送信や、ココフォリア用データの出力、文字色プレビュー機能も搭載。',
    url: 'https://nununu-tatata.github.io/404-tool/',
    xUrl: 'https://x.com/nukonuko_4/status/2012091202644881772?s=20',
    type: 'Web',
    status: '公開中',
    image: `${import.meta.env.BASE_URL}chatpare_ogp.png`
  },
  {
    id: 'log-checker',
    title: 'CoC成長チェックツール',
    description: 'Tekeyやココフォリアのログから技能の成長を自動判定・集計するツールです。',
    detailText: 'Tekeyやココフォリアのログをドラッグ＆ドロップするだけで、技能の成長（CL・FB・S・初期値など）を自動判定・集計するツールです。スマホ対応！\n６版のTekey（v2）とココフォリアのログに対応。様々なオプションで好きな成長をチェックしテキスト出力可能です。',
    url: 'https://nununu-tatata.github.io/log-checker/',
    xUrl: 'https://x.com/nukonuko_4/status/2017164633191174491?s=20',
    type: 'Web',
    status: '公開中',
    image: 'https://nununu-tatata.github.io/log-checker/ogp.png'
  },
  {
    id: 'keypale',
    title: 'KeyPale',
    description: 'Tekey向けチャパレ編集エディタ。素早く快適にチャパレを編集。',
    detailText: 'KeyPaleはTekey向けのチャットパレット（シナリオテキスト）を快適に編集できるデスクトップアプリです。\nタブ管理・プレビュー・定型文（スニペット・変数）でシナリオ作成をサポートします。',
    url: 'https://alpha.booth.pm/items/7976314',
    xUrl: 'https://x.com/nukonuko_4/status/2022241838795526288?s=20',
    type: 'BOOTH',
    status: '公開中',
    image: 'https://booth.pximg.net/b72d37c2-6b53-40ba-a5e2-bd7e0f1f61e9/i/7976314/f49d3507-1dbd-478f-a9bf-01959b27334c.png'
  },
  {
    id: 'tecopi',
    title: 'TECOPI',
    description: 'テキスト送信支援ツール。シナリオテキストを手軽にコピペ＆送信。',
    detailText: 'TRPGのオンラインセッションにおける「シナリオテキストの送信」に特化した、効率化デスクトップアプリです。\n長文のシナリオやPDFからコピーした文章をサクサク分割・整理し、ダブルクリックでココフォリアなどのセッションツールへ自動送信します。',
    url: 'https://alpha.booth.pm/items/8544644',
    xUrl: 'https://x.com/nukonuko_4/status/2070102447843160216?s=20',
    type: 'BOOTH',
    status: '公開中',
    image: `${import.meta.env.BASE_URL}tecopi_ogp.png`
  },
  {
    id: 'charasheet-backup',
    title: 'CoCキャラシ保管スプレッドシート',
    description: 'キャラクター保管所(CoC6版)のキャラシを、自分のスプレッドシートにまとめてバックアップ。',
    detailText: 'キャラクター保管所(CoC6版)のキャラクターシートを、自分のGoogleスプレッドシートにまとめてバックアップできるツールです。\nボタン一つで最新の内容に更新でき、チャパレやココフォリア用のコマも自動で作成します。',
    url: 'https://nununu-tatata.github.io/charasheet-backup/',
    xUrl: 'https://x.com/nukonuko_4/status/2113216292261945392?s=20',
    type: 'Spreadsheet',
    status: '公開中',
    image: 'https://nununu-tatata.github.io/charasheet-backup/ogp.png',
    gallery: [1, 2, 3, 4].map(n => `${import.meta.env.BASE_URL}charasheet-backup/${n}.png`)
  }
];
