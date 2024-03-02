<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">HTML DOM - firstChild</div>
    <div class="content">
      <p>
        pouvez-vous modifier le childNodes[0] pour utiliser le firstChild à la
        place ?
      </p>
      <MonacoEditor
        code='const paragraph &equals; document&period;body&period;getElementsByTagName&lpar;"p"&rpar;&lbrack;0&rsqb;&semi;&NewLine;console&period;log&lpar;paragraph&period;nodeValue&rpar;&semi; &sol;&sol;Affichera null&NewLine;let textNode &equals; paragraph&period;childNodes&lbrack;0&rsqb;&semi; &sol;&sol;obtient le premier noeud de ma liste de noeuds&NewLine;console&period;log&lpar;textNode&period;nodeValue&rpar;&semi; &sol;&sol;Affiche notre texte sur la console&NewLine;textNode&period;nodeValue &plus;&equals; "La phrase suivante a &eacute;t&eacute; ajout&eacute;e par Javascript&period; Cool"&semi;&NewLine;&NewLine;'
        html='&lt;&excl;DOCTYPE html&gt;&NewLine;&lt;html&gt;&NewLine;  &lt;head&gt;&NewLine;    &lt;title&gt;Parcel Sandbox&lt;&sol;title&gt;&NewLine;    &lt;meta charset&equals;"UTF-8" &sol;&gt;&NewLine;  &lt;&sol;head&gt;&NewLine;&NewLine;  &lt;body&gt;&NewLine;    &lt;p title&equals;"title"&gt;&NewLine;      Le texte ne se trouve pas directement dans l&apos;&eacute;l&eacute;ment p&comma; mais dans un noeud&NewLine;      enfant de type text&period;&NewLine;    &lt;&sol;p&gt;&NewLine;&NewLine;    &lt;script src&equals;"src&sol;index&period;js"&gt;&lt;&sol;script&gt;&NewLine;  &lt;&sol;body&gt;&NewLine;&lt;&sol;html&gt;&NewLine;&NewLine;'
        css=""
        jsindex="60"
        cssindex="61"
        htmlindex="62"
      />
    </div>
  </div>
</template>

<style scoped></style>
