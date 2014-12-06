jquery.hasDataAttr
==================
## A jQuery plugin to verify data-attributes.

#### hasDataAttr can be used in three different ways:
- Verify the data-attribute is in the element
- Verify the data-attribute is not empty
- Check the value of the data-attribute against supplied string


Check if the data-attribute is a part of the element
```html
<a href="/" id="myElement" data-modal="coolness">Click Me</a>
```
```javascript
if($('#myElement').hasDataAttr("modal")){
  //do stuff
}
```

Check if the data-attribute is part of the element and the value is not empty.
```html
<a href="/" id="myElement" data-modal="">Click Me</a>
<a href="/" id="myOtherElement" data-toggle="myDiv">Close</a>
```
```javascript
//This will return false
if($('#myElement').hasDataAttr("modal", true)){
  //this stuff will not happen
}

//This will return true
if($('#myOtherElement').hasDataAttr("modal", true)){
  //do stuff
}

//Now check if it's empty
if($('#myElement').hasDataAttr("modal", false)){
  //do stuff
}

```

Check if the data-attribute is part of the element and the value of the attribute equals the supplied string.
```html
<a href="/" id="myElement" data-modal="wrongValue">Click Me</a>
<a href="/" id="myOtherElement" data-toggle="myDiv">Close</a>
```
```javascript
//This will return false
if($('#myElement').hasDataAttr("modal", "coolness")){
  //this stuff will not happen
}

//This will return true
if($('#myOtherElement').hasDataAttr("modal", "myDiv")){
  //do stuff
}
```


