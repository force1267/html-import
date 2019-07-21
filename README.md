# HTML import

### example :

> index.html
```html
<body>
    <import body1>
    <import body2.html>
</body>
```
> body1.html
```html
<h3>hello</h3>
```
> body2.html
```html
<p>bye</p>
<import body1.html>
```

#### make the bundle
```bash
node builder.js index.html bundle.html
```
> bundle.html
```html
<body>
    <h3>hello</h3>
    <p>bye</p>
<h3>hello</h3>
</body>
```