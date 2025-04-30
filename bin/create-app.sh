#!/usr/bin/env bash

APP_NAME=$1

DEST_DIR="./$APP_NAME"

SCRIPT_PATH="$(readlink -f "${BASH_SOURCE[0]}")"
PACKAGE_PATH="$(cd "$(dirname "$SCRIPT_PATH")/.." && pwd)"

SOURCE_DIR="$PACKAGE_PATH/templates/app"

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
