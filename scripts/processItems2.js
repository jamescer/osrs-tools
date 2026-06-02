const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dir = path.join('C:\\', 'Users', 'squeeze', 'Documents', 'Repos', 'osrs-tools', 'source', 'runescape', 'model', 'Item', 'all');

const requiredFields = {
  examine: "",
  value: 0,
  highAlch: 0,
  lowAlch: 0,
  weight: 0,
  members: false,
  tradeable: false,
  equipable: false,
  releaseDate: "",
  destroy: "Drop",
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: "",
  // iconUrl is optional, so we don't set a default
};

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  // Find the line that contains the const assignment with 'Data = {'
  let startLineIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('Data = {')) {
      startLineIndex = i;
      break;
    }
  }
  if (startLineIndex === -1) {
    console.log(`No Data = { found in ${filePath}`);
    return;
  }

  // Now we need to find the end of the object (matching closing brace)
  let braceCount = 0;
  let inObject = false;
  let endLineIndex = -1;
  for (let i = startLineIndex; i < lines.length; i++) {
    const line = lines[i];
    // Count opening and closing braces in this line
    const openMatches = line.match(/\{/g) || [];
    const closeMatches = line.match(/\}/g) || [];
    braceCount += openMatches.length;
    braceCount -= closeMatches.length;
    if (!inObject && braceCount > 0) {
      inObject = true;
    }
    if (inObject && braceCount === 0) {
      endLineIndex = i;
      break;
    }
  }
  if (endLineIndex === -1) {
    console.log(`Could not find matching closing brace in ${filePath}`);
    return;
  }

  // Extract the object lines (from startLineIndex to endLineIndex inclusive)
  const objectLines = lines.slice(startLineIndex, endLineIndex + 1);
  const objectBlock = objectLines.join('\n');

  // Extract the left-hand side (e.g., "const AbyssalDaggerImbueScrollData")
  const firstLine = objectLines[0];
  const lhsMatch = firstLine.match(/const\s+([A-Za-z]+Data)\s*=/);
  if (!lhsMatch) {
    console.log(`Could not find lhs in ${filePath}`);
    return;
  }
  const lhs = lhsMatch[1];

  // Extract the object string (content between the braces)
  // We know the first line has the opening brace after the equals sign.
  // Let's find the index of the first '{' in the first line and the last '}' in the last line.
  const firstLineObjStart = firstLine.indexOf('{');
  const lastLine = objectLines[objectLines.length - 1];
  const lastLineObjEnd = lastLine.lastIndexOf('}');
  if (firstLineObjStart === -1 || lastLineObjEnd === -1) {
    console.log(`Could not find braces in ${filePath}`);
    return;
  }

  // Build the object string by taking:
  //   - substring of first line from firstLineObjStart+1 to end
  //   - all lines in between
  //   - substring of last line from start to lastLineObjEnd
  let objectStr = '';
  if (objectLines.length === 1) {
    // Object is on one line
    objectStr = firstLine.substring(firstLineObjStart + 1, lastLineObjEnd);
  } else {
    // Multi-line object
    objectStr += firstLine.substring(firstLineObjStart + 1) + '\n';
    for (let i = 1; i < objectLines.length - 1; i++) {
      objectStr += objectLines[i] + '\n';
    }
    objectStr += lastLine.substring(0, lastLineObjEnd);
  }

// Now evaluate the object string in a sandbox to get the object
   let obj;
   try {
     // Normalize line endings and trim whitespace
     const normalized = objectStr.replace(/\r\n/g, '\n').trim();
     // Wrap in parentheses so it's evaluated as an expression, not a block
     const wrapper = `({${normalized}})`;
     obj = vm.runInNewContext(wrapper, {});
   } catch (e) {
     console.log(`Failed to evaluate object in ${filePath}: ${e}`);
     console.log(`objectStr: ${objectStr}`);
     return;
   }

  // Merge with requiredFields (existing fields take precedence)
  const mergedObj = { ...requiredFields, ...obj };

  // Now we need to format the merged object back into a string with the same indentation.
  // Determine the indentation of the first line inside the object (from the original)
  let indent = '  '; // default
  if (objectLines.length > 1) {
    const secondLine = objectLines[1];
    const match = secondLine.match(/^\s*/);
    if (match) {
      indent = match[0];
    }
  }

  // Format the object
  const formattedLines = [];
  for (const [key, value] of Object.entries(mergedObj)) {
    if (value === undefined) continue;
    let strValue;
    if (typeof value === 'string') {
      strValue = `"${value.replace(/"/g, '\\"')}"`;
    } else if (typeof value === 'boolean') {
      strValue = value.toString();
    } else if (typeof value === 'number') {
      strValue = value.toString();
    } else {
      // Skip functions, etc.
      continue;
    }
formattedLines.push(`${indent}  ${key}: ${strValue}`);
  }
  const formattedObject = '{\n' + formattedLines.join(',\n') + '\n' + indent + '}';

   // Replace the old object block with the new one
   const newObjectBlock = `${firstLine.substring(0, firstLineObjStart + 1)}${formattedObject}`;
  const newLines = lines.slice(0, startLineIndex)
    .concat([newObjectBlock])
    .concat(lines.slice(endLineIndex + 1));

  const newContent = newLines.join('\n');

  // Write back to file
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`Updated ${filePath}`);
}

// Process all .ts files in the directory
const files = fs.readdirSync(dir);
let count = 0;
for (const file of files) {
  if (file.endsWith('.ts')) {
    processFile(path.join(dir, file));
    count++;
    if (count % 1000 === 0) {
      console.log(`Processed ${count} files`);
    }
  }
}
console.log(`Finished processing ${count} files`);
