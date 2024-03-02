<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">Image Galery</div>
    <div class="content">
      <p>
        Pouvez-vous modifier la fonction showImage pour qu'elle change la grande
        image affichée lorsque je clique sur une autre image ? Une fois que
        c'est fait, pouvez-vous remplacer onclick dans le html par
        addEventListener dans le javascript ?
      </p>
      <MonacoEditor
        code='window&period;showImage &equals; function &lpar;img&rpar; &lbrace;&NewLine;  var expandImg &equals; document&period;getElementById&lpar;"expandedImg"&rpar;&semi;&NewLine;  &sol;&sol;vous pouvez soit travailler avec getAttribute et setAttribute&comma;&NewLine;  &sol;&sol;soit modifier directement l&apos;attribut puisque src est mutable&period;&NewLine;&rcub;&semi;&NewLine;'
        html='&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Kilian Sandbox&lt;/title&gt;
    &lt;meta charset="UTF-8" /&gt;
    &lt;link rel="stylesheet" href="./src/styles.css" /&gt;
  &lt;/head&gt;

  &lt;body&gt;
    &lt;div style="text-align: center;"&gt;
      &lt;h2&gt;Galerie d&apos;images &agrave; onglets&lt;/h2&gt;
      &lt;p&gt;Cliquez sur les images ci-dessous :&lt;/p&gt;
    &lt;/div&gt;

    &lt;!-- Les quatre images --&gt;
    &lt;div class="row"&gt;
      &lt;div class="column"&gt;
        &lt;img
          src="https://picsum.photos/id/619/600/800"
          alt="Nature"
          style="width: 100%;"
          onclick="showImage(this)"
        /&gt;
      &lt;/div&gt;
      &lt;div class="column"&gt;
        &lt;img
          src="https://picsum.photos/id/7/600/800"
          alt="Snow"
          style="width: 100%;"
          onclick="showImage(this)"
        /&gt;
      &lt;/div&gt;
      &lt;div class="column"&gt;
        &lt;img
          src="https://picsum.photos/id/237/600/800"
          alt="Mountains"
          style="width: 100%;"
          onclick="showImage(this)"
        /&gt;
      &lt;/div&gt;
      &lt;div class="column"&gt;
        &lt;img
          src="https://picsum.photos/id/69/600/800"
          alt="Lights"
          style="width: 100%;"
          onclick="showImage(this)"
        /&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="container"&gt;
      &lt;img
        src="https://picsum.photos/id/619/600/800"
        id="expandedImg"
        style="width: 100%;"
      /&gt;
    &lt;/div&gt;
    &lt;script src="src/index.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
'
        css='&ast; &lbrace;&NewLine;  box-sizing&colon; border-box&semi;&NewLine;&rcub;&NewLine;&NewLine;body &lbrace;&NewLine;  margin&colon; 0&semi;&NewLine;  font-family&colon; Arial&semi;&NewLine;&rcub;&NewLine;&NewLine;&sol;&ast; The grid&colon; Four equal columns that floats next to each other &ast;&sol;&NewLine;&period;column &lbrace;&NewLine;  float&colon; left&semi;&NewLine;  width&colon; 25&percnt;&semi;&NewLine;  padding&colon; 10px&semi;&NewLine;&rcub;&NewLine;&NewLine;&sol;&ast; Style the images inside the grid &ast;&sol;&NewLine;&period;column img &lbrace;&NewLine;  opacity&colon; 0&period;8&semi;&NewLine;  cursor&colon; pointer&semi;&NewLine;&rcub;&NewLine;&NewLine;&period;column img&colon;hover &lbrace;&NewLine;  opacity&colon; 1&semi;&NewLine;&rcub;&NewLine;&NewLine;&sol;&ast; Clear floats after the columns &ast;&sol;&NewLine;&period;row&colon;after &lbrace;&NewLine;  content&colon; ""&semi;&NewLine;  display&colon; table&semi;&NewLine;  clear&colon; both&semi;&NewLine;&rcub;&NewLine;&NewLine;&sol;&ast; The expanding image container &ast;&sol;&NewLine;&period;container &lbrace;&NewLine;  position&colon; relative&semi;&NewLine;  display&colon; block&semi;&NewLine;&rcub;&NewLine;&NewLine;&sol;&ast; Expanding image text &ast;&sol;&NewLine;&num;imgtext &lbrace;&NewLine;  position&colon; absolute&semi;&NewLine;  bottom&colon; 15px&semi;&NewLine;  left&colon; 15px&semi;&NewLine;  color&colon; white&semi;&NewLine;  font-size&colon; 20px&semi;&NewLine;&rcub;&NewLine;&NewLine;&sol;&ast; Closable button inside the expanded image &ast;&sol;&NewLine;&period;closebtn &lbrace;&NewLine;  position&colon; absolute&semi;&NewLine;  top&colon; 10px&semi;&NewLine;  right&colon; 15px&semi;&NewLine;  color&colon; white&semi;&NewLine;  font-size&colon; 35px&semi;&NewLine;  cursor&colon; pointer&semi;&NewLine;&rcub;&NewLine;&NewLine;'
        jsindex="42"
        cssindex="43"
        htmlindex="44"
      />
    </div>
  </div>
</template>

<style scoped></style>
