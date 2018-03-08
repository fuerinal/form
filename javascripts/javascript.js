console.log("Working");
(function(win, undefined) {
$(function() {
  var rules = {
    email: function(node) {
      var inputText = node.value,
          inputRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

      return inputRegex.test(inputText);
    },
    name: function(node) {
      var inputText = node.value,
          inputRegex = /^\s*[a-zA-Z0-9,\s]+\s*$/;

     return inputRegex.test(inputText);
    },
    case: function(node) {
      var inputText = node.value,
          inputRegex = /^\s*[a-zA-Z0-9,\s]+\s*$/;

     return inputRegex.test(inputText);
   },
    comment: function(node) {
      var inputText = node.value,
          inputRegex = /^\s*[a-zA-Z0-9,\s]+\s*$/;

     return inputRegex.test(inputText);
    }
  };

  function onFocusOut() {
    validate(this);
  }

  function validate(node) {
   var valid = isValid(node),
       $error = $(node).next('.error');

    if (valid) {
      $(node).attr('aria-invalid', false);
      $error
        .attr('aria-hidden', true)
        .hide();

      $(node).attr('aria-describedby', '');
    } else {

      $(node).attr('aria-invalid', true);
      $error
        .attr('aria-hidden', false)
        .show();
      $(node).attr('aria-describedby', $error.attr('id'));
    }
  }

  function isValid(node) {
    return rules[node.dataset.rule](node);
  }

  $('[aria-invalid]').on('focusout', onFocusOut);
});
}(window));
