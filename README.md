# Async Load Script
a async load script js that can load any async script whatever and whenever you need. Load on demand to reduce loading burden.

# Requirement
In modern front end frames, if you want to use a component, you should use "import" or "require", that's ok when you are in development model.

However, after packaging, when browser loading these resources, it takes too long time.

On these conditions, we can do something to optimize loading. For example, some "buttons" , they are lazy events, we can lazily load these events and methods.

Now, we can use AsyncLoadScript.

# Principle

First, check all scripts in html;

Second, check if the script you want exists;

Third, if the script exists, then check the exists script and the script you want if the versions are the same, if same, callback function, if different, to go to the Fourth;

Fourth, load the new script with config url, set version attribute and name attribute.

Fifth, check the script onreadystatechange or onload, if everything is ok, then callback function.

# Example
import AsyncLoadScript from 'AsyncLoadScript';
        
        let res = await AsyncLoadScript({
          name: 'googleAD',
          version: '1.0.0',
          url: 'https://securepubads.g.doubleclick.net/tag/js/gpt.js',
          noCache: false,
        });
        if(res && typeof res === 'boolean'){
          // load success
        }else{
          // error load
        }
