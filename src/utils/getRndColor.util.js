export const getRndColor = () => {
  const rnd = Math.floor(Math.random() * 16777215).toString(16)
  return `%23${rnd}`
}
