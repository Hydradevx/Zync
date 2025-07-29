#!/usr/bin/env bash

set -e

APP_NAME="zync"
BUILD_DIR="build"

# Detect host OS
HOST_OS="$(uname -s)"
case "$HOST_OS" in
    Linux*)     PLATFORM=linux ;;
    Darwin*)    PLATFORM=macos ;;
    MINGW*|MSYS*|CYGWIN*) PLATFORM=windows ;;
    *)          PLATFORM=unknown ;;
esac

# -----------------------------
# Helper Functions
# -----------------------------

build_debug() {
    echo "🔧 Building (Debug)..."
    rm -rf "$BUILD_DIR"
    mkdir -p "$BUILD_DIR"
    cd "$BUILD_DIR"
    cmake -DCMAKE_BUILD_TYPE=Debug ..
    cmake --build .
    cd ..
    echo "✅ Debug build complete: $BUILD_DIR/$APP_NAME"
    ls -lh "$BUILD_DIR/$APP_NAME"*
}

build_release() {
    echo "⚡ Building (Release)..."
    rm -rf "$BUILD_DIR"
    mkdir -p "$BUILD_DIR"
    cd "$BUILD_DIR"
    cmake -DCMAKE_BUILD_TYPE=Release ..
    cmake --build . --config Release
    cd ..
    strip "$BUILD_DIR/$APP_NAME" || true
    echo "✅ Release build complete: $BUILD_DIR/$APP_NAME"
    ls -lh "$BUILD_DIR/$APP_NAME"*
}

run_app() {
    build_debug
    echo "🚀 Running $APP_NAME..."
    "./$BUILD_DIR/$APP_NAME"
}


# -----------------------------
# Interactive Menu
# -----------------------------

while true; do
    clear
    echo "====================="
    echo "   ⚡ Zync Dev CLI    "
    echo "====================="
    echo "1) Run in Debug"
    echo "2) Build Release"
    echo "3) Exit"
    echo
    read -p "Select an option: " choice

    case "$choice" in
        1) run_app ;;
        2) build_release ;;
        3) echo "Bye! 👋"; exit 0 ;;
        *) echo "Invalid choice!"; sleep 1 ;;
    esac

    echo
    read -p "Press Enter to return to menu..."
done
