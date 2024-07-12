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
                bat 'npm install' 
            }
        }
        stage('Executar Testes') {
            steps {
                bat 'npx cypress run'
            }
        }
    }
}