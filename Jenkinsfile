pipeline {
    agent any
    stages {
      stage("Pushing build to s3 bucket") {
            steps {
                cleanWs()
                 withCredentials([[
                 $class: 'AmazonWebServicesCredentialsBinding',
                 credentialsId: "s3-jenkins",
                 accessKeyVariable: 'AWS_ACCESS_KEY_ID',
                 secretKeyVariable: 'AWS_SECRET_ACCESS_KEY'
                ]]) {
                // AWS Code
                sh """ 
				          aws s3 rm s3://agrotech-frontend/ --recursive --exclude "*" --include "index.html" --include "error.html"
                  aws s3 cp /var/lib/jenkins/workspace/agrotech_frontend/* s3://agrotech-frontend/                  
                """
                }
            } 
        } 

    }
}
