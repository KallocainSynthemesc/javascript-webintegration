<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - createTextNode</div>
    <div class="content">
      <p>
        Nous avons vu comment créer et ajouter un nouvel élément au DOM. Nous
        allons maintenant le remplir de texte.
      </p>
      <MonacoEditor
        code='const app &equals; document&period;getElementById&lpar;"app"&rpar;&semi;&NewLine;let paragraph &equals; document&period;createElement&lpar;"p"&rpar;&semi;&NewLine;app&period;appendChild&lpar;paragraph&rpar;&semi;&NewLine;const text &equals; document&period;createTextNode&lpar;&NewLine;  "Avec le n&oelig;ud create text&comma; nous pouvons enfin cr&eacute;er un paragraphe contenant du texte&period;"&NewLine;&rpar;&semi;&NewLine;paragraph&period;appendChild&lpar;text&rpar;&semi;&NewLine;&NewLine;&NewLine;&NewLine;'
        html='&lt;&excl;DOCTYPE html&gt;&NewLine;&lt;html&gt;&NewLine;&NewLine;&lt;head&gt;&NewLine;&Tab;&lt;title&gt;Parcel Sandbox&lt;&sol;title&gt;&NewLine;&Tab;&lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;&lt;&sol;head&gt;&NewLine;&NewLine;&lt;body&gt;&NewLine;&Tab;&lt;div id&equals;"app"&gt;&lt;&sol;div&gt;&NewLine;&NewLine;&Tab;&lt;script src&equals;"src&sol;index&period;js"&gt;&NewLine;&Tab;&lt;&sol;script&gt;&NewLine;&lt;&sol;body&gt;&NewLine;&NewLine;&lt;&sol;html&gt;'
        css=""
        jsindex="75"
        cssindex="76"
        htmlindex="77"
      />
    </div>
  </div>
</template>

<style scoped></style>
