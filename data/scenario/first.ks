;一番最初に呼び出されるファイル

[title name="tyranoVRデモ"]
[image_new id="ready" storage="tyrano_vr_ready.png"]
[image id="ready" y=1.6 z=4]

[p]
[freeall]

[wait time=2000 ]

[sky color="0xEEEEEE"]

[image_new id="strikeworks_logo" storage="etc/logo_strikeworks.png"]
[image_new id="tyrano_logo" storage="etc/logo_vr.png"]
[audio_new id="don" folder="sound" storage="don.mp3"]


[playbgm id="don" loop=false]
[image id="strikeworks_logo" x=0 y=1.6 z=9 scale=1 time=1000 wait=true ]
[wait time=3000]
[free name="strikeworks_logo" time=1000 wait=true]
[wait time=1000]

[playbgm id="don" loop=false]
[image id="tyrano_logo" x=0 y=1.6 z=8 scale=1 time=1000 wait=true ]
[wait time=3000]
[free name="tyrano_logo" time=1000 wait=false]

[wait time=2000]


@jump storage="select.ks"


[s]


