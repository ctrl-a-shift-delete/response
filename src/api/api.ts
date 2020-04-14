import axios, { AxiosResponse } from 'axios'
import { Post } from '../components/PostContent'

const PORT: string = ':3050'
const URL: string = 'http://localhost'

const getDomain = () => `${URL}${PORT}`

export const getPosts = (): Promise<Post[]> => {
  return axios.get(`${getDomain()}/posts`).then((response: AxiosResponse) => {
    return response.data
  })
}

export const savePost = (post: any): Promise<Post> => {
  return axios
    .post(`${getDomain()}/posts`, post)
    .then((response: AxiosResponse) => {
      return response.data
    })
}

export default { savePost, getPosts }
