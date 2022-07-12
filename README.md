# Stopwatch

All credits go to [Haggen](https://github.com/haggen/stopwatch) for the original code.
This fork introduces a few qol improvements and personal changes:

- Adjust text and functionality to more closely match the google stopwatch widget.
- Change the background and foreground colors using the url by adding a `background-color` and `color` parameter. [Example](https://stopwatch.zzhou.dev/?background-color=%23191919)
- Notification is shown on the left side of the screen instead of the right side.

![A screenshot of Stopwatch embedded in Notion.so](screenshot.webp)

- Responsive and minimalist design, fit for embedding or full-screen display.
  - Works specially great in 📔[Notion](https://notion.so).
- Locally stored, persistent state — reopen the same URL in the same browser and it'll still be running.
- Keyboard accessible:
  - `C` to copy to clipboard.
  - `Space bar` to play/pause.
  - `Backspace` to clear.
  - `↑` or `Shift+↑` to increment.
  - `↓` or `Shift+↓` to decrement.
  - `L` to toggle color scheme.

## Development

Built with [Create React App](https://github.com/facebook/create-react-app).

```
npm install
npm start
```

## Legal

Apache-2.0 © 2020 Arthur Corenzan.
