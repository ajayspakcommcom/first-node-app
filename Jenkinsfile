pipeline {
    agent any

    environment {
        NODEJS_HOME = "/usr/bin/node"
        PATH = "$NODEJS_HOME/bin:$PATH"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', credentialsId: 'github-credentials', url: 'https://github.com/ajayspakcommcom/first-node-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Application') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Restart PM2 Process') {
            steps {
                sh '''
                pm2 stop first-node-app || true
                pm2 start app.js --name first-node-app
                pm2 save
                '''
            }
        }

        stage('Reload Nginx') {
            steps {
                sh 'sudo systemctl reload nginx'
            }
        }
    }
}
