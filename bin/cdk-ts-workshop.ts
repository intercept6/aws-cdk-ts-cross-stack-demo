#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { CdkTsWorkshopStack } from '../lib/cdk-ts-workshop-stack';
import { CdkTsWorkshopStack2 } from '../lib/cdk-ts-workshop-stack2';

const app = new cdk.App();
let stack1 = new CdkTsWorkshopStack(app, 'CdkTsWorkshopStack');
// stack1内のリソースの値をstack2に渡したい
// 検証なので､LambdaのARNをstack2のLambdaのタグに入れるとか
let stack2 = new CdkTsWorkshopStack2(app, 'CdkTsWorkshopStack2');
