# Lineage Headings

A fork of Lineage which uses Markdown headings instead of HTML comments so that it is easier and nicer to edit documents in Obsidian's Markdown editor and export Lineage documents to Publish and PDF without additional steps.

This:

```markdown
# Section 1

# Section 1.1
```

Instead of this:

```html
<!--section:1-->

<!--section:1.1-->
```

- Minimal changes are made in the main branch in order to minimize divergence from upstream.
- The `test` branch includes a version of the test and generated files.
- The `extension` branch includes some fledgling code which would support both the HTML comment syntax and Markdown heading syntax, but as the upstream dev is not interested in it, it will probably not be completed.

# Lineage
Lineage is an Obsidian plugin that allows you to edit markdown files in a [gingko-like](https://gingkowriter.com/) interface.

![](https://raw.githubusercontent.com/ycnmhd/obsidian-lineage/docs/docs/media/screenshot.png)

## Usage
To open a file, use the ribbon icon, the file context menu, or the command palette.
To export a file, use the view context menu.
