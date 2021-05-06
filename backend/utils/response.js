/**
 * Returns response object
 * @param {string} message Response message
 * @param {*} data Data to be returned
 */

const response = (message, data) => {
  return {
    message: message,
    data: data || null,
  };
};

module.exports = response;
