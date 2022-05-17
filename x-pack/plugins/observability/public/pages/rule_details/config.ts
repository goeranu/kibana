/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { RuleType, Rule } from '@kbn/triggers-actions-ui-plugin/public';

type Capabilities = Record<string, any>;

export type InitialRule = Partial<Rule> &
  Pick<Rule, 'params' | 'consumer' | 'schedule' | 'actions' | 'tags' | 'notifyWhen'>;

export function hasAllPrivilege(rule: InitialRule, ruleType?: RuleType): boolean {
  return ruleType?.authorizedConsumers[rule.consumer]?.all ?? false;
}

export const hasExecuteActionsCapability = (capabilities: Capabilities) =>
  capabilities?.actions?.execute;

export const RULES_PAGE_LINK = '/app/observability/alerts/rules';
export const ALERT_PAGE_LINK = '/app/observability/alerts';
