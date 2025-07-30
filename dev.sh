#!/usr/bin/env bash

set -e

APP_NAME="zync"
OUT_DIR="dist"

# Detect host OS
HOST_OS="$(uname -s)"
case "$HOST_OS" in
    Linux*)   PLATFORM="linux" ;;
    Darwin*)  PLATFORM="macos" ;;
    MINGW*|MSYS*|CYGWIN*) PLATFORM="windows" ;;
    *)        PLATFORM="unknown" ;;
esac

# -----------------------------
# Functions
# -----------------------------

run_dev() {
    echo "🚀 Running $APP_NAME in dev mode..."
    bun run src/main.ts
}

build_current() {
    echo "⚡ Building $APP_NAME for $PLATFORM..."
    mkdir -p "$OUT_DIR"
    bun build ./src/main.ts --compile --outfile "$OUT_DIR/$APP_NAME"
    echo "✅ Built: $OUT_DIR/$APP_NAME"
}

cross_build() {
    echo "🌍 Cross-building for all platforms..."

    mkdir -p "$OUT_DIR"

    # Linux
    echo "🐧 Building Linux x64..."
    bun build ./src/main.ts --compile --target bun-linux-x64 --outfile "$OUT_DIR/$APP_NAME-linux"

    # macOS
    echo "🍎 Building macOS x64..."
    bun build ./src/main.ts --compile --target bun-darwin-x64 --outfile "$OUT_DIR/$APP_NAME-macos"

    # Windows
    echo "🪟 Building Windows x64..."
    bun build ./src/main.ts --compile --target bun-windows-x64 --outfile "$OUT_DIR/$APP_NAME.exe"

    echo "✅ Cross-build complete! Files in $OUT_DIR/"
}

# -----------------------------
# Interactive Menu
# -----------------------------

clear
echo "====================="
echo "   ⚡ Zync Dev CLI    "
echo "====================="
echo "1) Run in Dev Mode"
echo "2) Build (Current Platform)"
echo "3) Cross-Build (All Platforms)"
echo "4) Exit"
echo
read -p "Select an option: " choice

case "$choice" in
    1) run_dev ;;
    2) build_current ;;
    3) cross_build ;;
    4) echo "Bye! 👋"; exit 0 ;;
    *) echo "❌ Invalid choice!" ;;
esac
