# Trigger 11ty Rebuild via Watch Target

This repo shows how to trigger an 11ty rebuild when a file changes inside of a configured watch target:

```js
module.exports = function(eleventyConfig) {
    eleventyConfig.addWatchTarget("./styles/");

    return {
        dir: {
            input: "src"
        }
    };
};
```
