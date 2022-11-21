/** メニューボタン生成関数*/
function onOpen() {
  var ui = SpreadsheetApp.getUi()

  //メニュー名を決定
  var menu = ui.createMenu("メニュー");

  //メニューに実行ボタン名と関数を割り当て: その1
  menu.addItem("test","hello");

  //スプレッドシートに反映
  menu.addToUi();
}

function test(){
  print(hello)
}
