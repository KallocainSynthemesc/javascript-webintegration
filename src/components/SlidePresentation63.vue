<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - appendChild</div>
    <div class="content">
      <p>
        La façon la plus simple d'insérer un nœud nouvellement créé dans
        l'arborescence d'un document est d'en faire un enfant d'un nœud existant
        dans ce document.
      </p>
      <MonacoEditor
        code='const app &equals; document&period;getElementById&lpar;"app"&rpar;&semi;&NewLine;let paragraph &equals; document&period;createElement&lpar;"p"&rpar;&semi;&NewLine;app&period;appendChild&lpar;paragraph&rpar;&semi;&NewLine;console&period;log&lpar;app&rpar;&semi; &sol;&sol;Nous voyons que le paragraphe est vide&comma;&NewLine;&sol;&sol;mais il est maintenant &agrave; l&apos;int&eacute;rieur de notre div&period;&NewLine;&NewLine;&NewLine;&NewLine;'
        html='&lt;&excl;DOCTYPE html&gt;&NewLine;&lt;html&gt;&NewLine;  &lt;head&gt;&NewLine;    &lt;title&gt;Parcel Sandbox&lt;&sol;title&gt;&NewLine;    &lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;  &lt;&sol;head&gt;&NewLine;&NewLine;  &lt;body&gt;&NewLine;    &lt;div id&equals;"app"&gt;&lt;&sol;div&gt;&NewLine;&NewLine;    &lt;script src&equals;"src&sol;index&period;js"&gt;&lt;&sol;script&gt;&NewLine;  &lt;&sol;body&gt;&NewLine;&lt;&sol;html&gt;&NewLine;&NewLine;&NewLine;&NewLine;'
        css=""
        jsindex="72"
        cssindex="73"
        htmlindex="74"
      />
    </div>
  </div>
</template>

<style scoped></style>
