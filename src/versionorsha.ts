export async function versionOrCommitSha(
  ref: string,
  sha: string
): Promise<string> {
  return new Promise(resolve => {
    if (ref === '') {
      throw new Error('ref is empty or not defined')
    }
    if (sha === '') {
      throw new Error('commit sha is empty or not defined')
    }
    if (ref.startsWith('refs/tags/')) {
      const version = ref.replace('refs/tags/', '')
      if (version.startsWith('v')) {
        resolve(version)
        return
      }
    }
    resolve(sha.substring(0, 7))
    return
  })
}
