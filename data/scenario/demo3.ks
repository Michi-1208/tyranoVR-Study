
サウンドのテスト[p]

;効果音の定義
[audio_new id="myse" folder="sound" storage="yoroshiku.mp3"]
[audio_new id="hover" folder="sound" storage="hover.mp3"]


正面の５ｍ離れた位置で鳴ります[p]
[playse id="myse" x=0 y=1.6 z=5 ]

右の耳元で鳴ります。[p]
[playse id="myse" x=1 y=1.6 z=-1 ]

左の耳元で鳴ります。[p]
[playse id="myse" x=-1 y=1.6 z=-1 ]

左前方から、右前方に効果音が移動します。[p]
[playse id="hover" x="-6" y="1.6" z="2" loop=true ]
[anim name="hover" x="6" time=5000 ]

移動完了[p]
[stopse name="hover" ]

@jump storage="demo4.ks"


