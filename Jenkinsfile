pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }
    stage('Docker Build') {
            steps {
                sh 'docker build -t cloud-dashboard:latest .'
           }
        }
        stage('Deploy') {
             steps {
                 sh '''
                      docker stop cloud-board-container || true
                      docker rm cloud-board-container || true
                      docker run -d -p 8081:80 --name cloud-board-container cloud-board:latest
                 '''
           }
        }
    }
}
