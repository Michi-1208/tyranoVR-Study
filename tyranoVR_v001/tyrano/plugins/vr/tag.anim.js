tyrano.plugin.kag.tag.anim={vital:["name"],pm:{name:"",method:"position",x:"",y:"",z:"",relative:"false",direction:"normal",repeat:"0",time:"2000",effect:"ease-in-out",wait:"true"},start:function(pm){var that=this;var j_target_obj=$("."+pm.name);var num_el=j_target_obj.length;var cnt_anim=0;j_target_obj.each(function(index,el_obj){var anim_obj=document.createElement("a-animation");var to_pos="";if(pm.method=="position"||pm.method=="rotation"){var _pos=el_obj.getAttribute(pm.method);if(pm.relative==
"false"){if(pm.x=="")pm.x=_pos["x"];if(pm.y=="")pm.y=_pos["y"];if(pm.z=="")pm.z=_pos["z"]}else{if(pm.x!="")pm.x=parseFloat(pm.x)+parseFloat(_pos["x"]);else pm.x=_pos["x"];if(pm.y!="")pm.y=parseFloat(pm.y)+parseFloat(_pos["y"]);else pm.y=_pos["y"];if(pm.z!="")pm.z=parseFloat(pm.z)+parseFloat(_pos["z"]);else pm.z=_pos["z"]}to_pos=pm.x+" "+pm.y+" "+pm.z;anim_obj.setAttribute("attribute",pm.method);anim_obj.setAttribute("to",to_pos)}if(pm.effect!=="")anim_obj.setAttribute("easing",pm.effect);anim_obj.setAttribute("direction",
pm.direction);anim_obj.setAttribute("dur",pm.time);anim_obj.setAttribute("repeat",pm.repeat);anim_obj.addEventListener("animationend",function(e){$(anim_obj).remove();cnt_anim++;if(num_el==cnt_anim)if(pm.wait=="true")TYRANO.kag.ftag.nextOrder()});el_obj.appendChild(anim_obj)});if(pm.wait!="true")TYRANO.kag.ftag.nextOrder()}};
