import * as core from '@actions/core'
import * as github from '@actions/github'
import {versionOrCommitSha} from './versionorsha'

async function run(): Promise<void> {
  try {
    const tag: string = await versionOrCommitSha(
      github.context.ref,
      github.context.sha
    )
    core.setOutput('VERSION_OR_COMMIT_SHA', tag)
    core.exportVariable('VERSION_OR_COMMIT_SHA', tag)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
