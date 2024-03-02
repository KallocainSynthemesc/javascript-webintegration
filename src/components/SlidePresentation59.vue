<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - innerHtml</div>
    <div class="content">
      <p>
        La propriété innerHTML définit ou renvoie le contenu HTML (HTML interne)
        d'un élément.
      </p>
      <MonacoEditor
        code='const bodyHTML &equals; document&period;body&period;innerHTML&semi;&NewLine;const placeholder &equals; document&period;getElementById&lpar;"placeholder"&rpar;&semi;&NewLine;const placeholder2 &equals; document&period;getElementById&lpar;"placeholder2"&rpar;&semi;&NewLine;placeholder&period;textContent &equals; bodyHTML&semi;&NewLine;placeholder2&period;innerHTML &equals;&NewLine;  "&lt;i&gt;J&apos;ins&egrave;re du html pur &agrave; partir du &lt;b&gt;javascript&lt;&sol;b&gt; dans mon document&period;&lt;&sol;i&gt;"&semi;&NewLine;&NewLine;&NewLine;'
        html='&lt;&excl;DOCTYPE html&gt;&NewLine;&lt;html&gt;&NewLine;  &lt;head&gt;&NewLine;    &lt;title&gt;Parcel Sandbox&lt;&sol;title&gt;&NewLine;    &lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;  &lt;&sol;head&gt;&NewLine;&NewLine;  &lt;body&gt;&NewLine;    &lt;div id&equals;"app"&gt;&NewLine;      &lt;p&gt;&NewLine;        Utiliser le DOM normalis&eacute;&comma; c&apos;est comme utiliser un scalpel&period; Utiliser&NewLine;        innerHTML&comma; c&apos;est comme utiliser un marteau de forgeron&period;&NewLine;      &lt;&sol;p&gt;&NewLine;      &lt;p id&equals;"placeholder"&gt;&lt;&sol;p&gt;&NewLine;      &lt;span id&equals;"placeholder2"&gt;&lt;&sol;span&gt;&NewLine;    &lt;&sol;div&gt;&NewLine;&NewLine;    &lt;script src&equals;"src&sol;index&period;js"&gt;&lt;&sol;script&gt;&NewLine;  &lt;&sol;body&gt;&NewLine;&lt;&sol;html&gt;&NewLine;&NewLine;&NewLine;&NewLine;'
        css=""
        jsindex="69"
        cssindex="70"
        htmlindex="71"
      />
    </div>
  </div>
</template>

<style scoped></style>
