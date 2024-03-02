<template>
  <div class="slide">
    <div class="heading">HTML DOM - insertAdjacentText</div>
    <div class="content">
      <p>
        La méthode insertAdjacentText() insère un nœud texte à une position
        donnée par rapport à l'élément sur lequel il est appelé
      </p>
      <p><b>Syntax:</b></p>
      <div
        style="
          background: #ffffff;
          overflow: auto;
          width: auto;
          border: solid gray;
          border-width: 0.1em 0.1em 0.1em 0.8em;
          padding: 0.2em 0.6em;
        "
      >
        <pre style="margin: 0; line-height: 125%">
                  element.insertAdjacentText(position, text)</pre
        >
      </div>
      <br />
      <table>
        <tbody>
          <tr>
            <th>Value</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>afterbegin</td>
            <td>Après le début de l'élément (premier enfant)</td>
          </tr>
          <tr>
            <td>afterend</td>
            <td>Après l'élément</td>
          </tr>
          <tr>
            <td>beforebegin</td>
            <td>Avant l'élément</td>
          </tr>
          <tr>
            <td>beforeend</td>
            <td>Avant la fin de l'élément (dernier enfant)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
