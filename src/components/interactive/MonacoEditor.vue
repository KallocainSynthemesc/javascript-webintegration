<script>
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

export default {
  setup() {
    const TsLanguage = {
      defaultToken: "invalid",
      tokenPostfix: ".ts",
      keywords: [
        "abstract",
        "as",
        "break",
        "case",
        "catch",
        "class",
        "continue",
        "const",
        "constructor",
        "debugger",
        "declare",
        "default",
        "delete",
        "do",
        "else",
        "enum",
        "export",
        "extends",
        "false",
        "finally",
        "for",
        "from",
        "function",
        "get",
        "if",
        "implements",
        "import",
        "in",
        "infer",
        "instanceof",
        "interface",
        "is",
        "keyof",
        "let",
        "module",
        "namespace",
        "never",
        "new",
        "null",
        "package",
        "private",
        "protected",
        "public",
        "readonly",
        "require",
        "global",
        "return",
        "set",
        "static",
        "super",
        "switch",
        "symbol",
        "this",
        "throw",
        "true",
        "try",
        "type",
        "typeof",
        "unique",
        "var",
        "void",
        "while",
        "with",
        "yield",
        "async",
        "await",
        "of",
      ],
      typeKeywords: [
        "any",
        "boolean",
        "number",
        "object",
        "string",
        "undefined",
      ],
      operators: [
        "<=",
        ">=",
        "==",
        "!=",
        "===",
        "!==",
        "=>",
        "+",
        "-",
        "**",
        "*",
        "/",
        "%",
        "++",
        "--",
        "<<",
        "</",
        ">>",
        ">>>",
        "&",
        "|",
        "^",
        "!",
        "~",
        "&&",
        "||",
        "??",
        "?",
        ":",
        "=",
        "+=",
        "-=",
        "*=",
        "**=",
        "/=",
        "%=",
        "<<=",
        ">>=",
        ">>>=",
        "&=",
        "|=",
        "^=",
        "@",
      ],

      symbols: /[=><!~?:&|+\-*\\^%]+/,
      escapes:
        /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
      digits: /\d+(_+\d+)*/,
      octaldigits: /[0-7]+(_+[0-7]+)*/,
      binarydigits: /[0-1]+(_+[0-1]+)*/,
      hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
      regexpctl: /[(){}[\]$^|\-*+?.]/,
      regexpesc:
        /\\(?:[bBdDfnrstvwWn0\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,

      tokenizer: {
        root: [
          [/[{}]/, "delimiter.bracket"],
          {
            include: "common",
          },
        ],

        common: [
          [
            /[a-z_$][\w$]*/,
            {
              cases: {
                "@typeKeywords": "keyword",

                "@keywords": "keyword",

                "@default": "identifier",
              },
            },
          ],
          [/[A-Z][\w$]*/, "type.identifier"],
          {
            include: "@whitespace",
          },

          [
            /\/(?=([^\\/]|\\.)+\/([gimsuy]*)(\s*)(\.|;|,|\)|\]|\}|$))/,
            {
              token: "regexp",

              bracket: "@open",

              next: "@regexp",
            },
          ],
          [/[()[\]]/, "@brackets"],
          [/[<>](?!@symbols)/, "@brackets"],
          [/!(?=([^=]|$))/, "delimiter"],

          [
            /@symbols/,
            {
              cases: {
                "@operators": "delimiter",

                "@default": "",
              },
            },
          ],
          [/(@digits)[eE]([-+]?(@digits))?/, "number.float"],
          [/(@digits)\.(@digits)([eE][-+]?(@digits))?/, "number.float"],
          [/0[xX](@hexdigits)n?/, "number.hex"],
          [/0[oO]?(@octaldigits)n?/, "number.octal"],
          [/0[bB](@binarydigits)n?/, "number.binary"],
          [/(@digits)n?/, "number"],
          [/[;,.]/, "delimiter"],
          [/"([^"\\]|\\.)*$/, "string.invalid"],
          [/'([^'\\]|\\.)*$/, "string.invalid"],
          [/"/, "string", "@string_double"],
          [/'/, "string", "@string_single"],
          [/`/, "string", "@string_backtick"],
        ],

        whitespace: [
          [/[ \t\r\n]+/, ""],
          [/\/\*\*(?!\/)/, "comment.doc", "@jsdoc"],
          [/\/\*/, "comment", "@comment"],
          [/\/\/.*$/, "comment"],
        ],

        comment: [
          [/[^/*]+/, "comment"],
          [/\*\//, "comment", "@pop"],
          [/[/*]/, "comment"],
        ],

        jsdoc: [
          [/[^/*]+/, "comment.doc"],
          [/\*\//, "comment.doc", "@pop"],
          [/[/*]/, "comment.doc"],
        ],

        regexp: [
          [
            /(\{)(\d+(?:,\d*)?)(\})/,
            [
              "regexp.escape.control",
              "regexp.escape.control",
              "regexp.escape.control",
            ],
          ],
          [
            /(\[)(\^?)(?=(?:[^\]\\/]|\\.)+)/,
            [
              "regexp.escape.control",
              {
                token: "regexp.escape.control",

                next: "@regexrange",
              },
            ],
          ],
          [
            /(\()(\?:|\?=|\?!)/,
            ["regexp.escape.control", "regexp.escape.control"],
          ],
          [/[()]/, "regexp.escape.control"],
          [/@regexpctl/, "regexp.escape.control"],
          [/[^\\/]/, "regexp"],
          [/@regexpesc/, "regexp.escape"],
          [/\\\./, "regexp.invalid"],
          [
            /(\/)([gimsuy]*)/,
            [
              {
                token: "regexp",
                bracket: "@close",
                next: "@pop",
              },
              "keyword.other",
            ],
          ],
        ],

        regexrange: [
          [/-/, "regexp.escape.control"],
          [/\^/, "regexp.invalid"],
          [/@regexpesc/, "regexp.escape"],
          [/[^\]]/, "regexp"],
          [
            /\]/,
            {
              token: "regexp.escape.control",
              next: "@pop",
              bracket: "@close",
            },
          ],
        ],

        string_double: [
          [/[^\\"]+/, "string"],
          [/@escapes/, "string.escape"],
          [/\\./, "string.escape.invalid"],
          [/"/, "string", "@pop"],
        ],

        string_single: [
          [/[^\\']+/, "string"],
          [/@escapes/, "string.escape"],
          [/\\./, "string.escape.invalid"],
          [/'/, "string", "@pop"],
        ],

        string_backtick: [
          [
            /\$\{/,
            {
              token: "delimiter.bracket",

              next: "@bracketCounting",
            },
          ],
          [/[^\\`$]+/, "string"],
          [/@escapes/, "string.escape"],
          [/\\./, "string.escape.invalid"],
          [/`/, "string", "@pop"],
        ],

        bracketCounting: [
          [/\{/, "delimiter.bracket", "@bracketCounting"],
          [/\}/, "delimiter.bracket", "@pop"],
          {
            include: "common",
          },
        ],
      },
    };

    const JavaScriptLanguage = {
      defaultToken: "invalid",

      tokenPostfix: ".js",

      keywords: [
        "break",
        "case",
        "catch",
        "class",
        "continue",
        "const",
        "constructor",
        "debugger",
        "default",
        "delete",
        "do",
        "else",
        "export",
        "extends",
        "false",
        "finally",
        "for",
        "from",
        "function",
        "get",
        "if",
        "import",
        "in",
        "instanceof",
        "let",
        "new",
        "null",
        "return",
        "set",
        "super",
        "switch",
        "symbol",
        "this",
        "throw",
        "true",
        "try",
        "typeof",
        "undefined",
        "var",
        "void",
        "while",
        "with",
        "yield",
        "async",
        "await",
        "of",
      ],

      typeKeywords: [],

      operators: TsLanguage.operators,

      symbols: TsLanguage.symbols,
      escapes: TsLanguage.escapes,
      digits: TsLanguage.digits,
      octaldigits: TsLanguage.octaldigits,
      binarydigits: TsLanguage.binarydigits,
      hexdigits: TsLanguage.hexdigits,
      regexpctl: TsLanguage.regexpctl,
      regexpesc: TsLanguage.regexpesc,
      tokenizer: TsLanguage.tokenizer,
    };

    const html = {
      defaultToken: "",
      tokenPostfix: ".html",
      ignoreCase: true,

      // The main tokenizer for our languages
      tokenizer: {
        root: [
          [/<!DOCTYPE/, "metatag", "@doctype"],
          [/<!--/, "comment", "@comment"],
          [
            /(<)((?:[\w-]+:)?[\w-]+)(\s*)(\/>)/,
            ["delimiter", "tag", "", "delimiter"],
          ],
          [/(<)(script)/, ["delimiter", { token: "tag", next: "@script" }]],
          [/(<)(style)/, ["delimiter", { token: "tag", next: "@style" }]],
          [
            /(<)((?:[\w-]+:)?[\w-]+)/,
            ["delimiter", { token: "tag", next: "@otherTag" }],
          ],
          [
            /(<\/)((?:[\w-]+:)?[\w-]+)/,
            ["delimiter", { token: "tag", next: "@otherTag" }],
          ],
          [/</, "delimiter"],
          [/[^<]+/], // text
        ],

        doctype: [
          [/[^>]+/, "metatag.content"],
          [/>/, "metatag", "@pop"],
        ],

        comment: [
          [/-->/, "comment", "@pop"],
          [/[^-]+/, "comment.content"],
          [/./, "comment.content"],
        ],

        otherTag: [
          [/\/?>/, "delimiter", "@pop"],
          [/"([^"]*)"/, "attribute.value"],
          [/'([^']*)'/, "attribute.value"],
          [/[\w-]+/, "attribute.name"],
          [/=/, "delimiter"],
          [/[ \t\r\n]+/], // whitespace
        ],

        // -- BEGIN <script> tags handling

        // After <script
        script: [
          [/type/, "attribute.name", "@scriptAfterType"],
          [/"([^"]*)"/, "attribute.value"],
          [/'([^']*)'/, "attribute.value"],
          [/[\w-]+/, "attribute.name"],
          [/=/, "delimiter"],
          [
            />/,
            {
              token: "delimiter",
              next: "@scriptEmbedded",
              nextEmbedded: "text/javascript",
            },
          ],
          [/[ \t\r\n]+/], // whitespace
          [
            /(<\/)(script\s*)(>)/,
            ["delimiter", "tag", { token: "delimiter", next: "@pop" }],
          ],
        ],

        // After <script ... type
        scriptAfterType: [
          [/=/, "delimiter", "@scriptAfterTypeEquals"],
          [
            />/,
            {
              token: "delimiter",
              next: "@scriptEmbedded",
              nextEmbedded: "text/javascript",
            },
          ], // cover invalid e.g. <script type>
          [/[ \t\r\n]+/], // whitespace
          [/<\/script\s*>/, { token: "@rematch", next: "@pop" }],
        ],

        // After <script ... type =
        scriptAfterTypeEquals: [
          [
            /"([^"]*)"/,
            { token: "attribute.value", switchTo: "@scriptWithCustomType.$1" },
          ],
          [
            /'([^']*)'/,
            { token: "attribute.value", switchTo: "@scriptWithCustomType.$1" },
          ],
          [
            />/,
            {
              token: "delimiter",
              next: "@scriptEmbedded",
              nextEmbedded: "text/javascript",
            },
          ], // cover invalid e.g. <script type=>
          [/[ \t\r\n]+/], // whitespace
          [/<\/script\s*>/, { token: "@rematch", next: "@pop" }],
        ],

        // After <script ... type = $S2
        scriptWithCustomType: [
          [
            />/,
            {
              token: "delimiter",
              next: "@scriptEmbedded.$S2",
              nextEmbedded: "$S2",
            },
          ],
          [/"([^"]*)"/, "attribute.value"],
          [/'([^']*)'/, "attribute.value"],
          [/[\w-]+/, "attribute.name"],
          [/=/, "delimiter"],
          [/[ \t\r\n]+/], // whitespace
          [/<\/script\s*>/, { token: "@rematch", next: "@pop" }],
        ],

        scriptEmbedded: [
          [
            /<\/script/,
            { token: "@rematch", next: "@pop", nextEmbedded: "@pop" },
          ],
          [/[^<]+/, ""],
        ],

        // -- END <script> tags handling

        // -- BEGIN <style> tags handling

        // After <style
        style: [
          [/type/, "attribute.name", "@styleAfterType"],
          [/"([^"]*)"/, "attribute.value"],
          [/'([^']*)'/, "attribute.value"],
          [/[\w-]+/, "attribute.name"],
          [/=/, "delimiter"],
          [
            />/,
            {
              token: "delimiter",
              next: "@styleEmbedded",
              nextEmbedded: "text/css",
            },
          ],
          [/[ \t\r\n]+/], // whitespace
          [
            /(<\/)(style\s*)(>)/,
            ["delimiter", "tag", { token: "delimiter", next: "@pop" }],
          ],
        ],

        // After <style ... type
        styleAfterType: [
          [/=/, "delimiter", "@styleAfterTypeEquals"],
          [
            />/,
            {
              token: "delimiter",
              next: "@styleEmbedded",
              nextEmbedded: "text/css",
            },
          ], // cover invalid e.g. <style type>
          [/[ \t\r\n]+/], // whitespace
          [/<\/style\s*>/, { token: "@rematch", next: "@pop" }],
        ],

        // After <style ... type =
        styleAfterTypeEquals: [
          [
            /"([^"]*)"/,
            { token: "attribute.value", switchTo: "@styleWithCustomType.$1" },
          ],
          [
            /'([^']*)'/,
            { token: "attribute.value", switchTo: "@styleWithCustomType.$1" },
          ],
          [
            />/,
            {
              token: "delimiter",
              next: "@styleEmbedded",
              nextEmbedded: "text/css",
            },
          ], // cover invalid e.g. <style type=>
          [/[ \t\r\n]+/], // whitespace
          [/<\/style\s*>/, { token: "@rematch", next: "@pop" }],
        ],

        // After <style ... type = $S2
        styleWithCustomType: [
          [
            />/,
            {
              token: "delimiter",
              next: "@styleEmbedded.$S2",
              nextEmbedded: "$S2",
            },
          ],
          [/"([^"]*)"/, "attribute.value"],
          [/'([^']*)'/, "attribute.value"],
          [/[\w-]+/, "attribute.name"],
          [/=/, "delimiter"],
          [/[ \t\r\n]+/], // whitespace
          [/<\/style\s*>/, { token: "@rematch", next: "@pop" }],
        ],

        styleEmbedded: [
          [
            /<\/style/,
            { token: "@rematch", next: "@pop", nextEmbedded: "@pop" },
          ],
          [/[^<]+/, ""],
        ],

        // -- END <style> tags handling
      },
    };

    const css = {
      defaultToken: "",
      tokenPostfix: ".css",

      ws: "[ \t\n\r\f]*", // whitespaces (referenced in several rules)
      identifier:
        "-?-?([a-zA-Z]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*",

      brackets: [
        { open: "{", close: "}", token: "delimiter.bracket" },
        { open: "[", close: "]", token: "delimiter.bracket" },
        { open: "(", close: ")", token: "delimiter.parenthesis" },
        { open: "<", close: ">", token: "delimiter.angle" },
      ],

      tokenizer: {
        root: [{ include: "@selector" }],

        selector: [
          { include: "@comments" },
          { include: "@import" },
          { include: "@strings" },
          [
            "[@](keyframes|-webkit-keyframes|-moz-keyframes|-o-keyframes)",
            { token: "keyword", next: "@keyframedeclaration" },
          ],
          ["[@](page|content|font-face|-moz-document)", { token: "keyword" }],
          [
            "[@](charset|namespace)",
            { token: "keyword", next: "@declarationbody" },
          ],
          [
            "(url-prefix)(\\()",
            [
              "attribute.value",
              { token: "delimiter.parenthesis", next: "@urldeclaration" },
            ],
          ],
          [
            "(url)(\\()",
            [
              "attribute.value",
              { token: "delimiter.parenthesis", next: "@urldeclaration" },
            ],
          ],
          { include: "@selectorname" },
          ["[\\*]", "tag"], // selector symbols
          ["[>\\+,]", "delimiter"], // selector operators
          ["\\[", { token: "delimiter.bracket", next: "@selectorattribute" }],
          ["{", { token: "delimiter.bracket", next: "@selectorbody" }],
        ],

        selectorbody: [
          { include: "@comments" },
          [
            "[*_]?@identifier@ws:(?=(\\s|\\d|[^{;}]*[;}]))",
            "attribute.name",
            "@rulevalue",
          ], // rule definition: to distinguish from a nested selector check for whitespace, number or a semicolon
          ["}", { token: "delimiter.bracket", next: "@pop" }],
        ],

        selectorname: [
          ["(\\.|#(?=[^{])|%|(@identifier)|:)+", "tag"], // selector (.foo, div, ...)
        ],

        selectorattribute: [
          { include: "@term" },
          ["]", { token: "delimiter.bracket", next: "@pop" }],
        ],

        term: [
          { include: "@comments" },
          [
            "(url-prefix)(\\()",
            [
              "attribute.value",
              { token: "delimiter.parenthesis", next: "@urldeclaration" },
            ],
          ],
          [
            "(url)(\\()",
            [
              "attribute.value",
              { token: "delimiter.parenthesis", next: "@urldeclaration" },
            ],
          ],
          { include: "@functioninvocation" },
          { include: "@numbers" },
          { include: "@name" },
          { include: "@strings" },
          ["([<>=\\+\\-\\*\\/\\^\\|\\~,])", "delimiter"],
          [",", "delimiter"],
        ],

        rulevalue: [
          { include: "@comments" },
          { include: "@strings" },
          { include: "@term" },
          ["!important", "keyword"],
          [";", "delimiter", "@pop"],
          ["(?=})", { token: "", next: "@pop" }], // missing semicolon
        ],

        warndebug: [
          ["[@](warn|debug)", { token: "keyword", next: "@declarationbody" }],
        ],

        import: [
          ["[@](import)", { token: "keyword", next: "@declarationbody" }],
        ],

        urldeclaration: [
          { include: "@strings" },
          ["[^)\r\n]+", "string"],
          ["\\)", { token: "delimiter.parenthesis", next: "@pop" }],
        ],

        parenthizedterm: [
          { include: "@term" },
          ["\\)", { token: "delimiter.parenthesis", next: "@pop" }],
        ],

        declarationbody: [
          { include: "@term" },
          [";", "delimiter", "@pop"],
          ["(?=})", { token: "", next: "@pop" }], // missing semicolon
        ],

        comments: [
          ["\\/\\*", "comment", "@comment"],
          ["\\/\\/+.*", "comment"],
        ],

        comment: [
          ["\\*\\/", "comment", "@pop"],
          [/[^*/]+/, "comment"],
          [/./, "comment"],
        ],

        name: [["@identifier", "attribute.value"]],

        numbers: [
          [
            "-?(\\d*\\.)?\\d+([eE][\\-+]?\\d+)?",
            { token: "attribute.value.number", next: "@units" },
          ],
          ["#[0-9a-fA-F_]+(?!\\w)", "attribute.value.hex"],
        ],

        units: [
          [
            "(em|ex|ch|rem|fr|vmin|vmax|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?",
            "attribute.value.unit",
            "@pop",
          ],
        ],

        keyframedeclaration: [
          ["@identifier", "attribute.value"],
          ["{", { token: "delimiter.bracket", switchTo: "@keyframebody" }],
        ],

        keyframebody: [
          { include: "@term" },
          ["{", { token: "delimiter.bracket", next: "@selectorbody" }],
          ["}", { token: "delimiter.bracket", next: "@pop" }],
        ],

        functioninvocation: [
          [
            "@identifier\\(",
            { token: "attribute.value", next: "@functionarguments" },
          ],
        ],

        functionarguments: [
          ["\\$@identifier@ws:", "attribute.name"],
          ["[,]", "delimiter"],
          { include: "@term" },
          ["\\)", { token: "attribute.value", next: "@pop" }],
        ],

        strings: [
          ['~?"', { token: "string", next: "@stringenddoublequote" }],
          ["~?'", { token: "string", next: "@stringendquote" }],
        ],

        stringenddoublequote: [
          ["\\\\.", "string"],
          ['"', { token: "string", next: "@pop" }],
          [/[^\\"]+/, "string"],
          [".", "string"],
        ],

        stringendquote: [
          ["\\\\.", "string"],
          ["'", { token: "string", next: "@pop" }],
          [/[^\\']+/, "string"],
          [".", "string"],
        ],
      },
    };

    monaco.languages.register({ id: "javascript" });
    monaco.languages.register({ id: "js" });
    monaco.languages.register({ id: "html" });
    monaco.languages.register({ id: "css" });
    monaco.languages.setMonarchTokensProvider("js", JavaScriptLanguage);
    monaco.languages.setMonarchTokensProvider("javascript", JavaScriptLanguage);
    monaco.languages.setMonarchTokensProvider("html", html);
    monaco.languages.setMonarchTokensProvider("css", css);
  },
  data() {
    return {
      content: this.code,
      htmlcontent: this.html,
      csscontent: this.css,
      sandboxProxies: new WeakMap(),
      editor: null,
      editorcss: null,
      editorhtml: null,
      ro: null,
    };
  },
  props: ["code", "html", "css", "jsindex", "cssindex", "htmlindex"],
  methods: {
    handleMessage(event) {
      const { eventID, data } = event.data;
      if (eventID === "myEvent") {
        this.$refs.console.value = data.msg;
        console.log('Received message with event ID "myEvent":', data.msg);
      }
    },
    onResize() {
      const compstyle = window.getComputedStyle(this.$refs.box);
      this.$refs.editor.style.width = compstyle.getPropertyValue("width");
      this.$refs.editor.style.height = compstyle.getPropertyValue("height");
    },
    showCss() {
      this.$refs.editorcss.style.display = "block";
      this.$refs.editor.style.display = "none";
      this.$refs.editorhtml.style.display = "none";
    },
    showHtml() {
      this.$refs.editorhtml.style.display = "block";
      this.$refs.editorcss.style.display = "none";
      this.$refs.editor.style.display = "none";
    },
    showJs() {
      this.$refs.editorcss.style.display = "none";
      this.$refs.editor.style.display = "block";
      this.$refs.editorhtml.style.display = "none";
    },
    udpateIFrame() {
      const js = monaco.editor.getModels()[this.jsindex].getValue();
      const css = monaco.editor.getModels()[this.cssindex].getValue();
      const html = monaco.editor.getModels()[this.htmlindex].getValue();
      this.$refs.result.contentWindow.document.open();
      this.$refs.result.contentWindow.document.writeln(
        `${html}
        <style>${css}</style>
        <script type="module">
        let result = "";
        const console_log = console.log;
        console.log = function (...args) {
          console_log(...args);
          for(let arg of args){
            result += JSON.stringify(arg) + "\\n";
          }
          const eventID = 'myEvent'; // You can define your own event ID
          const data = { msg: result };
          window.parent.postMessage({ eventID, data }, "*");
        };
        ${js}
        <\/script>`
      );
      this.$refs.result.contentWindow.document.close();
    },
  },
  mounted() {
    this.editor = monaco.editor.create(this.$refs.editor, {
      value: this.content,
      language: "javascript",
      automaticLayout: true,
      fontSize: "18px",
      theme: "vs-dark",
    });

    this.editorcss = monaco.editor.create(this.$refs.editorcss, {
      value: this.csscontent,
      language: "css",
      automaticLayout: true,
      fontSize: "18px",
      theme: "vs-dark",
    });

    this.editorhtml = monaco.editor.create(this.$refs.editorhtml, {
      value: this.htmlcontent,
      language: "html",
      automaticLayout: true,
      fontSize: "18px",
      theme: "vs-dark",
    });

    this.ro = new ResizeObserver(this.onResize);
    this.ro.observe(this.$refs.box);

    window.addEventListener("message", this.handleMessage);
  },
  beforeUnmount() {
    this.ro.unobserve(this.$refs.box);
    window.removeEventListener("message", this.handleMessage);
  },
};
</script>
<template>
  <div class="container">
    <div class="JS">
      <button
        style="vertical-align: middle; background-color: greenyellow"
        @click="showJs()"
      >
        <span>Javascript</span>
      </button>
    </div>
    <div class="CSS">
      <button
        style="vertical-align: middle; background-color: lightcoral"
        @click="showCss()"
      >
        <span>CSS</span>
      </button>
    </div>
    <div class="HTML">
      <button
        style="vertical-align: middle; background-color: lightseagreen"
        @click="showHtml()"
      >
        <span>HTML</span>
      </button>
    </div>
    <div class="editor" ref="box">
      <div id="editor" ref="editor"></div>
      <div id="editorcss" style="display: none" ref="editorcss"></div>
      <div id="editorhtml" style="display: none" ref="editorhtml"></div>
    </div>
    <div class="result">
      <iframe id="result" ref="result"></iframe>
      <textarea ref="console"></textarea>
    </div>
    <div class="run">
      <button style="vertical-align: middle" @click="udpateIFrame()">
        <span>Run</span>
      </button>
    </div>
  </div>
</template>
<style scoped>
.editor div {
  width: 100%;
  height: 100%;
  position: relative !important;
}
button {
  display: inline-block;
  border-radius: 4px;
  background-color: #feb322ff;
  border: none;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  height: 30px;
  transition: all 0.5s;
  cursor: pointer;
}

button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

button:hover span {
  padding-right: 25px;
}

button:hover span:after {
  opacity: 1;
  right: 0;
}
.container {
  display: grid;
  height: 90%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 1.4fr 1.4fr;
  gap: 0px 0px;
  grid-template-areas:
    "JS CSS HTML run run run run"
    "editor editor editor result result result result"
    "editor editor editor result result result result";
}
.JS {
  grid-area: JS;
}
.CSS {
  grid-area: CSS;
}
.HTML {
  grid-area: HTML;
}
.editor {
  grid-area: editor;
  height: 100%;
}
.result {
  grid-area: result;
  height: 100%;
}
.run {
  grid-area: run;
}

.result iFrame {
  height: 85%;
  width: 100%;
}

textarea {
  height: 14%;
  width: 100%;
}
</style>
