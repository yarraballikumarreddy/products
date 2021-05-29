import  axios  from "axios"
const allproducts = "https://fakestoreapi.com/products"
const user =`https://jsonplaceholder.typicode.com/users`
export const  allproduct = async () => {
  const x =  await axios.get(allproducts).then(res => res.data)
  return  x
}
export const  categoryName = async (categorySlecetedName) => {
  const categoryApi= `https://fakestoreapi.com/products/category/${categorySlecetedName}`
  const categoryres =  await axios.get(categoryApi).then(res => res.data)
  return  categoryres
}
export const  categories = async (categorySlecetedName) => {
  const categoriesApi= `https://fakestoreapi.com/products/categories`
  const categoriesApires =  await axios.get(categoriesApi).then(res => res.data)
  return  categoriesApires
}

