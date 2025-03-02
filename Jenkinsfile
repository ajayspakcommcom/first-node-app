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
        stage('Stop Application') {
            steps {
                sh 'pm2 stop first-node-app || echo "Application was not running"'
            }
        }
        stage('Start/Restart Application') {
            steps {
                // sh 'cd /var/lib/jenkins/workspace/first-node-app && pm2 start app.js --name "first-node-app"'
                sh 'cd /var/lib/jenkins/workspace/first-node-app && pm2 restart first-node-app"'
            }
        }
        stage('Restart Nginx') {
            steps {
                sh 'sudo systemctl restart nginx'
            }
        }
    }
}