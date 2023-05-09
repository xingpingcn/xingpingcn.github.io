$(function(){
    var pic = document.getElementsByClassName('fancybox');
    var pic_with_a = Array.prototype.filter.call(pic, function(pic){
        return pic.nodeName === 'A';
    });
    for (let index = 0; index < pic_with_a.length; index++) {

        console.log(pic_with_a.length);
        pic_with_a[index].setAttribute("style", "background-color: rgb(204, 204, 204); padding-bottom: 50%;");
        pic_with_a[index].parentNode.setAttribute("style", "position: relative; width: 100%;");
    }

});
   


