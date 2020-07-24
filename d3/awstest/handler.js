'use strict';

module.exports.hello = async event => {
  let a = 0
  let b = 0

  try {
    a = parseFloat(event.queryStringParameters.a)
    b = parseFloat(event.queryStringParameters.b)
    
  } catch(err) {
    return {
      statusCode: 400,
      message: 'Erro ao converter os tipos, tente "a" (número) e "b" número'
    }
  }

  if (isNaN(a) || isNaN(b)) {
    return {
      statusCode: 400,
      message: 'Erro ao converter os tipos, tente "a" (número) e "b" número'
    }
  }
  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        resultado: a + b,
        message: 'Full cycle'
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
