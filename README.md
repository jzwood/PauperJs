# PauperJs
is a micro-library for client-side templating.

![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)

## API
Pauper transforms the [textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) of every `<render>` element in your markup into a function and replaces the [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) of that element with the returned value of that function (see [demo](https://jzwood.github.io/PauperJs/demo/)).

To illustrate, consider the following markup:
```html
<h1>
  <render>
    const today = (new Date()).getDay();
    const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const party = today === 0 || today === 6;
    return `It's ${week[day]}${party ? '—  gotta party! 🍹' : '. Got to work. 🖨'}`;
  </render>
</h1>
```

on Saturday this would render as
```html
<h1>
  <render>It's Saturday — gotta party! 🍹</render>
</h1>
```
and on Monday as
```html
<h1>
  <render>It's Monday. Got to work. 🖨</render>
</h1>
```

## Promises
Want to render async data? No problem. Pauper will correctly populate the render field if the `<render>` function returns a promise.
