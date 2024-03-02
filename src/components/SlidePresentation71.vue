<template>
  <div class="slide">
    <div class="heading">HTML DOM - insertAdjacentElement</div>
    <div class="content">
      <p>
        insertAdjacentElement fonctionne comme une combinaison de insertBefore
        et appendChild, mais permet de mieux contrôler l'endroit où le nouvel
        élément est inséré et est plus facile à gérer que la syntaxe tordue de
        insertBefore et appendChild
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
element.insertAdjacentElement(position, element)</pre
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
