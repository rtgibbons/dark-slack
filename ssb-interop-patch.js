
// Dark Slack theme
document.addEventListener("DOMContentLoaded", function() {
    // Then get its webviews
    let webviews = document.querySelectorAll(".TeamView webview");

    let customCustomCSS = ``

    let fs = require('fs');
    for (var file of ['dark.css', 'caiceA.css']) {
        let filePath = '/Applications/Slack.app/Contents/Resources/' + file;
        fs.readFile(filePath, {encoding: 'utf-8'}, function(err, css) {
	        if (!err) {
	          $("<style></style>").appendTo('head').html(css);
	        }
        });
    }
    // Wait for each webview to load
    webviews.forEach(webview => {
        webview.addEventListener('ipc-message', message => {
            if (message.channel == 'didFinishLoading')
            // Finally add the CSS into the webview
                cssPromise.then(css => {
                let script = `
let s = document.createElement('style');
s.type = 'text/css';
s.id = 'slack-custom-css';
s.innerHTML = \`${css + customCustomCSS}\`;
document.head.appendChild(s);
`
                webview.executeJavaScript(script);
            })
        });
    });
});