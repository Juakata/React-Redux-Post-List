import jsonplaceholder from '../api/jsonplaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonplaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
}
