#!/bin/bash

echo "Select an action:"
echo "1) Build"
echo "2) Run"
echo "3) Build & Run"
echo "4) Clean"
read -p "> " choice

case "$choice" in
  1) make build ;;
  2) make run ;;
  3) make build && make run ;;
  4) make clean ;;
  *) echo "Invalid choice." ;;
esac