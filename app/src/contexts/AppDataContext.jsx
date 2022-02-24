import { useContext, useEffect, useState, createContext } from 'react';
import axios from "axios";

const AppDataContext = createContext();

const useAppData = (
  urls = ["/api/users", "/api/comments", "/api/flashcards", "/api/tags"]
) => {
  const [state, setState] = useState({
    tags: [],
    users: [],
    comments: [],
    flashcards: [],
    pending: true,
    error: null,
  });
  // This function will change the local state when we book an comment.
  const postComment = (comment) => {
    const comment = {
      ...state.comment[id],
      comment: { ...comment },
    };
    const comment = {
      ...state.comment,
      [id]: comment,
    };
    // sends a put request using axios to the server with the useEffect hook
    const postingPromise = axios
      .put(`/api/comments/${id}`, {
        comment: { ...comment },
      })
      .then(() => {
        setState({ ...state, users, comment });
      });

    return bookingPromise;
  };
  // This function will cancel an comment via the useEffect hook, and setState.

  // This function will delete an comment via setState.
  const deleteComment = (id) => {
    const comment = {
      ...state.comment[id],
      comment: null,
    };
    const comment = {
      ...state.comment,
      [id]: comment,
    };
    const deleteCommentPromise = axios
      .delete(`/api/comments/${id}`)
      .then(() => {
        setState({ ...state, users, comment });
      });

    return deleteCommentPromise;
  };

  // return the responses from the axios requests and set the state state

  /**
   *@param {String[]} urls
   */
  function getState(urls) {
    const getResponses = urls.map((url) => axios.get(url));
    Promise.all(getResponses)
      .then((responseArr) => {
        const [usersResponse, commentResponse, flashcardsResponse] =
          responseArr;

        setState((prev) => {
          return {
            ...prev,
            users: usersResponse.data,
            comment: commentResponse.data,
            flashcards: flashcardsResponse.data,
            pending: false,
            error: null,
          };
        });
      })
      .catch((error) => {
        setState((prev) => ({
          ...prev,
          pending: false,
          error: error,
        }));
      });
  }
  // useEffect to get the state
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getState(urls), [...urls]);

  const value =  {
    state,
    setState,
    settags,
    bookcomment,
    deletecomment,
  };
  return (
      <AppDataContext.Provider value={value}>
          {children}
      </AppDataContext.Provider>
  )
};

export default useApplicationData;
