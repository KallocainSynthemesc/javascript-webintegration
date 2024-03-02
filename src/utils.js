export function generateHTML(payload) {
  return `<html>
                <head>
                    <script type="module">
                        (()=>{
                            const console_log = window.console.log;
                            window.console.log = function(...args){
                            console_log(...args);
                            var textarea = document.getElementById('output');
                            if(!textarea) return;
                            args.forEach(arg=>textarea.value += arg)});
                            }
                        })();
                        (()=>{
                            const console_error = window.console.error;
                            window.console.error = function(...args){
                            console_error(...args);
                            var textarea = document.getElementById('output');
                            if(!textarea) return;
                            args.forEach(arg=>textarea.value += arg);
                            }
                        })();
                        ${payload.js};
                    </script>
                </head>
                <body>
                    <textarea id="output" readonly></textarea>
                </body>
            </html>`;
}
