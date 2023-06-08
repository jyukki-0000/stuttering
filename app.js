// 単語と頻出文の定義
const lineWords = {
    あ: ["ありがとう", "アイデンティティ", "いちご", "いんと", "うさぎ", "うみ", "えんぴつ", "えいが", "おおきい", "おんがく"],
    か: ["かえる", "かき", "くるま", "けいざい", "こい", "キーボード", "クリエイティブ", "ケーキ", "コンピュータ"],
    さ: ["さかな", "しんぶん", "すいか", "せかい", "そら", "サービス", "システム", "スマートフォン", "セキュリティ", "ソフトウェア"],
    た: ["たこ", "ちょうちょ", "つき", "てんき", "とり", "タブレット", "チップ", "ツール", "テクノロジー", "トラブルシューティング"],
    な: ["なまえ", "にわとり", "ぬま", "ねこ", "のり", "ナノテクノロジー", "ニュース", "ヌメリカルアルゴリズム", "ネットワーク", "ノートパソコン"],
    は: ["はな", "ひつじ", "ふじさん", "へいわ", "ほん", "ハードウェア", "ヒューマンインターフェース", "フレームワーク", "ヘルプデスク", "ホームページ"],
    ま: ["まる", "みかん", "むし", "め", "もり", "マルチメディア", "ミクロチップ", "ムーアの法則", "メモリ", "モジュール"],
    や: ["やま", "ゆき", "ようじ", "ヤフー", "ユーチューブ", "ヨーグルト", "ヤクザ", "ユニコード", "ヨークシャー", "ユーザビリティ"],
    ら: ["らいおん", "りす", "るすばん", "れい", "ろうそく", "ラップトップ", "リンク", "ルーター", "レジストリ", "ロジックボード"],
    わ: ["わたあめ", "ワープロ", "ウェブ", "ヱヴァンゲリヲン", "ヲタク", "ワイヤレス", "ウィキ", "ヱンタープライズ", "ヲーケストラ", "ワードプロセッサ"]
};

let currentWords = [];
let currentIndex = 0;

const sentences = [
    "ああ言えばこう言う (ああいえばこういう)",
    "秋の日は釣瓶落とし (あきのひはつるべおとし)",
    "麻の中の蓬 (あさのなかのよもぎ)",
    "頭の上の蝿も追えぬ（あたまのうえのはえもおえぬ)",
    "羹に懲りて膾を吹く（あつものにこりてなますをふく）"

    // 他の文章も追加可能
];

function displayText() {
    if (currentIndex < currentWords.length) {
        document.getElementById("textArea").innerText = currentWords[currentIndex];
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
    if (currentIndex > 1) {
        currentIndex--;
        document.getElementById("textArea").innerText = currentWords[currentIndex - 1];
    }
});

document.querySelectorAll('.button[data-line]').forEach(button => {
    button.addEventListener('click', function() {
        let line = this.getAttribute('data-line');
        currentWords = lineWords[line];
        currentIndex = 0;
        displayText();
    });
});

document.getElementById("greetingButton").addEventListener("click", function() {
    currentWords = sentences;  // sentences が挨拶文を保持する配列と仮定
    currentIndex = 0;
    displayText();
});

document.getElementById("quoteButton").addEventListener("click", function() {
    currentWords = sentences;  // sentences が名言を保持する配列と仮定
    currentIndex = 0;
    displayText();
});