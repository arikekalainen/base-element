/**
  Base Element
  author: Ari Kekalainen <ari.kekalainen@gmail.com>
  File: base-element.ts

  description: Base element's script
*/
(function () {
    Polymer({
        is: "base-element",
        ready: function () {
            this.textContent = "I'm a base-element. Modify me!";
        },
        foo: "bar"
    });
})();
