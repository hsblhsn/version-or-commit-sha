import {versionOrCommitSha} from '../src/versionorsha'
import {expect, test} from '@jest/globals'

test('throws ref is empty or not defined', async () => {
  await expect(versionOrCommitSha('', '')).rejects.toThrow(
    'ref is empty or not defined'
  )
})

test('throws commit sha is empty or not defined', async () => {
  await expect(versionOrCommitSha('ref/tags/v1.0.0', '')).rejects.toThrow(
    'commit sha is empty or not defined'
  )
})

test('returns version when available', async () => {
  await expect(
    versionOrCommitSha(
      'refs/tags/v1.0.2',
      '6cf7c98f3b235884f459d2702fe0ba54bf447f7d'
    )
  ).resolves.toBe('v1.0.2')
})

test('returns commit sha when available', async () => {
  await expect(
    versionOrCommitSha(
      'refs/heads/main',
      '6cf7c98f3b235884f459d2702fe0ba54bf447f7d'
    )
  ).resolves.toBe('6cf7c98')
})
