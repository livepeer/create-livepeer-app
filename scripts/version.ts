/**
 * Version
 * =====================
 * Increment package.json version
 *
 *
 */
import * as fs from "fs";
import { argv } from "yargs";
import pkg from "../package.json";

const version = pkg.version.split(".");
let next_version, patch;

switch (argv.cmd) {
	case "main":
		patch = version[2].split("-");
		next_version = `${version[0]}.${version[1]}.${Number(patch[0])}`;
		break;

	default:
		next_version = "0.0.0";
		break;
}

pkg.version = next_version;

if (fs.existsSync("./package.json")) {
	fs.writeFile("./package.json", JSON.stringify(pkg), function writeJSON(error) {
		if (error) {
			console.log(JSON.stringify(error));
		}
	});
}
