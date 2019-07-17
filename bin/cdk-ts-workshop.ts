#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { CdkTsWorkshopStack } from '../lib/cdk-ts-workshop-stack';

const app = new cdk.App();
new CdkTsWorkshopStack(app, 'CdkTsWorkshopStack');