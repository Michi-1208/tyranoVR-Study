tyrano.plugin.kag.tag.vr_message={text:[],pm:{"val":"","color":"0xFFFFFF","next":"true","wait":"true"},start:function(pm){var that=this;var html="";$("#vr_message").remove();var message=$.replaceAll(pm.val,"_"," ");var color=$.convertColor(pm.color);var x=this.kag.stat.msg.x;var y=this.kag.stat.msg.y;var z=parseFloat(this.kag.stat.msg.z)*-1;var time=this.kag.stat.msg.time;var pos=x+" "+y+" "+z;html+='<a-entity id="vr_message" geometry="primitive:plane; width: 5; height:0.15625" position="'+pos+'" material="shader: html;target:#element;transparent:true;" rotation="0 0 0">';
html+='  <div id="element" style="text-align:center;width: 4000px; height: 125px; background: rgba(0,0,0,0.3);" >';html+='     <p style="color:'+color+';font-size:5em;font-weight:bold " >'+message+"</p>";html+="  </div>";html+="</a-entity>";var el_text=$.vr.createElementFromHTML(html);el_text.setAttribute("material","opacity",0);if(this.kag.stat.msg.fix==true)document.querySelector("#vr_camera").appendChild(el_text);else document.querySelector("#vr").appendChild(el_text);var time=this.kag.stat.msg.time;
this.kag.stat.is_adding_text=true;$.vr.fadeIn(el_text,{time:time},function(e){that.kag.stat.is_adding_text=false;if(pm.next=="true")that.kag.ftag.nextOrder()})}};
tyrano.plugin.kag.tag.msgopt={text:[],pm:{"fix":"","x":"","y":"","z":"","time":""},start:function(pm){var that=this;var html="";if(pm.fix!=="")if(pm.fix=="true")this.kag.stat.msg.fix=true;else{this.kag.stat.msg.fix=false;this.kag.stat.msg.x=0;this.kag.stat.msg.y=-0.5;this.kag.stat.msg.z=2}if(pm.x!=="")this.kag.stat.msg.x=parseFloat(pm.x);if(pm.y!=="")this.kag.stat.msg.y=parseFloat(pm.y);if(pm.z!=="")this.kag.stat.msg.z=parseFloat(pm.z)*-1;if(pm.time!=="")this.kag.stat.msg.time=parseFloat(pm.time);
this.kag.ftag.nextOrder()}};
tyrano.plugin.kag.tag.ptext={vital:["text"],pm:{id:"",name:"",text:"",color:"0xFFFFFF",layer:"space",x:"0",y:"0",z:"-2",xr:"0",yr:"0",zr:"0",time:"1000",wait:"true",scale:"1"},start:function(pm){var that=this;var pos=pm.x+" "+pm.y+" "+pm.z;var html="";if(pm.name=="")pm.name="ptext_"+$.random();html+='<a-entity class="vr_ptext" geometry="primitive:plane; width: 5; height:0.15625" position="'+pos+'" material="shader:html;target:#'+pm.name+';transparent:true;" rotation="0 0 0">';html+='  <div id="'+
pm.name+'" style="text-align:center;width: 4000px; height: 125px; background: rgba(0,0,0,0);" >';html+='     <p style="color:'+$.convertColor(pm.color)+';font-size:5em;font-weight:bold " >'+pm.text+"</p>";html+="  </div>";html+="</a-entity>";var el_text=$.vr.createElementFromHTML(html);el_text.setAttribute("rotation",{x:pm.xr,y:pm.yr,z:pm.zr});el_text.setAttribute("opacity",0);$.vr.setName(el_text,pm.name);if(pm.layer=="space")document.querySelector("#vr").appendChild(el_text);else document.querySelector("#vr_camera").appendChild(el_text);
$.vr.fadeIn(el_text,{time:pm.time},function(e){if(pm.wait=="true")TYRANO.kag.ftag.nextOrder()});if(pm.wait=="false")TYRANO.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.exitvr={pm:{},start:function(pm){var that=this;var scene=document.querySelector("a-scene");scene.exitVR();this.kag.ftag.nextOrder()}};
