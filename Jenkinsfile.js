pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/aarthiramkumar/jenkins.git'
            }
        }
        stage('Build Project') {
            steps {
                sh './build.sh'
            }
        }
        stage('Run Tests') {
            steps {
                sh './test.sh'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: '**/*.log'
        }
    }
}
