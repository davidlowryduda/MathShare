# Specification for Math Snippet Sharing Tool

## Overview ##

This tool allows mathematicians to create, preview, and share snippets of math
using markdown and MathJax. Users can generate URLs to share their snippets,
which are encoded in base64 format to ensure compatibility and ease of use.

## Functional Requirements

### 1. User Interface
- **Layout**:
  - The editor should be on the left side of the screen, and the live preview should be on the right.
  - Include a header and footer.

- **Header**:
  - Displays "TEST SITE"
  - Links: "About this site" and "Source"

- **Footer**:
  - Displays "© [Current Year] DLD. All rights reserved"
  - Includes a "Report Issue" link to GitHub

- **Editor**:
  - A plain markdown input area where users can write and format their snippets.
  - A character counter that displays remaining characters (with a maximum limit of 1500 characters).
  - An inline warning message when the character count exceeds the limit.

- **Preview**:
  - Updates in real-time with a 2-second delay after the user stops typing.
  - Renders markdown and MathJax content.

### 2. URL Generation
- **Export Button**: Labeled "Generate URL".
- The generated URL should:
  - Encode the markdown content in base64 format.
  - Be displayed in a text box with a "Copy to Clipboard" button.

- **Character Limit Enforcement**:
  - A soft limit of 1500 characters for raw markdown input.
  - Display a fixed warning message when the user exceeds the limit.

### 3. Error Handling
- The tool is designed to be lean and will not include error handling for URL generation.

## Architecture Choices
- **Frontend**: HTML, CSS, and JavaScript for a static site with no backend dependencies.
- **Libraries**:
  - Markdown parsing library for processing markdown input.
  - MathJax for rendering mathematical expressions.

## Data Handling
- **Character Limit**:
  - The input will be validated in real-time to ensure it does not exceed 1500 characters.

- **Base64 Encoding**:
  - Use JavaScript's built-in functions to encode the markdown content into base64 format before generating the URL.

## Implementation Plan
1. **Set Up the Project**:
   - Create the static HTML structure with header, footer, editor, and preview sections.

2. **Implement the Editor**:
   - Create a textarea for the markdown input and display the character counter.

3. **Implement the Preview**:
   - Use MathJax to render the markdown and math expressions in the preview area.

4. **Character Count Logic**:
   - Implement the logic to count characters and display the warning message when exceeding the limit.

5. **URL Generation**:
   - Create the logic for encoding the markdown in base64 and generating the URL.

6. **Copy to Clipboard Functionality**:
   - Implement the button to copy the generated URL to the clipboard.

7. **Styling**:
   - Apply default styles for a clean and simple layout.

8. **Testing**:
   - Test the functionality across different browsers to ensure compatibility.

9. **Deployment**:
   - Host the static site on a web server or a static hosting service.

## Browser Compatibility
- The tool will support the latest versions of major browsers: Chrome, Firefox, Safari, and Edge.
