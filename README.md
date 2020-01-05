# Trigger 11ty Rebuild via Watch Target

Watch for changes to files in `./styles/` and then trigger a rebuild.

Config for `.elevnty.js`:
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
