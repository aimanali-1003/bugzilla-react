import axios from 'axios'

export const ProjectShow = (id) =>
   axios.get(`${process.env.REACT_APP_BASE_URL}/${id}`
   )
  .then((response) =>  response.data)
  .catch(error => {
    console.log(error)
    return Promise.reject(error)
  })

export default {ProjectShow}
