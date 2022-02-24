# Version or Commit SHA

Get the version (tag) or the commit SHA of current push. This is useful for tagging docker image based on push or pull request event. It returns a short SHA if the push is not a tag push. If it's a tag push, it returns the tag itself.

### Usage:

```yml
      - uses: hsblhsn/version-or-commit-sha@v1
        id: get_version
        
      - run: echo ${{ steps.get_version.outputs.VERSION_OR_COMMIT_SHA }}
```
