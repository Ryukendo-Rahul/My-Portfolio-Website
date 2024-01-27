

var tabButtons= document.querySelectorAll(".content_right .btn_box button");
var tabPanels=document.querySelectorAll(".content_right .content_lists");

function showPanel(panelIndex,colorCode){
    tabButtons.forEach(function(node){
        node.computedStyleMap.bacgroundcolor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.bacgroundcolor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.bacgroundcolor="colorCode";

}
showPanel(0,'pink');