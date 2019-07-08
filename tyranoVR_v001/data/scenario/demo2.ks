;クリックで３Dマップ表示のサンプル
続いては、[p]
ボタンイベントと[p]
全天球写真の組み合わせです[p]
終了するをクリックすると、次のデモに移ります[p]

;リソースの読み出し
[image_new id="minato" storage="bg360/button_minato.jpg"]
[image_new id="beach" storage="bg360/button_beach.jpg"]
[image_new id="tunnel" storage="bg360/button_tunnel.jpg"]
[image_new id="park" storage="bg360/button_park.jpg"]
[image_new id="exit" storage="bg360/button_exit.png"]


[image_new id="minato360" storage="bg360/sphere_minato.jpg"]
[image_new id="beach360" storage="bg360/sphere_beach.jpg"]
[image_new id="tunnel360" storage="bg360/sphere_tunnel.jpg"]
[image_new id="park360" storage="bg360/sphere_park.jpg"]


[audio_new id="move" folder="sound" storage="move.mp3"]
[audio_new id="landing" folder="sound" storage="landing.mp3"]

[audio_new id="beach_audio" storage="beach.mp3"]
[audio_new id="minato_audio" storage="minato.mp3"]
[audio_new id="tunnel_audio" storage="tunnel.mp3"]
[audio_new id="park_audio" storage="park.mp3"]


;;;;;リソース読み出し完了

[frame_hide time=10]

*show_button
[free name="image360" ]
[free name="model"]

;使用する素材を読み込む
[button name="select_button" clickse="move" id="exit" target=*exit x=4 y=4 z=6 yr=-30 xr=30 zr=0 time=100 wait=false scale=0.3]

[button name="select_button" clickse="move" id="minato" target=*minato x=2 y=2 z=5 time=100 wait=false ]
[button name="select_button" clickse="move" id="beach" target=*beach x=-2 y=2 z=5 time=100 wait=false ]
[button name="select_button" clickse="move" id="tunnel" target=*tunnel x=2 y=-1 z=5 time=100 wait=false ]
[button name="select_button" clickse="move" id="park" target=*park x=-2 y=-1 z=5 time=100 wait=true ]

[s]

*minato
[free name="select_button" ]
[playbgm id="minato_audio" name="audio360" ]
[image360 name="image360" id="minato360" time=1000]

みなとみらいです[p]
[p]
@jump target="select_common"

@jump target="select_common"

*beach
[free name="select_button" ]
[image360 name="image360" id="beach360" time=1000]
[playbgm id="beach_audio" name="audio360" ]

ビーチです[p]
[p]
@jump target="select_common"

*tunnel
[free name="select_button" ]
[image360 name="image360" id="tunnel360" time=1000 yr=50 ]
[playbgm id="tunnel_audio" name="audio360" ]

トンネルです[p]
[p]
@jump target="select_common"

*park
[free name="select_button" ]
[image360 name="image360" id="park360" time=1000]
[playbgm id="park_audio" name="audio360" ]

公園です[p]
[p]

*select_common

[stopbgm name="audio360" ]

@jump target="show_button"

*exit

[freeall]

@jump storage="demo3.ks"


[s]
