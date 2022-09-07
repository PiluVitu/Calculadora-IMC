export const CalculateIMC = (weight, height) => {
  return (weight / height ** 2).toFixed(1)
}
