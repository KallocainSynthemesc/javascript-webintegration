<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - attributes</div>
    <div class="content">
      <p>
        Les nœuds d'attributs sont contenus par un nœud d'élément. Cependant,
        ils ne sont pas considérés comme des nœuds enfants et ne peuvent pas
        être reçus à l'aide de la propriété childNodes.
      </p>
      <MonacoEditor
        code='let paragraph &equals; document&period;body&period;getElementsByTagName&lpar;"p"&rpar;&lbrack;0&rsqb;&semi;&NewLine;let attributes &equals; paragraph&period;attributes&semi;&NewLine;for &lpar;let attribut of attributes&rpar; &lbrace;&NewLine;  &sol;&sol;Une fois que nous avons le node&comma;&NewLine;  &sol;&sol;nous pouvons &agrave; nouveau appeler nodeValue&NewLine;  &sol;&sol;pour obtenir le contenu du node&period;&NewLine;  console&period;log&lpar;attribut&period;nodeValue&rpar;&semi;&NewLine;&rcub;&NewLine;'
        html='&lt;&excl;DOCTYPE html&gt;&NewLine;&lt;html&gt;&NewLine;  &lt;head&gt;&NewLine;    &lt;title&gt;Kilian Sandbox&lt;&sol;title&gt;&NewLine;    &lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;  &lt;&sol;head&gt;&NewLine;&NewLine;  &lt;body&gt;&NewLine;    &lt;p title&equals;"du titre" id&equals;"paragraph"&gt;some content&lt;&sol;p&gt;&NewLine;&NewLine;    &lt;script src&equals;"src&sol;index&period;js"&gt;&lt;&sol;script&gt;&NewLine;  &lt;&sol;body&gt;&NewLine;&lt;&sol;html&gt;&NewLine;'
        css=""
        jsindex="57"
        cssindex="58"
        htmlindex="59"
      />
    </div>
  </div>
</template>

<style scoped></style>
