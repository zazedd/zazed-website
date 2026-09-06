#!/usr/bin/env python3
"""Build the static photo manifest used by /photos.

Run this after adding/removing photos:
    python3 scripts/build-photos.py
"""
import json
import re
from pathlib import Path

photos_dir = Path(__file__).resolve().parent.parent / "photos"
allowed_extensions = {".jpg", ".jpeg", ".webp", ".avif", ".png"}


def album_title(folder_name):
    match = re.fullmatch(r"(.+?)(\d{4})", folder_name)
    if match:
        return f"{match.group(1).replace('-', ' ').replace('_', ' ').title()} {match.group(2)}"
    return folder_name.replace("-", " ").replace("_", " ").title()

albums = []
for folder in sorted(path for path in photos_dir.iterdir() if path.is_dir()):
    images = sorted(
        path.name for path in folder.iterdir()
        if path.is_file() and path.suffix.lower() in allowed_extensions
    )
    if images:
        albums.append({"id": folder.name, "title": album_title(folder.name), "images": [f"{folder.name}/{image}" for image in images]})

(photos_dir / "photos.json").write_text(json.dumps(albums, indent=2) + "\n")
print(f"Wrote {len(albums)} albums to photos/photos.json")
