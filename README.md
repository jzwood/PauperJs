# PauperJs
is a micro-library for client-side templating.

![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)

## API
Pauper transforms the [textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) of every `<render>` element in your markup into a _function_ and replaces the [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) of that element with the returned value of that _function_ (see [demo](https://jzwood.github.io/PauperJs/demo/)).

To illustrate, consider the following markup:
```
<h1>
  <render>
    const today = (new Date()).getDay();
    const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const party = today === 0 || today === 6;
    return `It's ${week[today]}${party ? '—  gotta party! 🍹' : '. Got to work. 🖨'}`;
  </render>
</h1>
```

on Saturday this would render as
```
<h1>
  <render>It's Saturday — gotta party! 🍹</render>
</h1>
```
and on Monday as
```
<h1>
  <render>It's Monday. Got to work. 🖨</render>
</h1>
```

## Promises
Want to render async data? No problem. Pauper will correctly populate the render field if the `<render>` function returns a promise.

## No Javascript
Browsers usually have Javascript turned on but when they don't you want to be prepared. To do this you can place static fallback copy inside of a `<norender>` element.

```
<p>Welcome to my webpage!
  <norender>Plz turn on JavaScript to get the best experience!</norender>
  <render> return ajax('get:puppy_pics:all');</render>
</p>
```

When Javascript is disabled in the client's browser PauperJs won't run (_obviously_) which means that in order for the fallback to work correctly the following css must be added to the project manually.

```css
render:not(.rendered) {
  display: none;
}
```

When the render tags are being rendered PauperJs adds the class `rendered` which will allow them to avoid the `display: none;` selector. PauperJs will handle removing the `<norender>` tags.
