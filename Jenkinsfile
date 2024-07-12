pipeline {
    agent any
enviroment {
    PATH = "/Users/crist/nvm/versions/node/v20.14.0.0/bin:$PATH"
}
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