<script setup>
import MonacoEditor from "@/components/interactive/MonacoEditor.vue";
</script>
<template>
  <div class="slide">
    <div class="heading">Event handlers - load/onload</div>
    <div class="content">
      <p>
        Message à moi-même : Cet exemple ne fonctionne pas dans la sandbox et
        doit être téléchargé et exécuté localement pour une raison quelconque.
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event"
          >source</a
        >
      </p>
      <MonacoEditor
        code='window.addEventListener("load", (event) =&gt; {
  const log = document.querySelector(".event-log-contents");
  log.textContent += "load\n";
});

document.addEventListener("readystatechange", (event) =&gt; {
  const log = document.querySelector(".event-log-contents");
  log.textContent += `readystate: ${document.readyState}\n`;
});

document.addEventListener("DOMContentLoaded", (event) =&gt; {
  const log = document.querySelector(".event-log-contents");
  const reload = document.querySelector("#reload");
  log.textContent += `DOMContentLoaded\n`;

  reload.addEventListener("click", () =&gt; {
    log.textContent = "";
    setTimeout(() =&gt; {
      window.location.reload(true);
    }, 200);
  });
});
'
        html='&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Parcel Sandbox&lt;/title&gt;
    &lt;meta charset="UTF-8" /&gt;
    &lt;link rel="stylesheet" href="./src/styles.css" /&gt;
    &lt;script type="text/javascript" src="./src/index.js"&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div class="controls"&gt;
      &lt;button id="reload" type="button"&gt;Reload&lt;/button&gt;
    &lt;/div&gt;

    &lt;div class="event-log"&gt;
      &lt;label for="eventLog"&gt;Event log:&lt;/label&gt;
      &lt;textarea
        readonly
        class="event-log-contents"
        rows="8"
        cols="30"
        id="eventLog"
      &gt;&lt;/textarea&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;
'
        css=""
        jsindex="39"
        cssindex="40"
        htmlindex="41"
      />
    </div>
  </div>
</template>

<style scoped></style>
