/* eslint-disable no-console */

interface IkeyValue {
  [key: string]: any
}

export default function run({
  inputs,
  context
}: {
  inputs: IkeyValue
  context: IkeyValue
}): IkeyValue {
  console.log(`run :${inputs.milliseconds}`)
  console.log(`context: ${JSON.stringify(context)}`)
  return {success: true}
}
