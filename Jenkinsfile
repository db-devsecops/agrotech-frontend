pipeline {
    agent any
    stages {
        stage('cleaning') {
            steps {
            deleteDir()
            }
        }
        
      stage("Pushing build to s3 bucket") {
            steps {

                 withCredentials([[
                 $class: 'AmazonWebServicesCredentialsBinding',
                 credentialsId: "s3-jenkins",
                 accessKeyVariable: 'AWS_ACCESS_KEY_ID',
                 secretKeyVariable: 'AWS_SECRET_ACCESS_KEY'
                ]]) {
                // AWS Code
                sh """ 
                  git clone https://github.com/db-devsecops/agrotech-frontend.git
                  aws s3 rm s3://agrotech-frontend/ --recursive --exclude "*" --include "index.html" --include "error.html"
                  aws s3 cp /var/lib/jenkins/workspace/agrotech_frontend/agrotech-frontend/index.html s3://agrotech-frontend/
                  aws s3 cp /var/lib/jenkins/workspace/agrotech_frontend/agrotech-frontend/error.html s3://agrotech-frontend/
                  
                """
                }
            }
           stage('cleaning') {
            steps {
            deleteDir()
            }
        }
          
          
        } 

    }
}
