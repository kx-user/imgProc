document.addEventListener("DOMContentLoaded", function() {
  // codeクラスがクリックされたときの処理
  document.querySelectorAll('.code').forEach(function(codeElement) {
      codeElement.addEventListener('click', function(event) {
          // クリックされた要素の中にあるpタグの文字列を取得
          const paragraphs = event.currentTarget.getElementsByTagName('p');
          let textMain = "";
          for (const pTag of paragraphs) {
              textMain += pTag.textContent + "\n";
          }

          // textMainをクリップボードにコピーする
          const textArea = document.createElement('textarea');
          textArea.value = textMain;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          alert("コピーしました: \n" + textMain);
      });
  });
});