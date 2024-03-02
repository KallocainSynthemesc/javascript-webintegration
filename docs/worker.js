self.onmessage = function (event) {
  const textcontent = event.data.code;
  let result = "";
  const console_log = console.log;
  console.log = function (...args) {
    console_log(...args);
    args.forEach((arg) => (result += `${JSON.stringify(arg)}\n`));
  };

  try {
    const compiledCode = new Function(textcontent);
    compiledCode();
    self.postMessage({ status: "success", message: result });
  } catch (e) {
    const errorMessage = e.message;
    const lineNumber = e.lineNumber ? ` at line ${e.lineNumber - 2}` : "";
    self.postMessage({
      status: "error",
      message: `Syntax error${lineNumber}: ${errorMessage}`,
    });
  }
  console.log = console_log;
};
