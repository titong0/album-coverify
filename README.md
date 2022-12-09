# V2 - MAJOR REWRITE

## Current way of doing things

Each album has its own:
1. /pages/ALBUM.js page component
2. /Components/ALBUMEditor.js component
3. /Components/ALBUM/input.js components
4. /Components/ALBUM/ALBUMfunctions.js 

All of these are fundamental and do the following:
1. Entry point for the album cover, generic <Head> component with nearly identical SEO thingies. 
2. handles state used in a draw() function which is passed to the `EditorContainer`. The editor needs to render a <Download> component.
3. A varying number of files depending on the amount of interactive things about in the cove; for example, if a cover can change two images and one text it will likely have three different files. 
4. Different functions for the actual interaction with the canvas, they are fixed to drawing in a coordinate that is specific to the album cover itself. This means that a simple ctx.fillText() needs a function that wraps it.

 ### Problems with current implementation:
  * Some editors have controlled inputs while others use formValues.
  * Way too many files
  * Different components for each input leads to inconsistent styling.
  * Having to create independent editors, inputs, and functions for each album adds a ton of boilerplate that could be abstracted. 

## V2 objectives
* Make all inputs controlled. Re-renders shouldn't be a big problem
* Migrate the entire project to typescript
* Reduce all inputs components to just one, or two if needed (text that can have different colors or make certain coordinates modifiable)
* Avoid having to pass context to all functions. instead craete a class with all of the canvas interactions.
* Remove the ALBUMFunctions files. Ideally the following functions would exist:
  ```javascript
    text()
    image()
    scalableImage()
  ```
  

  





