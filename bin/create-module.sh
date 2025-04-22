#!/usr/bin/env bash

# NODE_PATH=$(npm root -g) node -p "require.resolve('express-ts-wizard')"
# DIR_PATH=$(realpath ./)
DIR_PATH='/home/probook/Documents/GitHub/express-ts-wizard'

echo "📦 What would you like to name the module? (e.g., \"users\")"
read name

MODULE_NAME=$(echo "$name" | xargs)

BASE_PATH="src/modules"

if [ ! -d "$BASE_PATH" ]; then
  mkdir -p "$BASE_PATH"
fi

SUCCESS_MESSAGES=()
SUCCESS_ICON="✅"
ERROR_ICON="❌"

mkdir -p "$BASE_PATH/$MODULE_NAME"
if [ $? -ne 0 ]; then
  echo "$ERROR_ICON Failed to create the module directory for '$MODULE_NAME'."
  exit 1
fi

clean_up() {
  rm -rf "$BASE_PATH/$MODULE_NAME"
  echo "$ERROR_ICON Module creation failed."
  exit 1
}

CAPITALIZED_MODULE_NAME="$(echo "$MODULE_NAME" | awk '{print toupper(substr($0,1,1)) tolower(substr($0,2))}')"

create_controller() {
  TEMPLATE_PATH="$DIR_PATH/templates/module/controller.template.md"
  OUTPUT_FILE="$BASE_PATH/$MODULE_NAME/${MODULE_NAME}.controller.ts"

  sed -e "s/\${ModuleName}/$CAPITALIZED_MODULE_NAME/g" \
      -e "s/\${moduleName}/$MODULE_NAME/g" \
      "$TEMPLATE_PATH" > "$OUTPUT_FILE"

  if [ $? -ne 0 ]; then
    echo "$ERROR_ICON Failed to create $OUTPUT_FILE."
    clean_up
  fi
  SUCCESS_MESSAGES+=("$SUCCESS_ICON $OUTPUT_FILE created successfully!")
}

create_service() {
  TEMPLATE_PATH="$DIR_PATH/templates/module/service.template.md"
  OUTPUT_FILE="$BASE_PATH/$MODULE_NAME/${MODULE_NAME}.service.ts"

  sed -e "s/\${ModuleName}/$CAPITALIZED_MODULE_NAME/g" \
      -e "s/\${moduleName}/$MODULE_NAME/g" \
      "$TEMPLATE_PATH" > "$OUTPUT_FILE"

  if [ $? -ne 0 ]; then
    echo "$ERROR_ICON Failed to create $OUTPUT_FILE."
    clean_up
  fi
  SUCCESS_MESSAGES+=("$SUCCESS_ICON $OUTPUT_FILE created successfully!")
}

create_routes() {
  TEMPLATE_PATH="$DIR_PATH/templates/module/routes.template.md"
  OUTPUT_FILE="$BASE_PATH/$MODULE_NAME/${MODULE_NAME}.routes.ts"
  APP_PATH="src/app.ts"

  echo $BASE_PATH
  echo $APP_PATH

  sed -e "s/\${ModuleName}/$CAPITALIZED_MODULE_NAME/g" \
      -e "s/\${moduleName}/$MODULE_NAME/g" \
      "$TEMPLATE_PATH" > "$OUTPUT_FILE"

  sed -i -e '/^import /a import +'$MODULE_NAME'Router from "./modules/$MODULE_NAME/$MODULE_NAME.routes";' "$APP_PATH"
  sed -i -e "/private initRoutes() {/,/}/ { /this.app.use(.*);/!b; a\\
      this.app.use(\"/api/$MODULE_NAME\", '$MODULE_NAME'Router);
  }" "$APP_PATH"}

  if [ $? -ne 0 ]; then
    echo "$ERROR_ICON Failed to create $OUTPUT_FILE."
    clean_up
  fi

  SUCCESS_MESSAGES+=("$SUCCESS_ICON $OUTPUT_FILE created successfully!")
}

create_controller
create_service
create_routes

for msg in "${SUCCESS_MESSAGES[@]}"; do
  echo "$msg"
done

echo "🎉 Module '$MODULE_NAME' created successfully!"
