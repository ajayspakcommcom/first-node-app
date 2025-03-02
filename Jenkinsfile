pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', credentialsId: 'first-node-app', url: 'https://github.com/ajayspakcommcom/first-node-app.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'cd /var/lib/jenkins/workspace/first-node-app && npm install'
            }
        }
        stage('Start/Restart Application') {
            steps {
                 sh 'cd /var/lib/jenkins/workspace/first-node-app && pm2 delete first-node-app || true'
                 sh 'cd /var/lib/jenkins/workspace/first-node-app && pm2 start app.js --name "first-node-app"'
                 sh 'pm2 save'
                 sh 'pm2 startup'
            }
        }
        stage('Restart Nginx') {
            steps {
                sh 'sudo systemctl restart nginx'
            }
        }
    }
}