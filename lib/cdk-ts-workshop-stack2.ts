import cdk = require('@aws-cdk/core');
import lambda = require('@aws-cdk/aws-lambda');
import apigw = require('@aws-cdk/aws-apigateway');

export class CdkTsWorkshopStack2 extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_8_10,
      code: lambda.Code.asset('lambda'),
      handler: 'hello.handler',
    })

    const http = new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: hello
    });

    new cdk.CfnOutput(this, 'LambdaARN', {
      exportName: 'LambdaARN',
      value: hello.functionArn
    });

  }
}
