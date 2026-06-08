import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { pricingHubPricesDescription } from './resources/pricing-hub-prices';

export class VtexPricingHub implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'vtex-pricing-hub',
		name: 'N8nDevVtexPricingHub',
		icon: { light: 'file:./vtex-pricing-hub.svg', dark: 'file:./vtex-pricing-hub.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: '> This feature is in closed beta, available only for selected customers. If you have any questions, contact our Support',
		defaults: { name: 'vtex-pricing-hub' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevVtexPricingHubApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Pricing Hub Prices",
					"value": "Pricing Hub Prices",
					"description": ""
				}
			],
			"default": ""
		},
		...pricingHubPricesDescription
		],
	};
}
