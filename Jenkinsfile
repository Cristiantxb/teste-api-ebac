pipeline {
    agent any

    stages {
        stage('Clonar repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/Cristiantxb/teste-api-ebac.git'
            }
        }

        stage('Instalar dependências e Executar testes') {
            steps {
                // Navega para o diretório correto no Windows
                dir('C:\repositorio\teste-api-ebac') {
                    // Instala as dependências
                    bat 'npm install'

                    // Executa os testes
                    bat 'npx cypress run'
                }
            }
        }
    }
}