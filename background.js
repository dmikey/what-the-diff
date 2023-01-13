chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.msg === "get_diff") {
    var pullRequestUrl = request.pullRequestUrl;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", pullRequestUrl + ".diff", true);
    xhr.onreadystatechange = function () {
      sendResponse({ diff: xhr.responseText });
    };
    xhr.send();
  }
});
