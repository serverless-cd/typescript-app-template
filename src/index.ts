/* eslint-disable no-console */

interface keyValue {
  [key: string]: any
}

export default function run(inputs: keyValue): keyValue {
  console.log(`run :${inputs.milliseconds}`)
  return {success: true}
}
