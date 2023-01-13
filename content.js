javascript: (function () {
  var url = window.location.href;
  var pullRequestPattern =
    /https:\/\/github\.com\/[^\/]+\/[^\/]+\/pull\/[^\/]+/;
  if (pullRequestPattern.test(url)) {
    var button = document.createElement("button");
    button.type = "button";
    button.className =
      "btn btn-sm d-inline-block float-left float-none m-0 ml-1 mr-md-0";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Edit Pull Request title");
    button.setAttribute(
      "data-ga-click",
      "Issues, edit issue, view:issue_show location:issue_header style:button logged_in:true"
    );
    button.innerHTML = "What the Diff?";

    var container = document.querySelector(
      ".gh-header-actions.mt-0.mt-md-2.mb-3.mb-md-0.ml-0.flex-md-order-1.flex-shrink-0.d-flex.flex-items-start"
    );
    if (container) {
      container.appendChild(button);
    }

    button.addEventListener("click", function () {
      var sidePanel = document.createElement("div");
      sidePanel.className = "side-panel";
      sidePanel.style.cssText =
        "position: absolute; top: 0; right: 0; bottom: 0; width: 30%; background-color: white; z-index: 999;";

      var closeButton = document.createElement("button");
      closeButton.innerHTML = "Close";
      closeButton.style.cssText = "position: absolute; top: 0; right: 0;";
      closeButton.addEventListener("click", function () {
        sidePanel.remove();
      });
      sidePanel.appendChild(closeButton);
      document.body.appendChild(sidePanel);
      if (pullRequestPattern.test(url)) {
        chrome.runtime.sendMessage(
          {
            msg: "get_diff",
            pullRequestUrl:
              "https://patch-diff.githubusercontent.com/raw/blocklessnetwork/web-console/pull/97.diff",
          },
          function (response) {
            console.log(response);
          }
        );
      }
    });
  }
})();
