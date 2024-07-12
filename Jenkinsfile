pipeline {
    agent any

    stage {
        stage('Clonar o repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/Cristiantxb/teste-api-ebac.git'
            }
        }
        stage('Instalar dependências') {
            steps {
                bat 'npm install -f'
            }
        }
        stage('Executar Testes') {
            steps {
                bat 'NO_COLOR=1
                npm run cy: run'
            }
        }
    }
}