# dark-slack

A combination of CSS with a few updates to theme out all of Slack matching macOS Mojave's dark mode. We also use local CSS files so you don't have to worry about downloading and the security issues that opens up

# Install

## First

This theme changes the font, it's feels easier to read. You can install from https://www.fontsquirrel.com/fonts/lato

## Second

Copy the CSS into place, on OSX.

```
cp caiceA.css dark.css /Applications/Slack.app/Contents/Resources
```

And then patch ssb-interop.js

```
cat ssb-interop-patch.js >> /Applications/Slack.app/Contents/Resources/app.asar.unpacked/src/static/ssb-interop.js
```

## Third

Restart or Refresh Slack (⌘+R) on macOS

# Credits

https://github.com/caiceA/slack-black-theme
https://github.com/widget-/slack-black-theme