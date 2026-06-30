import os
import re

# Define input and output paths
input_file = "./allitems.txt"
output_dir = "./source/runescape/model/Item/all"

# Create the output directory if it does not exist
os.makedirs(output_dir, exist_ok=True)

# Process the file line by line
with open(input_file, "r", encoding="utf-8") as file:
    for line in file:
        parts = line.strip().split("\t")
        if len(parts) >= 2:
            item_name = parts[0].strip()
            item_id = parts[1].strip()

            # Strip out all characters except letters, numbers, and spaces
            # This fixes the Windows OSError (Errno 22) caused by ?, #, and other invalid symbols
            clean_name = re.sub(r"[^a-zA-Z0-9\s]", "", item_name)

            # Collapse multiple spaces into a single space and trim edges
            clean_name = re.sub(r"\s+", " ", clean_name).strip()

            # Convert to Upper Case City formatting (Title Case)
            formatted_name = clean_name.title()

            # Create a valid TypeScript variable name (no spaces)
            ts_identifier = formatted_name.replace(" ", "")

            # Fallback if the name becomes empty after stripping characters
            if not ts_identifier:
                ts_identifier = f"Item{item_id}"
                formatted_name = f"Item{item_id}"

            # Ensure the TypeScript variable doesn't start with a number
            elif ts_identifier[0].isdigit():
                ts_identifier = f"Item{ts_identifier}"

            # Define safe file paths
            filename = f"{ts_identifier}.ts"
            file_path = os.path.join(output_dir, filename)

            # Check if file already exists to prevent overwriting
            if os.path.exists(file_path):
                print(f"Skipped (already exists): {filename}")
                continue

            # Generate valid, strongly-typed TypeScript export code
            file_contents = (
                f'import {{ Item }} from "../Item";\n\n'
                f"const {ts_identifier+'Data'} = {{\n"
                f"  id: {item_id},\n"
                f'  name: "{item_name}"\n'
                f"}};\n"
                f"export const {ts_identifier} = Item.fromJson({ts_identifier}Data);"
            )

            # Write the formatted TypeScript code inside the file
            with open(file_path, "w", encoding="utf-8") as out_file:
                out_file.write(file_contents)

print("File processing complete. All invalid symbols removed from filenames.")
