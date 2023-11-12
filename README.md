# GJS Types

The following NPM scripts are tailored for an Arch Linux distribution. In addition to the default Gnome packages, the `gobject-introspection` package is required for generating the types. Other distributions might require other packages and CLI options. In particular, the `girDirectories` may need adaptation for other distributions.

```shell
# Type generation (as individual npm packages)
npm run generate:types

# Build tarballs for all generated npm packages
npm run build
```

The publishing process of packages remains a manual process for the time being.
