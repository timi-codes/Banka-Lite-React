export const getSuccessResponse = response => {
  return response.data;
};

export const getErrorResponse = error => {
  if (error.response) {
    const { response } = error;
    const { message } = response.data;
    return message;
  }
  if (error.message) {
    const { message } = error;
    return message;
  }
};