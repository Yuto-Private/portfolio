export default {
  data: {
    "particles":{
       "number":{
        "value": 1, //シェイプの数
        "density":{
          "enable": true, //シェイプの密集度を変更するか否か
          "value_area": 10 //シェイプの密集度
        }
      },
      "shape":{
        "type":"circle" //シェイプの形（circle:丸、edge:四角、triangle:三角、polygon:多角形、star:星型、image:画像）
      },
      "color":{
        "value":"#ffffff" //シェイプの色
      },
      "opacity":{
        "value": 0.5 //シェイプの透明度
      },
      "size":{
        "value": 1, //シェイプの大きさ
        "random": true, //シェイプの大きさをランダムにするか否か
        "anim":{
          "enable": false, //シェイプの大きさをアニメーションさせるか否か
          "speed": 40, //アニメーションのスピード
          "size_min": 0.1, //大きさの最小値
          "sync": false //全てのシェイプを同時にアニメーションさせるか否か
        }
      },
//--------------------

//--線の設定----------
      "line_linked":{
        "enable": true, //線を表示するか否か
        "distance": 200, //線をつなぐシェイプの間隔
        "color": "#ffffff", //線の色
        "opacity": 0.4, //線の透明度
        "width": 1 //線の太さ
      },
//--------------------

//--動きの設定----------
      "move":{
        "speed": 3, //シェイプの動くスピード
        "straight": false, //個々のシェイプの動きを止めるか否か
        "direction": "none", //エリア全体の動き(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-leftより選択)
        "out_mode": "out" //エリア外に出たシェイプの動き(out、bounceより選択)
      }
//--------------------

    },
 
    "interactivity":{
      "detect_on": "canvas",
    },
    "retina_detect": true, //Retina Displayを対応するか否か
    "resize": true //canvasのサイズ変更にわせて拡大縮小するか否か
  }
}