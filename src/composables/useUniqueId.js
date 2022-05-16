export const useUniqueId = () => {
  return Math.floor(Math.random() * Date.now())
}