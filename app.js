// シャッフル関数
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 単語と頻出文の定義
const lineWords = {
    あ: ["アイコン", "イノベーション", "ウェブ", "エンクリプション", "オープンソース", "アジェンダ", "インターネット", "ウェブサイト", "エンタープライズ", "オペレーティングシステム"],
    か: ["カプセル化", "キャッシュ", "クラウド", "ケーブル", "コード", "カスタマイズ", "キーボード", "クラスタリング", "ケータイ", "コンピュータ"],
    さ: ["サーバー", "システム", "スクリプト", "セキュリティ", "ソフトウェア", "サービス", "シリコン", "スタック", "セッション", "ソースコード"],
    た: ["タブレット", "チップ", "ツール", "テクノロジー", "トラフィック", "タスク", "チャネル", "ツールチェーン", "テスト", "トレンド"],
    な: ["ナビゲーション", "ニーズ", "ヌーク", "ネットワーク", "ノード", "ナレッジ", "ニッチ", "ヌル", "ネゴシエーション", "ノーマライゼーション"],
    は: ["ハードウェア", "ヒープ", "フック", "ヘッダー", "ホスト", "ハッシュ", "ヒップ", "フレームワーク", "ヘルプデスク", "ホームページ"],
    ま: ["マクロ", "ミッドルウェア", "ムーブ", "メタデータ", "モデル", "マスター", "ミクロ", "マルチタスク", "メソッド", "モジュール"],
    や: ["ヤンキース", "ユーザー", "ユーティリティ", "エンドユーザー", "ヨーク"],
    ら: ["ライブラリ", "リンク", "ループ", "レジストリ", "ローカル", "ランタイム", "リモート", "レンダリング", "レイテンシ", "ロジック"],
    わ: ["ワンクリック", "ワイヤフレーム", "ワークフロー", "ワールドワイドウェブ", "ワイヤレス"],
};

let currentWords = [];
let currentIndex = 0;
let displayedWords = [];

function displayText() {
    if (currentIndex < currentWords.length) {
        document.getElementById("textArea").innerText = currentWords[currentIndex];
        displayedWords.push(currentWords[currentIndex]);
        currentIndex++;
    } else if (currentWords.length > 0) {
        document.getElementById("textArea").innerText = "全ての単語を読み終えました。";
        currentWords = [];
    }
}

document.getElementById("nextButton").addEventListener("click", function() {
    displayText();
});

document.getElementById("backButton").addEventListener("click", function() {
    if (displayedWords.length > 1) {
        displayedWords.pop(); // 最後の要素を取り出し、削除
        document.getElementById("textArea").innerText = displayedWords[displayedWords.length - 1];
    }
});

document.querySelectorAll('.button[data-line]').forEach(button => {
    button.addEventListener('click', function() {
        let line = this.getAttribute('data-line');
        currentWords = lineWords[line].slice(); // currentWordsに新しい配列を割り当てる
        shuffleArray(currentWords); // currentWordsをシャッフル
        currentIndex = 0;
        displayedWords = [];
        displayText();
    });
});