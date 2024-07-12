pipeline {
    agent any
    
    stages {
        stage('Clonar o repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/Cristiantxb/teste-api-ebac.git'
            }
        }
        stage('Instalar dependências') {
            steps {
                sh 'npm install' 
            }
        }
        stage('Executar Testes') {
            steps {
                sh 'npm run cy: run'
            }
        }
    }
}