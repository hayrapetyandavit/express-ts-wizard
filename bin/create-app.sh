#!/usr/bin/env bash
echo "📁 Current directory: $(pwd)"
APP_NAME=$1

SOURCE_DIR="./templates/app"
DEST_DIR="./$APP_NAME"

# Copy the app folder to the current directory
cp -r "$SOURCE_DIR" "$DEST_DIR"

echo "🚀 express application created successfully"

# Ask if the user wants to install dependencies
read -p "Do you want to install dependencies? (y/N): " INSTALL_DEPS

# Convert input to lowercase for consistency
INSTALL_DEPS=$(echo "$INSTALL_DEPS" | tr '[:upper:]' '[:lower:]')

if [[ "$INSTALL_DEPS" == "y" || "$INSTALL_DEPS" == "yes" ]]; then
    cd "$DEST_DIR" || exit
    npm install
    echo "Dependencies installed."
else
    echo "Skipping dependency installation."
fi
