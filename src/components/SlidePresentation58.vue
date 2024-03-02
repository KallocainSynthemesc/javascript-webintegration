<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - document.write</div>
    <div class="content">
      <p>
        <span style="color: red">Ne pas utiliser.</span> Je le montre juste pour
        qu'on voit pourquoi ce n'est pas bon.
      </p>
      <MonacoEditor
        code='document&period;write&lpar;"texte ins&eacute;r&eacute;"&rpar;&semi;&NewLine;&NewLine;'
        html='&lt;&excl;DOCTYPE html&gt;&NewLine;&lt;html&gt;&NewLine;  &lt;head&gt;&NewLine;    &lt;title&gt;Parcel Sandbox&lt;&sol;title&gt;&NewLine;    &lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;  &lt;&sol;head&gt;&NewLine;&NewLine;  &lt;body&gt;&NewLine;    &lt;p&gt;exemple de texte&lt;&sol;p&gt;&NewLine;    &lt;script src&equals;"src&sol;index&period;js"&gt;&lt;&sol;script&gt;&NewLine;  &lt;&sol;body&gt;&NewLine;&lt;&sol;html&gt;&NewLine;&NewLine;&NewLine;'
        css=""
        jsindex="66"
        cssindex="67"
        htmlindex="68"
      />
    </div>
  </div>
</template>

<style scoped></style>
