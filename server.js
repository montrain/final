var express = require("express");
var server = express();


server.get("/", (req,res)=>{
    res.send("Hello world!");
})

server.get("/about", (req,res)=>{
    res.send("My first NodeJS server!");
})

server.listen(8080)

<<<<<<< HEAD
=======


// test scroll effect code
<script>
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".portfolio-container", {
        x: "-500px", // 向左移動的距離
        scrollTrigger: {
            trigger: ".portfolio", // 當滾動到這個區塊時觸發
            start: "top bottom",    // 當作品集頂部進入螢幕底部時開始
            end: "bottom top",      // 當作品集底部離開螢幕頂部時結束
            scrub: 1                // 讓動畫跟隨滑鼠滾動（1秒的緩衝效果）
        }
    });
 </script>
>>>>>>> 0f7eb968d292fe70287a5462d5239070b8d65a15
