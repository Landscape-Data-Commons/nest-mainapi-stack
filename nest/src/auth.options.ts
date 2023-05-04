import { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
import {
  CognitoJwtVerifierProperties,
  CognitoJwtVerifierSingleUserPool,
} from "aws-jwt-verify/cognito-verifier";

export type CognitoJwtVerifier =
  CognitoJwtVerifierSingleUserPool<CognitoJwtVerifierProperties>;

export type CognitoModuleOptions = {
  identityProvider?: CognitoIdentityProviderClientConfig;
  jwtVerifier?: CognitoJwtVerifierProperties;
};