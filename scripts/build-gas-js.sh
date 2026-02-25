#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
GAS_DIR="$ROOT_DIR/google-apps-script"
INDEX_SRC="$ROOT_DIR/index.html"
CSS_SRC="$ROOT_DIR/styles.css"
JS_SRC="$ROOT_DIR/app.js"

INDEX_OUT="$GAS_DIR/Index.html"
STYLES_OUT="$GAS_DIR/Styles.html"
JS_OUT="$GAS_DIR/JS.html"

mkdir -p "$GAS_DIR"

{
  echo "<style>"
  cat "$CSS_SRC"
  echo "</style>"
} > "$STYLES_OUT"

{
  echo "<script>"
  cat "$JS_SRC"
  echo "</script>"
} > "$JS_OUT"

sed \
  -e 's|<link rel="stylesheet" href="styles.css">|<?!= include("Styles"); ?>|' \
  -e 's|<script src="app.js"></script>|<?!= include("JS"); ?>|' \
  "$INDEX_SRC" > "$INDEX_OUT"

echo "Gerado: $INDEX_OUT"
echo "Gerado: $STYLES_OUT"
echo "Gerado: $JS_OUT"
