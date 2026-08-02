// JavaScript or jQuery code to change the background images
$(document).ready(function() {
    var titleContainer = $(".title-container");
    var imageCount = 5; // Number of images to cycle through
    var animationDuration = 20000; // Duration of the animation in milliseconds
  
    function changeBackgroundImage() {
      for (var i = 1; i <= imageCount; i++) {
        var dataAttr = "data-image-" + i;
        var imageUrl = titleContainer.attr(dataAttr);
        if (imageUrl) {
          titleContainer.css("background-image", "url('" + imageUrl + "')");
          break;
        }
      }
    }
  
    setInterval(changeBackgroundImage, animationDuration);
  });