tyrano.plugin.kag.tag.frame_show={vital:[],pm:{time:"1000",wait:"true"},start:function(pm){var that=this;var num=0;var cnt_fade=0;$("#vr .vr_frame").each(function(key,el_obj){num++;$.vr.fadeIn(el_obj,{time:pm.time},function(){cnt_fade++;if(num==cnt_fade)if(pm.wait=="true")TYRANO.kag.ftag.nextOrder()})});if(pm.wait=="false")TYRANO.kag.ftag.nextOrder()}};
tyrano.plugin.kag.tag.frame_hide={vital:[],pm:{time:"1000",wait:"true"},start:function(pm){var that=this;var num=0;var cnt_fade=0;$("#vr .vr_frame").each(function(key,el_obj){num++;$.vr.fadeOut(el_obj,{time:pm.time},function(){cnt_fade++;if(num==cnt_fade)if(pm.wait=="true")TYRANO.kag.ftag.nextOrder()})});if(pm.wait=="false")TYRANO.kag.ftag.nextOrder()}};
tyrano.plugin.kag.tag.mask={vital:[],pm:{time:"1000",wait:"true",color:""},start:function(pm){var that=this;var el_mask=$.vr.createElementFromHTML('<a-sphere class="vr_mask" radius=0.3 color="#FFF" position="0 1.6 0" side="double" ></a-sphere>');el_mask.setAttribute("material","alphaTest",0.01);el_mask.setAttribute("opacity",0);if(pm.color!="")el_mask.setAttribute("color",$.convertColor(pm.color));document.querySelector("#vr_scene").appendChild(el_mask);$.vr.fadeIn(el_mask,{time:pm.time},function(e){if(pm.wait==
"true")TYRANO.kag.ftag.nextOrder()});if(pm.wait=="false")TYRANO.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.mask_off={vital:[],pm:{time:"1000",wait:"true"},start:function(pm){var that=this;var el_mask=document.querySelector(".vr_mask");$.vr.fadeOut(el_mask,{time:pm.time},function(e){el_mask.parentNode.removeChild(el_mask);if(pm.wait=="true")TYRANO.kag.ftag.nextOrder()});if(pm.wait=="false")TYRANO.kag.ftag.nextOrder()}};