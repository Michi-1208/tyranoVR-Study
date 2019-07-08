/*  
VR-script サンプル
ノベルゲーム風　VRアプリケーション  
*/


;アセットの読み込み

[image_new id="akane" storage="chara/akane.png"]
[image_new id="yamato" storage="chara/yamato.png"]

[image_new id="bg_beach" storage="bg/beach.jpg"]


;背景を表示
[image id="bg_beach" x=0 y=0 z=14 scale=3 time=1000 ]
[wait time=2000 ]

手を下に向けてクリックすると進みます。[p]
ようこそ。tyranoVRのデモへ[p]
このデモをプレイすると[p]
tyranoVRを簡単に体験することができます。[p]
では[p]
キャラクターに登場してもらいましょうか[p]

[image id="akane" x="-2" y="-3.24" z="6" time=2000 ]

あかねちゃん[p] 

[image id="yamato" x="2" y="-3.24" z="6" time=2000 ]

やまとくん[p]

アニメーションでVR空間を移動します。[p]

[anim name="akane" z=10 ]
[anim name="yamato" z=8 ]


[anim name="akane" x=2 wait=false ]
[anim name="yamato" x=-2 wait=true ]


[anim name="akane" z=6 wait=false]
[anim name="yamato" z=6 ]

複雑なアニメーションも簡単につくれます[p]

背景に全天球イメージを配置します[p]

[image_new id="beach360" storage="bg360/sphere_beach.jpg"]
[image360 @image360 id="beach360" time=10]

[free name="bg_beach" time=1000]

フレームを解除します[p]

[frame_hide time=1000]

360度見渡すことができますね[p]

フレームを再表示します[p]

[frame_show time=1000]

次のデモへ移動します。[p]
@freeall

@jump storage="demo2.ks"

