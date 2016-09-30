console.log("Highlight Zhihu started.");

var hltAddcomment = function(){
  try {
      if($(".focusin").length == 0){
        $("[name='addcomment']").attr("style","");
        $(".meta-item.toggle-comment.js-toggleCommentBox").attr("style","");
      }else {
        if($(".focusin a[name='addcomment']").length == 0){
          $($(".focusin a")[1]).attr("style","color:#ffffff;border-style:solid;border-color:rgb(5, 93, 181);background-color:rgb(5, 93, 181);");
        }
        $(".focusin a[name='addcomment']").attr("style","color:#ffffff;border-style:solid;border-color:rgb(5, 93, 181);background-color:rgb(5, 93, 181);");
      }
  } catch (e) {}
}
hltAddcomment()
setInterval(function(){

  hltAddcomment()
},500)
