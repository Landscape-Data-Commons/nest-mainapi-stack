const {
        APIGateway
      } = require("@aws-sdk/client-api-gateway"),
      {
        CognitoIdentityProvider: CognitoIdentityServiceProvider
      } = require("@aws-sdk/client-cognito-identity-provider");

const API = new APIGateway({ region: 'us-east-1' });
const cognito = new CognitoIdentityServiceProvider({ region: 'us-east-1' });

const generateApiKey = async (sub) => {
  return await new Promise((resolve, reject)=>{
    const params = {
      name: `test-${sub}`,
      generateDistinctId: true,
      enabled: true,
      stageKeys: [
        {
          restApiId
        }
      ]
    }
  })
}

const main = async (event) => {
  console.log('Event:', event);
  return '';
};

exports.handler = main;

