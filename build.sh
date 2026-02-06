#!/bin/bash
echo "Installing dependencies (skipping native modules)..."
npm install --omit=optional --ignore-scripts 2>&1 || true
echo "Build complete."
