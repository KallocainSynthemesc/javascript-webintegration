<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - textContent</div>
    <div class="content">
      <p>
        Vous vous souvenez d'un exercice précédent où nous devions récupérer le
        nœud de texte et y modifier le texte. Eh bien, nous avons textContent
        pour le faire à notre place.
      </p>
      <MonacoEditor
        code='const paragraph &equals; document&period;body&period;getElementsByTagName&lpar;"p"&rpar;&lbrack;0&rsqb;&semi;&NewLine;paragraph&period;textContent &plus;&equals;&NewLine;  "La phrase suivante a &eacute;t&eacute; ajout&eacute;e par Javascript&period; Cool"&semi;&NewLine;&sol;&sol;Voyez comme c&apos;est facile sans se soucier des n&oelig;uds de texte&NewLine;&NewLine;&NewLine;'
        html='&lt;&excl;DOCTYPE html&gt;&NewLine;&lt;html&gt;&NewLine;  &lt;head&gt;&NewLine;    &lt;title&gt;Parcel Sandbox&lt;&sol;title&gt;&NewLine;    &lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;  &lt;&sol;head&gt;&NewLine;&NewLine;  &lt;body&gt;&NewLine;    &lt;p title&equals;"title"&gt;&NewLine;      Le texte ne se trouve pas directement dans l&apos;&eacute;l&eacute;ment p&comma; mais dans un noeud&NewLine;      enfant de type text&period;&NewLine;    &lt;&sol;p&gt;&NewLine;&NewLine;    &lt;script src&equals;"src&sol;index&period;js"&gt;&lt;&sol;script&gt;&NewLine;  &lt;&sol;body&gt;&NewLine;&lt;&sol;html&gt;&NewLine;&NewLine;'
        css=""
        jsindex="63"
        cssindex="64"
        htmlindex="65"
      />
    </div>
  </div>
</template>

<style scoped></style>
