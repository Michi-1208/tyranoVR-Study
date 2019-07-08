
[frame_hide time=1000 ]

;視線によるイベント発火テスト
[sky color="0x000000" ]

[image_new id="akane" storage="chara/akane.png"]
[image_new id="yamato" storage="chara/yamato.png"]


視線によるイベント発火サンプルです[p]
２人のうち、どちらかを見つめてください[p]

;視線を表示
[button trigger="eye" name="button" id="akane" x="-6" y="-3.24" z="14" time=100 wait="false" target="akane"  ]
[button trigger="eye" name="button" id="yamato" x="6" y="-3.24" z="14" time=100 wait="true" target="yamato" ]
[eye visible=true ]
[s]


;リソースの読み出し

*akane
[free name="button"]
あかねが選択されました[p]
@jump target="*common"

*yamato
[free name="button"]
やまとが選択されました[p]

*common

サンプル終わり[p]
[s]




