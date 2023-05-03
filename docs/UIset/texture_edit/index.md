# ボタンの画像作成


## テクスチャのダウンロード

UIsetのboothページにPSDファイルのダウンロードボタンを設置しています。

ここからPSDファイルをダウンロードして、ボタン用のテクスチャを作成してください。

- <a href='https://hako-iri.booth.pm/items/4381102'>ContactUIset</a>

![psdfile](@site/static/img/UIsetImg/booth_texture.png)

## テクスチャの作成

clipStudioなどの画像編集ソフトでPSDファイルを開きます。

フォントや文字色、サイズの設定は画像を参考にしてください。

:::tip
レイヤー全体に色の反転効果をつけているため、文字色を白くしたい場合は黒を指定してください。
:::

`フォント : Agency FB`

`効果 : Bold`

`文字色 : #000`

`サイズ : 100`

![psdfile](@site/static/img/UIsetImg/font.png)

下の画像のようにボタンに表示したいテキストを入力します。

![psdfile](@site/static/img/UIsetImg/test_text.png)


透過pngファイルで出力して`Asset/UIset/src/material/texture/object/`に保存してください。

![psdfile](@site/static/img/UIsetImg/texture_place.png)


