export default function Fallback({ blocktype }: any) {
  console.warn(`No component found for: ${blocktype}`)
  return null
}
