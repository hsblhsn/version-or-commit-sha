# Version or Commit SHA

Get the version (tag) or the commit SHA of current push. This is useful for tagging docker image based on push or pull request event. It returns a short SHA if the push is not a tag push. If it's a tag push, it returns the tag itself.

### Usage:

```yml
      - name: Get version or commit SHA
        uses: hsblhsn/version-or-commit-sha@main
        id: get_version
      - name: Print version or commit SHA
        run: echo ${{ steps.get_version.outputs.VERSION_OR_COMMIT_SHA }}
```
