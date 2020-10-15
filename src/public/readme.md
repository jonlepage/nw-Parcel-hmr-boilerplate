## Public is a folder with static stuff

Parcel should not touch this.
the dependency: "parcel-plugin-static-files-copy" move all stuff of this folder to dist or build.

parcel-plugin-static-files-copy will also watch all change from this static
the package.json include in public is for nwjs

when build prod just change your "main": "http://localhost:1234", to point to your app entry
and remove "node-remote": "http://localhost:1234",
