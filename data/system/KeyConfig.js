var __tyrano_key_config = {

    //キーボード操作 
    "key" : {
    
        "32" : "hidemessage", //Space
        "13" : "next", // Enter
        "91" : "skip", //Command(Mac)  
        "17" : "skip", //Ctrl (Windows)
        "67":function(){ // c ボタン
            //config呼び出し例 コメント化
            /*
            if (TYRANO.kag.tmp.sleep_game != null) {
                return false;
            }
            TYRANO.kag.ftag.startTag("sleepgame", {storage:"config.ks"});
            */
        }
        
    },

    //マウス操作
    "mouse" : {
        "right" : "hidemessage", //右クリックの動作
        "center": "menu", //センターボタンをクリック
        "wheel_up" : "backlog", // ホイールをアップした時の動作
        "wheel_down" : "next" //ホイールをダウンした時の動作
    },
    
    //ジェスチャー
    "gesture" : {
        "swipe_up_1" : {
            "action" : "backlog"
        },
        "swipe_left_1" : {
            "action" : "auto"
        },
        "swipe_right_1" : {
            "action" : "menu"
        },
        "swipe_down_1" : {
            "action" : "load"
        },
        
        "hold" : {
            "action" : "skip",
        }
    }

}; 