Here’s a detailed blueprint and an iterative breakdown for building the math snippet sharing tool. Each step builds incrementally, focusing on best practices and ensuring integration without orphaned code.

---

## Step-by-Step Blueprint for Building the Project

### 1. Project Setup
- Create the project directory structure.
- Initialize an HTML file for the main interface.
- Set up a CSS file for styling.
- Set up a JavaScript file for functionality.

### 2. Build the HTML Structure
- Implement the header with site name and links.
- Create the main layout with an editor section and a preview section.
- Add a footer with copyright information and a report issue link.

### 3. Implement the Editor
- Create a textarea for markdown input.
- Add a character counter to display the remaining characters.
- Implement inline warning messages for character limit exceedance.

### 4. Implement the Preview Functionality
- Integrate MathJax to render mathematical expressions in the preview section.
- Add JavaScript logic to update the preview in real-time.

### 5. Implement URL Generation
- Create a button labeled "Generate URL."
- Encode the markdown content in base64 format.
- Display the generated URL in a text box with a "Copy to Clipboard" button.

### 6. Styling and User Experience
- Style the layout for a clean and simple appearance.
- Ensure responsive design for different screen sizes.

### 7. Testing and Debugging
- Test the functionality across various browsers.
- Debug any issues with markdown rendering or URL generation.

### 8. Deployment
- Prepare the project for deployment.
- Choose a static hosting service and upload the project files.

---

## Iterative Breakdown of Steps

### Iteration 1: High-Level Chunks

1. **Project Initialization**
   - Set up directory structure and files.
  
2. **HTML Layout Creation**
   - Build the static structure of the page.
  
3. **Implement Markdown Editor**
   - Create the markdown input and character counter.
  
4. **Preview Functionality**
   - Implement real-time preview with MathJax.
  
5. **URL Handling**
   - Add URL generation and copying functionality.

6. **Styling and Responsiveness**
   - Apply styles and ensure responsiveness.
  
7. **Testing and Debugging**
   - Test and fix any issues.

8. **Deployment Preparation**
   - Prepare and deploy the project.

### Iteration 2: Detailed Steps

#### Step 1: Project Initialization
1. Create a new directory for the project.
2. Inside the directory, create the following files:
   - `index.html`
   - `styles.css`
   - `script.js`

#### Step 2: HTML Layout Creation
1. Open `index.html` and set up the basic HTML structure.
2. Add the header section with the site name and links.
3. Create a main section with two divs: one for the editor and one for the preview.
4. Add a footer section with copyright information.

#### Step 3: Implement Markdown Editor
1. In `index.html`, add a `<textarea>` for the markdown input in the editor section.
2. Below the `<textarea>`, add a `<div>` for the character counter.
3. Write JavaScript code in `script.js` to calculate and display remaining characters.

#### Step 4: Preview Functionality
1. Integrate MathJax by adding its script in the header of `index.html`.
2. In `script.js`, write the logic to update the preview section based on the content of the `<textarea>`.
3. Set a 2-second delay for the preview update after the user stops typing.

#### Step 5: URL Handling
1. In `index.html`, add a button labeled "Generate URL."
2. Write JavaScript code to handle URL generation, encoding the markdown in base64 format.
3. Display the generated URL in a text box below the button.
4. Add a "Copy to Clipboard" button next to the URL.

#### Step 6: Styling and Responsiveness
1. Open `styles.css` and style the header, footer, editor, and preview sections.
2. Ensure the layout is responsive for different screen sizes using CSS media queries.

#### Step 7: Testing and Debugging
1. Test the tool in the latest versions of major browsers.
2. Debug any issues related to markdown rendering, character counting, or URL generation.

#### Step 8: Deployment Preparation
1. Prepare the project files for deployment by ensuring all links are relative.
2. Choose a static hosting service (e.g., GitHub Pages, Netlify).
3. Upload the project files to the hosting service.

---

## Prompts for Code Generation LLM

### Prompt 1: Project Initialization
```text
Create a new directory structure for a math snippet sharing tool. Inside the directory, create three files: `index.html`, `styles.css`, and `script.js`. Set up a basic HTML document structure in `index.html`.
```

### Prompt 2: HTML Layout Creation
```text
In the `index.html` file, add the following structure:
- A header section that contains the site name "TEST SITE", an "About this site" link, and a "Source" link.
- A main section with two divs: one for the editor (markdown input) and one for the preview.
- A footer section that contains "© [Current Year] DLD. All rights reserved" and a "Report Issue" link to GitHub.
```

### Prompt 3: Implement Markdown Editor
```text
In the `index.html`, add a `<textarea>` for the markdown input inside the editor section. Below the `<textarea>`, add a `<div>` to display the character counter. In `script.js`, write JavaScript code to calculate the remaining characters based on the input and display this in the counter div.
```

### Prompt 4: Preview Functionality
```text
Integrate MathJax in the `index.html` file by adding its script tag in the header. In `script.js`, write logic that updates the preview section based on the content of the `<textarea>`. Implement a 2-second delay for the preview update after the user stops typing.
```

### Prompt 5: URL Handling
```text
In the `index.html`, add a button labeled "Generate URL" below the character counter. Write JavaScript code in `script.js` to handle URL generation by encoding the markdown content in base64 format. Display the generated URL in a text box below the button and add a "Copy to Clipboard" button next to it.
```

### Prompt 6: Styling and Responsiveness
```text
Open the `styles.css` file and apply basic styles for the header, footer, editor, and preview sections. Ensure the layout is responsive for different screen sizes using CSS media queries.
```

### Prompt 7: Testing and Debugging
```text
Test the functionality of the math snippet sharing tool in the latest versions of major browsers (Chrome, Firefox, Safari, Edge). Debug any issues related to markdown rendering, character counting, or URL generation that arise during testing.
```

### Prompt 8: Deployment Preparation
```text
Prepare the project for deployment by ensuring that all links in `index.html` are relative. Choose a static hosting service (e.g., GitHub Pages, Netlify) and upload the project files to the service.
```

---

This approach ensures that each prompt builds incrementally on the previous work, maintaining best practices and a clear path forward without large jumps in complexity. Each step is small enough to implement safely while moving the project forward effectively. Let me know if there's anything you would like to modify or add!
