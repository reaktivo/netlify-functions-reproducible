exports.handler = async (event, context) => {
  const { name } = event.queryStringParameters;
  return {
    statusCode: 200,
    body: `Hello ${name || 'world'}`,
  }
};
