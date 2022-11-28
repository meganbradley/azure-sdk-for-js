let nock = require('nock');

module.exports.hash = "70f7ae8501472a7c4d0355f2965a5df1";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .put('/secrets/listSecretName-canretrieveallversionsofasecretbypage-')
  .query(true)
  .reply(401, {"error":{"code":"Unauthorized","message":"AKV10000: Request is missing a Bearer or PoP token."}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '97',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'WWW-Authenticate',
  'Bearer authorization="https://login.windows.net/12345678-1234-1234-1234-123456789012", resource="https://vault.azure.net"',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-client-request-id',
  '61786b13-7c4b-4f08-9ebc-074a8faf074a',
  'x-ms-request-id',
  '3bf6382d-e261-41af-9316-4a310cdff35b',
  'x-ms-keyvault-service-version',
  '1.9.501.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=167.220.81.158;act_addr_fam=InterNetwork;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Mon, 15 Aug 2022 18:24:09 GMT'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '51ff94b6-ed94-4c55-893d-7522f77c2500',
  'x-ms-ests-server',
  '2.1.13524.5 - EUS ProdSlices',
  'X-XSS-Protection',
  '0',
  'Set-Cookie',
  'fpc=Anno_FEECQpNl7ZBPQ4pF6w; expires=Wed, 14-Sep-2022 18:24:10 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrNmyutf0VkPuPeeAlFPMgzXUKHq4re29HjWNgggbmjcFQe5ikf1nbiG0TviKXPkQSJmtOWCT8xPEDCU8q3ubYgqqZzHHWDUoXBPIjww_vHXrjPQcxZ9E6-Yby1QFV3cpEOQmpfe3jmKwhxb0ZF4zSuUwZ-wBy6UKQtoYHx5sbj3kgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Mon, 15 Aug 2022 18:24:10 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/12345678-1234-1234-1234-123456789012/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/kerberos","tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '0e3acf24-574e-455e-a631-fa4303da5c00',
  'x-ms-ests-server',
  '2.1.13524.5 - NCUS ProdSlices',
  'X-XSS-Protection',
  '0',
  'Set-Cookie',
  'fpc=AkqJhxSFqqxNiIHkdRCxiz4; expires=Wed, 14-Sep-2022 18:24:10 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevr4aI1nlRXw43mIcwc_lbAY2gABOuSOTMFQi1XL_ZqkZGL_bdoQuSQWoV6OxQNvDDeXJW4SpHm_MSpsjkTs98IL_J-sHFfTo87vZWcrqThNUEzyNMpGm8S54ziEeaXut3NXDG5rmIcGayFi44iZz_SKAXXONqtzsKvRziMPk9qlKUgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Mon, 15 Aug 2022 18:24:10 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/12345678-1234-1234-1234-123456789012/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.12.0&x-client-OS=linux&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=ad4b8bed-d05f-490d-9393-400fab4eb900&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22cp1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '0b4140b2-e706-4072-b0d5-2d38450d6c00',
  'x-ms-ests-server',
  '2.1.13524.5 - EUS ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'X-XSS-Protection',
  '0',
  'Set-Cookie',
  'fpc=AjnM9QpITq9BsYXmRLYR--lIOq-wAQAAAEqGjNoOAAAA; expires=Wed, 14-Sep-2022 18:24:10 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Mon, 15 Aug 2022 18:24:10 GMT',
  'Content-Length',
  '1315'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .put('/secrets/listSecretName-canretrieveallversionsofasecretbypage-', {"value":"SECRET_VALUE0","attributes":{}})
  .query(true)
  .reply(200, {"value":"SECRET_VALUE0","id":"https://keyvault_name.vault.azure.net/secrets/listSecretName-canretrieveallversionsofasecretbypage-/9624965e0e854a589a642495db3ea01c","attributes":{"enabled":true,"created":1660587850,"updated":1660587850,"recoveryLevel":"CustomizedRecoverable+Purgeable","recoverableDays":7}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-client-request-id',
  '61786b13-7c4b-4f08-9ebc-074a8faf074a',
  'x-ms-request-id',
  'f07e863d-49c7-4db6-b957-68a6d3ca10ef',
  'x-ms-keyvault-service-version',
  '1.9.501.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=167.220.81.158;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '6c9b6de6-d98e-5367-b067-138ab294bcf6',
  'x-ms-keyvault-rbac-cache',
  'ra_age=16;da_age=4868;rd_age=4868;brd_age=912;ra_notif_age=507;dec_lev=1;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Mon, 15 Aug 2022 18:24:10 GMT',
  'Content-Length',
  '325'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .put('/secrets/listSecretName-canretrieveallversionsofasecretbypage-', {"value":"SECRET_VALUE1","attributes":{}})
  .query(true)
  .reply(200, {"value":"SECRET_VALUE1","id":"https://keyvault_name.vault.azure.net/secrets/listSecretName-canretrieveallversionsofasecretbypage-/21d19ad9963640cab20801ef76982b70","attributes":{"enabled":true,"created":1660587850,"updated":1660587850,"recoveryLevel":"CustomizedRecoverable+Purgeable","recoverableDays":7}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-client-request-id',
  'ae53ef9e-94aa-4037-9f47-5eeb93064294',
  'x-ms-request-id',
  'a3bc3b38-7c94-4d6b-abfc-b7aaab2dc460',
  'x-ms-keyvault-service-version',
  '1.9.501.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=167.220.81.158;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '6c9b6de6-d98e-5367-b067-138ab294bcf6',
  'x-ms-keyvault-rbac-cache',
  'ra_age=16;da_age=4868;rd_age=4868;brd_age=912;ra_notif_age=507;dec_lev=0;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Mon, 15 Aug 2022 18:24:10 GMT',
  'Content-Length',
  '325'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .put('/secrets/listSecretName-canretrieveallversionsofasecretbypage-', {"value":"SECRET_VALUE2","attributes":{}})
  .query(true)
  .reply(200, {"value":"SECRET_VALUE2","id":"https://keyvault_name.vault.azure.net/secrets/listSecretName-canretrieveallversionsofasecretbypage-/810f9419ac4c48dfb9bb02c655f76796","attributes":{"enabled":true,"created":1660587851,"updated":1660587851,"recoveryLevel":"CustomizedRecoverable+Purgeable","recoverableDays":7}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-client-request-id',
  'ed1ebf37-f374-4180-b933-9536c8589637',
  'x-ms-request-id',
  '8902c5fd-9d1e-4e9f-a4e7-85bba48b4497',
  'x-ms-keyvault-service-version',
  '1.9.501.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=167.220.81.158;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '6c9b6de6-d98e-5367-b067-138ab294bcf6',
  'x-ms-keyvault-rbac-cache',
  'ra_age=16;da_age=4868;rd_age=4868;brd_age=912;ra_notif_age=507;dec_lev=0;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Mon, 15 Aug 2022 18:24:10 GMT',
  'Content-Length',
  '325'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/secrets/listSecretName-canretrieveallversionsofasecretbypage-/versions')
  .query(true)
  .reply(200, {"value":[{"id":"https://keyvault_name.vault.azure.net/secrets/listSecretName-canretrieveallversionsofasecretbypage-/21d19ad9963640cab20801ef76982b70","attributes":{"enabled":true,"created":1660587850,"updated":1660587850,"recoveryLevel":"CustomizedRecoverable+Purgeable","recoverableDays":7}}],"nextLink":"https://keyvault_name.vault.azure.net:443/secrets/listSecretName-canretrieveallversionsofasecretbypage-/versions?api-version=7.3&$skiptoken=eyJOZXh0TWFya2VyIjoiMiEyMDghTURBd01URXhJWE5sWTNKbGRDOU1TVk5VVTBWRFVrVlVUa0ZOUlMxRFFVNVNSVlJTU1VWV1JVRk1URlpGVWxOSlQwNVRUMFpCVTBWRFVrVlVRbGxRUVVkRkxUQXhOams1T1RVek5ERTBPVEV4TWpRNE15ODRNVEJHT1RReE9VRkRORU0wT0VSR1FqbENRakF5UXpZMU5VWTNOamM1TmlFd01EQXdNamdoT1RrNU9TMHhNaTB6TVZReU16bzFPVG8xT1M0NU9UazVPVGs1V2lFLSIsIlRhcmdldExvY2F0aW9uIjowfQ&maxresults=1"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-client-request-id',
  'd316d84b-8e2e-4a73-8c87-2fd03fcd8dbf',
  'x-ms-request-id',
  '431fa42c-2e3e-431a-a514-7a035611f6c5',
  'x-ms-keyvault-service-version',
  '1.9.501.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=167.220.81.158;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '6c9b6de6-d98e-5367-b067-138ab294bcf6',
  'x-ms-keyvault-rbac-cache',
  'ra_age=16;da_age=4868;rd_age=4868;brd_age=913;ra_notif_age=507;dec_lev=1;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Mon, 15 Aug 2022 18:24:10 GMT',
  'Content-Length',
  '832'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/secrets/listSecretName-canretrieveallversionsofasecretbypage-/21d19ad9963640cab20801ef76982b70')
  .query(true)
  .reply(200, {"value":"SECRET_VALUE1","id":"https://keyvault_name.vault.azure.net/secrets/listSecretName-canretrieveallversionsofasecretbypage-/21d19ad9963640cab20801ef76982b70","attributes":{"enabled":true,"created":1660587850,"updated":1660587850,"recoveryLevel":"CustomizedRecoverable+Purgeable","recoverableDays":7}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-client-request-id',
  '25283f35-1f72-4bc9-aa1d-2bfc3cbc8f1f',
  'x-ms-request-id',
  '9475291a-6e8b-40de-b044-0625ca6766bd',
  'x-ms-keyvault-service-version',
  '1.9.501.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=167.220.81.158;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '6c9b6de6-d98e-5367-b067-138ab294bcf6',
  'x-ms-keyvault-rbac-cache',
  'ra_age=16;da_age=4868;rd_age=4868;brd_age=913;ra_notif_age=507;dec_lev=1;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Mon, 15 Aug 2022 18:24:10 GMT',
  'Content-Length',
  '325'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/secrets/listSecretName-canretrieveallversionsofasecretbypage-/versions')
  .query(true)
  .reply(200, {"value":[{"id":"https://keyvault_name.vault.azure.net/secrets/listSecretName-canretrieveallversionsofasecretbypage-/810f9419ac4c48dfb9bb02c655f76796","attributes":{"enabled":true,"created":1660587851,"updated":1660587851,"recoveryLevel":"CustomizedRecoverable+Purgeable","recoverableDays":7}}],"nextLink":"https://keyvault_name.vault.azure.net:443/secrets/listSecretName-canretrieveallversionsofasecretbypage-/versions?api-version=7.3&$skiptoken=eyJOZXh0TWFya2VyIjoiMiEyMDghTURBd01URXhJWE5sWTNKbGRDOU1TVk5VVTBWRFVrVlVUa0ZOUlMxRFFVNVNSVlJTU1VWV1JVRk1URlpGVWxOSlQwNVRUMFpCVTBWRFVrVlVRbGxRUVVkRkxUQXhOams1T1RVek5ERTBPVEV4TWpRNE15ODVOakkwT1RZMVJUQkZPRFUwUVRVNE9VRTJOREkwT1RWRVFqTkZRVEF4UXlFd01EQXdNamdoT1RrNU9TMHhNaTB6TVZReU16bzFPVG8xT1M0NU9UazVPVGs1V2lFLSIsIlRhcmdldExvY2F0aW9uIjowfQ&maxresults=1"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-client-request-id',
  'b5ab5237-42b8-4d4b-a71f-11811a4697ed',
  'x-ms-request-id',
  '9d6737e6-68a5-499b-bf13-a4e996f56acc',
  'x-ms-keyvault-service-version',
  '1.9.501.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=167.220.81.158;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '6c9b6de6-d98e-5367-b067-138ab294bcf6',
  'x-ms-keyvault-rbac-cache',
  'ra_age=16;da_age=4868;rd_age=4868;brd_age=913;ra_notif_age=507;dec_lev=0;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Mon, 15 Aug 2022 18:24:10 GMT',
  'Content-Length',
  '832'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/secrets/listSecretName-canretrieveallversionsofasecretbypage-/810f9419ac4c48dfb9bb02c655f76796')
  .query(true)
  .reply(200, {"value":"SECRET_VALUE2","id":"https://keyvault_name.vault.azure.net/secrets/listSecretName-canretrieveallversionsofasecretbypage-/810f9419ac4c48dfb9bb02c655f76796","attributes":{"enabled":true,"created":1660587851,"updated":1660587851,"recoveryLevel":"CustomizedRecoverable+Purgeable","recoverableDays":7}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-client-request-id',
  'e413502f-8ebe-429c-827c-ba9277823212',
  'x-ms-request-id',
  '038c1bbb-bec1-4fa5-a93c-79c9ddc1c6bd',
  'x-ms-keyvault-service-version',
  '1.9.501.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=167.220.81.158;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '6c9b6de6-d98e-5367-b067-138ab294bcf6',
  'x-ms-keyvault-rbac-cache',
  'ra_age=17;da_age=4868;rd_age=4868;brd_age=913;ra_notif_age=507;dec_lev=0;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Mon, 15 Aug 2022 18:24:10 GMT',
  'Content-Length',
  '325'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/secrets/listSecretName-canretrieveallversionsofasecretbypage-/versions')
  .query(true)
  .reply(200, {"value":[{"id":"https://keyvault_name.vault.azure.net/secrets/listSecretName-canretrieveallversionsofasecretbypage-/9624965e0e854a589a642495db3ea01c","attributes":{"enabled":true,"created":1660587850,"updated":1660587850,"recoveryLevel":"CustomizedRecoverable+Purgeable","recoverableDays":7}}],"nextLink":null}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-client-request-id',
  'd22579c2-873b-4740-809c-6365cb45bc54',
  'x-ms-request-id',
  '1ef59cc2-e151-471e-a11c-f42206b9191b',
  'x-ms-keyvault-service-version',
  '1.9.501.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=167.220.81.158;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '6c9b6de6-d98e-5367-b067-138ab294bcf6',
  'x-ms-keyvault-rbac-cache',
  'ra_age=17;da_age=4868;rd_age=4868;brd_age=913;ra_notif_age=507;dec_lev=0;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Mon, 15 Aug 2022 18:24:10 GMT',
  'Content-Length',
  '329'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/secrets/listSecretName-canretrieveallversionsofasecretbypage-/9624965e0e854a589a642495db3ea01c')
  .query(true)
  .reply(200, {"value":"SECRET_VALUE0","id":"https://keyvault_name.vault.azure.net/secrets/listSecretName-canretrieveallversionsofasecretbypage-/9624965e0e854a589a642495db3ea01c","attributes":{"enabled":true,"created":1660587850,"updated":1660587850,"recoveryLevel":"CustomizedRecoverable+Purgeable","recoverableDays":7}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-client-request-id',
  '3fa09a4a-cb70-4967-8bfd-d06b6ce56125',
  'x-ms-request-id',
  '36c6482d-becc-4722-8780-4c05d0729187',
  'x-ms-keyvault-service-version',
  '1.9.501.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=167.220.81.158;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '6c9b6de6-d98e-5367-b067-138ab294bcf6',
  'x-ms-keyvault-rbac-cache',
  'ra_age=17;da_age=4868;rd_age=4868;brd_age=913;ra_notif_age=508;dec_lev=0;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Mon, 15 Aug 2022 18:24:10 GMT',
  'Content-Length',
  '325'
]);