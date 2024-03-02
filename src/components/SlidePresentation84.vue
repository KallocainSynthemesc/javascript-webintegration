<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - Dynamic styling</div>
    <div class="content">
      <p>
        Il y a un sélecteur de couleur et un écouteur qui est appelé lorsque la
        couleur change. Pouvez-vous mettre à jour la couleur de fond du corps
        avec la couleur choisie ?
      </p>
      <MonacoEditor
        code='const color &equals; document&period;getElementById&lpar;"color"&rpar;&semi;&NewLine;&NewLine;color&period;addEventListener&lpar;"change"&comma; changeBackgroundColor&rpar;&semi;&NewLine;&NewLine;function changeBackgroundColor&lpar;&rpar; &lbrace;&NewLine;  const currentColor &equals; color&period;value&semi; &sol;&sol;La propri&eacute;t&eacute; value permet d&apos;acc&eacute;der&NewLine;  &sol;&sol;&agrave; la couleur s&eacute;lectionn&eacute;e actuelle&period;&NewLine;&NewLine;  &sol;&sol;mettez la logique ici pour changer la couleur de fond&NewLine;&rcub;&NewLine;'
        html='&lt;&excl;DOCTYPE html&gt;&NewLine;&lt;html&gt;&NewLine;  &lt;head&gt;&NewLine;    &lt;title&gt;Kilian Sandbox&lt;&sol;title&gt;&NewLine;    &lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;  &lt;&sol;head&gt;&NewLine;&NewLine;  &lt;body&gt;&NewLine;    &lt;div id&equals;"app"&gt;&NewLine;      &lt;input type&equals;"color" id&equals;"color" name&equals;"head" value&equals;"&num;e66465" &sol;&gt;&NewLine;      &lt;label for&equals;"head"&gt;Color&lt;&sol;label&gt;&NewLine;    &lt;&sol;div&gt;&NewLine;&NewLine;    &lt;script src&equals;"src&sol;index&period;js"&gt;&lt;&sol;script&gt;&NewLine;  &lt;&sol;body&gt;&NewLine;&lt;&sol;html&gt;&NewLine;'
        css=""
        jsindex="108"
        cssindex="109"
        htmlindex="110"
      />
    </div>
  </div>
</template>

<style scoped></style>
