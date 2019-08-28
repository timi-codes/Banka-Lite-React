export const getSuccessResponse = response => {
  return response.data;
};

export const getErrorResponse = err => {
  if (err.response) {
    const { response } = err;
    const { error } = response.data;
    return error;
  }
  if (err.message) {
    const { message } = err;
    return message;
  }
};