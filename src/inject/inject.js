chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(handleMutationEvents);
      });

      // configuration of the observer:
      var config = {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true
      };

      observer.observe(document, config);

      var handleMutationEvents = function handleMutationEvents(mutation) {
        Array.prototype.forEach.call(mutation.addedNodes, styleLabelsInNode);
        styleLabelsInNode(mutation.target);
      }

      var styleLabelsInNode = function styleLabelsInNode(node) {
        if (nodeIsElement(node)) {
          styleLabels(findLabelsInNode(node));
        }
      }

      var nodeIsElement = function nodeIsElement(node) {
        return (typeof node.querySelectorAll !== 'undefined');
      }

      var findLabelsInNode = function findLabelsInNode(node) {
        return node.querySelectorAll('a.label');
      }

      var styleLabels = function styleLabels(labels) {
        Array.prototype.forEach.call(labels, function(label) {
          var labelClass = isLabelEligible(label.textContent);
          if (labelClass != null) {
            label.classList.add(labelClass);
          } else {
            label.classList.remove(labelClass);
          }
        });
      }
    }
  }, 10);
});
