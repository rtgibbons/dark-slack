// Dark Slack theme
document.addEventListener("DOMContentLoaded", function() {
    // Then get its webviews
    let webviews = document.querySelectorAll(".TeamView webview");
    // Fetch our CSS in parallel ahead of time
    //const cssPath = 'https://cdn.rawgit.com/laCour/slack-night-mode/master/css/raw/black.css';

    let customCustomCSS = ``

//     function loadCSS(filename) {
//         var file = document.createElement("link");
//         file.setAttribute("rel", "stylesheet");
//         file.setAttribute("type", "text/css");
//         file.setAttribute("href", filename);
//         document.head.appendChild(file);
//     }
//     loadCSS("https://foxshift.com/sib.css");
    let fs = require('fs');
    for (var file of ['dark.css', 'caicea.css']) {
        // const localCssPath = '/Applications/Slack.app/Contents/Resources/' + file;
        // let cssPromise = fetch(localCssPath).then(response => response.text());

        // // Insert a style tag into the wrapper view
        // cssPromise.then(css => {
        //     let s = document.createElement('style');
        //     s.type = 'text/css';
        //     s.innerHTML = css + customCustomCSS;
        //     document.head.appendChild(s);
        // });

        let filePath = '/Applications/Slack.app/Contents/Resources/' + file;
        //let tt__customCss = `.menu ul li a:not(.inline_menu_link) {color: #fff !important;}`
        fs.readFile(filePath, {encoding: 'utf-8'}, function(err, css) {
        if (!err) {
          $("<style></style>").appendTo('head').html(css);
          // $("<style></style>").appendTo('head').html('#reply_container.upload_in_threads .inline_message_input_container {background: padding-box #545454}');
          // $("<style></style>").appendTo('head').html('.p-channel_sidebar {background: #363636 !important}');
          // $("<style></style>").appendTo('head').html('#client_body:not(.onboarding):not(.feature_global_nav_layout):before {background: inherit;}');
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