// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {

            var firstHref = $("a[href^='http']").eq(0).attr("href");
            var answerDom = $('.accepted-answer')[0];

            chrome.runtime.sendMessage({
                "message": "save_answer",
                "content": answerDom,
            });

        }
    }
);
