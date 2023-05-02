# ボタンの設定

各種ボタンの設定やアニーメーションを作成する方法についてこのページで説明します

## 編集ウィンドウを開く

「編集ウィンドウを開く」ボタンを押すと各ボタンの設定を編集するウィンドウが開きます。

![edit_window](@site/static/img/UIsetImg/edit_animation.png)

メニュー以下の４種類です。

- MainMenu
  - アバター**正面**のメニュー
  - 最初から表示されるメニューです

- Sub1Menu
  - アバターから見て**上**のメニュー

- Sub2Menu
  - アバターから見て**右**のメニュー
  - **このメニューだけいずれか一つしかボタンがONにならないようになっています(Int型)**

- Sub3Menu
  - アバターから見て**左**のメニュー

![edit_window](@site/static/img/UIsetImg/menu_list.png)


## ボタンの設定

MainMenuのMainObject1ボタンに設定する場合を例に説明します。

![edit_menu](@site/static/img/UIsetImg/menu_introduction.png)

- デフォルトONボタン
  - チェックを入れると、最初からボタンONに設定したアニメーションが再生されます
  - チェックを入れない場合は、最初はボタンOFFに設定したアニーションが再生されます

- 他のユーザーからの操作を許可
  - チェックを外すと自分以外の人は触れないようにできます

- アバター変更時にリセットさせない
  - 別のアバターに変更してから更にアバターを戻したときに、ボタンのONOFF状態が引き継がれた状態になります

- アニメーション関連
  - ON
    - ここに設定したアニメーションがボタンをONにしたときに再生されます
  - OFF
    - ここに設定したアニメーションがボタンをOFFにしたときに再生されます

- テクスチャ
  - ボタンに設定するテクスチャです
  - UIset/src/material/texture/Object にテンプレートをいくつか配置しています
  - 自分で作成したい方のためにPSDファイルも配布していますので、以下のリンクから詳細の説明ページに遷移できます
  - [ボタンのテクスチャ作成](/docs/UIset/texture_edit)

![texture_setting](@site/static/img/UIsetImg/drag_texture.png)

- アニメーション作成ボタン
  - 左のboxにオブジェクトをセットしたあと「アニメーション作成ボタン」を押すと、オブジェクトをONOFFするアニメを自動生成しセットします。
  - 設定したオブジェクトを初期表示ではOFFにしたいときは、デフォルトONのチェックを外した状態で、手動でHierarchyから非表示にしてください

![before](@site/static/img/UIsetImg/create_before.png)

![after](@site/static/img/UIsetImg/create_after.png)


:::info
ボタンは設定しない状態でもアップロードできるため、ある程度設定ができた人は指輪やメニューの位置調整をしてください。
:::
