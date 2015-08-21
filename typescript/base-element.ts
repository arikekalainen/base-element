/**
  Base Element
  author: Ari Kekalainen <ari.kekalainen@gmail.com>
  File: base-element.ts

  description: Base element's script
*/

// Example how to extend easily definitelyTyped's typedefinitions
// e.g. for own custom components
declare module polymer {
  interface Base {
    foo?: String;
  }
}

(() => {
  // register a new element called base-element
  Polymer({
    is: "base-element",
    // add a callback to the element's prototype
    ready: function() {
      this.textContent = "I'm a base-element. Modify me!"
    },
    foo: "bar"
  });
})();
