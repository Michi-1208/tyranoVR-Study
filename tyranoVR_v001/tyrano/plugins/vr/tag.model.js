tyrano.plugin.kag.tag.model_new={vital:["id","storage"],pm:{id:"",folder:"",storage:""},start:function(pm){var that=this;var j_assets=$("#vr_assets");if(pm.folder!="")folder=pm.folder;else folder="model";var storage_url="./data/"+folder+"/"+pm.storage;$.vr.exists(storage_url);var j_model=$("<a-asset-item />");j_model.attr("id",pm.id);j_model.attr("src",storage_url);j_assets.append(j_model);TYRANO.kag.ftag.nextOrder()}};
tyrano.plugin.kag.tag.model={vital:["id"],pm:{id:"",name:"",layer:"space",x:"0",y:"0",z:"0",xr:"0",yr:"0",zr:"0",wait:"true",scale:"1"},start:function(pm){var that=this;var el_model=document.createElement("a-entity");el_model.setAttribute("gltf-model","#"+pm.id);el_model.setAttribute("animation-mixer","");el_model.setAttribute("position",{x:pm.x,y:pm.y,z:pm.z});el_model.setAttribute("rotation",{x:pm.xr,y:pm.yr,z:pm.zr});el_model.setAttribute("scale",{x:pm.scale,y:pm.scale,z:pm.scale});if(pm.name==
"")pm.name=pm.id;$.vr.setName(el_model,pm.name);$.vr.setName(el_model,"3d_model");el_model.addEventListener("model-loaded",function(){if(pm.wait=="true")TYRANO.kag.ftag.nextOrder()});if(pm.layer=="space")document.querySelector("#vr_scene").appendChild(el_model);else document.querySelector("#vr_camera").appendChild(el_model);if(pm.wait=="false")TYRANO.kag.ftag.nextOrder()}};
