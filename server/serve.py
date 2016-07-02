#!/usr/bin/env python3

import argparse
import os
import subprocess
import tempfile

from flask import Flask, Response


app = Flask(__name__, static_url_path="")


@app.route("/")
def index():
    with open(os.path.join("build", "index.html"), encoding="utf-8") as fp:
        return fp.read()


@app.route("/bundle.js")
def bundle():
    with open(os.path.join("build", "bundle.js"), encoding="utf-8") as fp:
        return fp.read()


@app.route("/vendor.bundle.js")
def vendor():
    with open(os.path.join("build", "vendor.bundle.js"), encoding="utf-8") as fp:
        return fp.read()


@app.route("/pdf")
def pdf():
    with tempfile.NamedTemporaryFile(suffix=".pdf", mode="rb+") as fp:

        server_directory = os.path.dirname(__file__)
        pdfjs_path = os.path.join(server_directory, "pdf.js")

        args = [
            "phantomjs",
            pdfjs_path,
            "http://localhost:8080/",
            fp.name,
        ]

        process = subprocess.Popen(
            args,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
        )
        stdout, stderr = process.communicate()

        if process.returncode:
            raise Exception((stdout, stderr))

        fp.seek(0)
        resp = Response(fp.read())
        resp.headers["Content-Type"] = "application/pdf"

        return resp


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--no-dev",
        action="store_true",
        help="disable webpack watch and build mode and flask debug",
        default=False,
    )

    args = parser.parse_args()

    if not args.no_dev:
        subprocess.Popen(["gulp", "webpack:watch"])
    app.debug = True

    app.run(host="0.0.0.0", port=8080, threaded=True)
