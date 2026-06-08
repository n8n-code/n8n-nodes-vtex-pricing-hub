import type { INodeProperties } from 'n8n-workflow';

export const pricingHubPricesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Hub Prices"
					]
				}
			},
			"options": [
				{
					"name": "POST Api Pricing Hub Prices",
					"value": "POST Api Pricing Hub Prices",
					"action": "Get Prices",
					"description": "This route retrieves and applies prices for the items that are passed in the request. Pricing Hub will select the pricing method that will be used for each item and will fetch their respective price from the selected pricing method. \r\n\r\n>ℹ️ > This feature is in closed beta, available only for selected customers. If you have any questions, contact our [Support](https://support.vtex.com/hc/en-us/requests). ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/pricing-hub/prices"
						}
					}
				},
				{
					"name": "Config External Price Source",
					"value": "Config External Price Source",
					"action": "Configure External Price Source",
					"description": "This route facilitates setting up an external price source in Pricing Hub. It also allows you to activate or deactivate that source in a given account. \r\n\r\n>ℹ️ This feature is in closed beta, available only for selected customers. If you have any questions, contact our [Support](https://support.vtex.com/hc/en-us/requests). ",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/config"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/pricing-hub/prices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Hub Prices"
					],
					"operation": [
						"POST Api Pricing Hub Prices"
					]
				}
			}
		},
		{
			"displayName": "Account Name",
			"name": "accountName",
			"required": true,
			"description": "Name of the VTEX account. Used as part of the URL",
			"default": "apiexamples",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "accountName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Hub Prices"
					],
					"operation": [
						"POST Api Pricing Hub Prices"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Hub Prices"
					],
					"operation": [
						"POST Api Pricing Hub Prices"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Describes the type of the content being sent",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Hub Prices"
					],
					"operation": [
						"POST Api Pricing Hub Prices"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key",
			"name": "X-VTEX-API-AppKey",
			"required": true,
			"description": "The AppKey configured by the merchant",
			"default": "{{X-VTEX-API-AppKey}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Hub Prices"
					],
					"operation": [
						"POST Api Pricing Hub Prices"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token",
			"name": "X-VTEX-API-AppToken",
			"required": true,
			"description": "The AppToken configured by the merchant",
			"default": "{{X-VTEX-API-AppToken}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Hub Prices"
					],
					"operation": [
						"POST Api Pricing Hub Prices"
					]
				}
			}
		},
		{
			"displayName": "Utm Campaign",
			"name": "UtmCampaign",
			"type": "string",
			"default": "summer",
			"description": "Campaign name, represented by the `utm_campaign` value in the URL that led to the order. If there is no value, use `null`",
			"routing": {
				"send": {
					"property": "UtmCampaign",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Hub Prices"
					],
					"operation": [
						"POST Api Pricing Hub Prices"
					]
				}
			}
		},
		{
			"displayName": "Utm Internal Campaign",
			"name": "UtmInternalCampaign",
			"type": "string",
			"default": "sale",
			"description": "Internal campaign name, represented by the `utmi_cp` value in the URL that led to the order. If there is no value, use `null`",
			"routing": {
				"send": {
					"property": "UtmInternalCampaign",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Hub Prices"
					],
					"operation": [
						"POST Api Pricing Hub Prices"
					]
				}
			}
		},
		{
			"displayName": "Utm Medium",
			"name": "UtmMedium",
			"type": "string",
			"default": "social",
			"description": "Medium that indicates what type of traffic the customer originated from, represented by the `utm_medium` value in the URL that led to the order. If there is no value, use `null`",
			"routing": {
				"send": {
					"property": "UtmMedium",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Hub Prices"
					],
					"operation": [
						"POST Api Pricing Hub Prices"
					]
				}
			}
		},
		{
			"displayName": "Utm Source",
			"name": "UtmSource",
			"type": "string",
			"default": "facebook",
			"description": "Traffic source, indicates where the traffic originated from according to the `utm_source` value in the URL that led to the order. If there is no value, use `null`",
			"routing": {
				"send": {
					"property": "UtmSource",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Hub Prices"
					],
					"operation": [
						"POST Api Pricing Hub Prices"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "customer@email.com",
			"description": "The customer's email address. If there is no value, use an empty string",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Hub Prices"
					],
					"operation": [
						"POST Api Pricing Hub Prices"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Items",
			"name": "items",
			"type": "json",
			"default": "[\n  {\n    \"brandId\": \"2000000\",\n    \"categoriesIds\": [\n      \"1\"\n    ],\n    \"index\": 0,\n    \"priceTableIds\": [\n      \"1\"\n    ],\n    \"quantity\": 1,\n    \"sellerId\": \"1\",\n    \"skuId\": \"13\"\n  }\n]",
			"description": "The list of items that are to be priced by Pricing Hub",
			"routing": {
				"send": {
					"property": "items",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Hub Prices"
					],
					"operation": [
						"POST Api Pricing Hub Prices"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Sales Channel",
			"name": "salesChannel",
			"type": "string",
			"default": "1",
			"description": "Represents Checkout's sales channel",
			"routing": {
				"send": {
					"property": "salesChannel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Hub Prices"
					],
					"operation": [
						"POST Api Pricing Hub Prices"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Hub Prices"
					],
					"operation": [
						"POST Api Pricing Hub Prices"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Hub Prices"
					],
					"operation": [
						"POST Api Pricing Hub Prices"
					]
				}
			}
		},
		{
			"displayName": "PUT /config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Hub Prices"
					],
					"operation": [
						"Config External Price Source"
					]
				}
			}
		},
		{
			"displayName": "An",
			"name": "an",
			"description": "Name of the VTEX account",
			"default": "apiexamples",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "an",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Hub Prices"
					],
					"operation": [
						"Config External Price Source"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Hub Prices"
					],
					"operation": [
						"Config External Price Source"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "Describes the type of the content being sent",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Hub Prices"
					],
					"operation": [
						"Config External Price Source"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key",
			"name": "X-VTEX-API-AppKey",
			"required": true,
			"description": "The AppKey configured by the merchant",
			"default": "{{X-VTEX-API-AppKey}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Hub Prices"
					],
					"operation": [
						"Config External Price Source"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token",
			"name": "X-VTEX-API-AppToken",
			"required": true,
			"description": "The AppToken configured by the merchant",
			"default": "{{X-VTEX-API-AppToken}}",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Hub Prices"
					],
					"operation": [
						"Config External Price Source"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": false,
			"description": "Defines if the external price source is active (`true`) or not (`false`). If not set, the default value will be `false`.",
			"routing": {
				"send": {
					"property": "active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Hub Prices"
					],
					"operation": [
						"Config External Price Source"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "App Name",
			"name": "appName",
			"type": "string",
			"default": "",
			"description": "Name of the app that communicates with the external pricing source",
			"routing": {
				"send": {
					"property": "appName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Hub Prices"
					],
					"operation": [
						"Config External Price Source"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Hub Prices"
					],
					"operation": [
						"Config External Price Source"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing Hub Prices"
					],
					"operation": [
						"Config External Price Source"
					]
				}
			}
		},
];
